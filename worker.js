const {parentPort, workerData} = require("worker_threads")

var config = require("./dbconfig"); //instanciamos el archivo dbconfig
const sql = require("mssql"); //necesitamos el paquete sql
var physician = require("./physician");
const dbGeneralParameters= require('./controllers/cat-general-parameters');
const fs = require('fs');
const archiver = require('archiver');

async function createPdfPhysician(){
    try{
        const params = workerData;

        if(params.modality === "Master")
        {
          try{
            let pool = await sql.connect(config);
            let pdf = await pool.request()
                .input('pvmodality', sql.VarChar, params.modality)
                .input('pvidlanguageuser', sql.VarChar, params.language)
                .input('pvuser', sql.VarChar, params.user)
                .input('pvip', sql.VarChar, params.ip)
                .execute('spFLC_Generate_Price_List')

            pool.close();

            var response = {}
            if(pdf.recordsets[0].length === 0 && pdf.recordsets[1].length === 0)
            {
                response = {
                    data: {
                        status: 0,
                        message: "Lista de precios inválida"
                    }
                } 
                //return response;
                parentPort.postMessage(response)
            }
            else {

                var ruta = await dbGeneralParameters.getGeneralParametersbyID("61");
                var rutaPdf = ruta[0][0].Value;

                var rutaIp = await dbGeneralParameters.getGeneralParametersbyID("62");
                var rutaPdfIp = rutaIp[0][0].Value;

                const nombreArchivo = params.modality;
                const region = "Latin America and Caribbean";
                const para = "";
                var effectiveDate = formatearFecha(params.effectiveDate);
                const anio = obtenerAnio(params.effectiveDate);

                var responsePdf = await physician.createDocument(pdf.recordsets[0], pdf.recordsets[1], rutaPdf, rutaPdfIp, nombreArchivo, region, para, effectiveDate, anio);

                if(responsePdf.data.status === 1)
                {
                  try{
                    let pool = await sql.connect(config);
                    let pdfUpdateFolio = await pool.request()
                        .input('pvoptioncrud', sql.VarChar, "U")
                        .input('pvidlanguageuser', sql.VarChar, params.language)
                        .input('pifolio', sql.Int, params.idRequest)
                        .input('pvpath', sql.VarChar, responsePdf.data.pdfPath)
                        .input('pbstatus', sql.Int, 1)
                        .input('pvuser', sql.VarChar, params.user)
                        .input('pvip', sql.VarChar, params.ip)
                        .execute('spFLC_PDF_Requests_CRUD_Records')

                    pool.close();

                    response = {
                      data: {
                          status: 1,
                          message: "Pdf generado con exito"
                      }
                    } 

                    parentPort.postMessage(response)
                  }catch(error){
                    console.log(error);

                    response = {
                      data: {
                          status: 0,
                          message: "Pdf generado con exito, pero no se pudo actualizar el folio."
                      }
                    }
                    parentPort.postMessage(response)
                  }
                }                
            }

          }catch(error){
            console.log(error);
            response = {
              data: {
                  status: 0,
                  message: "No se pudo obtener la informacion de la base de datos para la generacion del PDF."
              }
            }
            parentPort.postMessage(response)
          }
        }
        else if(params.modality === "Cluster")
        {
          try{
            let pool = await sql.connect(config);
            let pdf = await pool.request()
                .input('pvmodality', sql.VarChar, params.modality)
                .input('pvidcluster', sql.VarChar, params.idCluster)
                .input('pvidlanguageuser', sql.VarChar, params.language)
                .input('pvuser', sql.VarChar, params.user)
                .input('pvip', sql.VarChar, params.ip)
                .execute('spFLC_Generate_Price_List')
            
            pool.close();
            
            if(pdf.recordsets[0].length === 0)
            {
                response = {
                    data: {
                        status: 0,
                        message: "Cluster inválido"
                    }
                } 
                //return response;
                parentPort.postMessage(response)
            }
            else {
              var ruta = await dbGeneralParameters.getGeneralParametersbyID("59");
              var rutaPdf = ruta[0][0].Value;
              rutaPdf = rutaPdf + pdf.recordsets[0][0].Cluster + "\\";

              var rutaIp = await dbGeneralParameters.getGeneralParametersbyID("63");
              var rutaPdfIp = rutaIp[0][0].Value;

              //Se crea la carpeta que se va a zippear
              fs.mkdir(rutaPdf, { recursive: true }, (error) => {
                if (error) {
                  console.error(`Error al crear la carpeta: ${error.message}`);
                } else {
                  console.log(`Carpeta creada exitosamente en ${rutaPdf}`);
                }
              });
              
              var customerIdsUnicos = new Set();

              // Utiliza forEach para recorrer el arreglo
              pdf.recordsets[0].forEach(objeto => {
                // Verifica si el objeto tiene la propiedad 'Customer Id' y agrega su valor al conjunto
                if ('Customer_Id' in objeto) {
                  customerIdsUnicos.add(objeto['Customer_Id']);
                }
              });

              // Convierte el conjunto a un array
              var listaCustomerIdsUnicos = Array.from(customerIdsUnicos);

              let poolD = await sql.connect(config);
              for(var i=0; i<listaCustomerIdsUnicos.length; i++)
              {
                try{
                  
                  let pdfDiscounts = await poolD.request()
                      .input('pvOptionCRUD', sql.VarChar, "R")
                      .input('pvIdLanguageUser', sql.VarChar, params.language)
                      .input('piIdCustomer', sql.Int, listaCustomerIdsUnicos[i])
                      .input('pbStatus', sql.Int, 1)
                      .execute('spFLC_Customer_Categories_CRUD_Records')

                 

                  var discounts = []
                  for(var j=0; j<pdfDiscounts.recordsets[0].length; j++)
                  {
                    discounts.push({
                      Product_Category : pdfDiscounts.recordsets[0][j].FLC_Category,
                      Discount: pdfDiscounts.recordsets[0][j].Category_Discount
                    })
                  }

                  var data = pdf.recordsets[0].filter(objeto => objeto['Customer_Id'] === listaCustomerIdsUnicos[i]);

                  var cluster = data[0].Cluster.replace(/ /g, '_').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                  var distributor = data[0].Distributor_Name.replace(/ /g, '_').normalize("NFD").replace(/[\u0300-\u036f]/g, "");

                  var nombreArchivo = params.modality + "_" + cluster + "_" + distributor;
                  nombreArchivo = nombreArchivo.replace(/[\/\\]/g, '');
                  console.log("Nombre archivo: " + nombreArchivo);
                  const region = "Latin America and Caribbean";
                  //const para = "";
                  //const region = data[0].Cluster;
                  const para = data[0].Distributor_Name;
                  const effectiveDate = formatearFecha(params.effectiveDate);
                  const anio = obtenerAnio(params.effectiveDate);

                  await physician.createDocument(discounts, data, rutaPdf, rutaPdfIp, nombreArchivo, region, para, effectiveDate, anio);
  
                }catch(error){
                  console.log(error);
                }
              }
              poolD.close(); 

              // Ruta de la carpeta que deseas comprimir
              const carpetaAComprimir = rutaPdf;
              console.log(carpetaAComprimir)

              // Nombre del archivo ZIP resultante
              const nombreArchivoZip = pdf.recordsets[0][0].Cluster + '.zip';
              console.log(nombreArchivoZip)

              setTimeout(() => {
                
                // Crea un flujo de salida para el archivo ZIP
                const salida = fs.createWriteStream(carpetaAComprimir + nombreArchivoZip);
                const archive = archiver('zip', { zlib: { level: 9 } });

                // Escucha el evento 'error' en el flujo de salida
                salida.on('error', (err) => {
                  throw err;
                });

                // Escucha el evento 'close' en el archivo ZIP
                salida.on('close', () => {
                  console.log(`Carpeta comprimida correctamente. Tamaño del archivo: ${archive.pointer()} bytes.`);
                });

                // Conecta el flujo de salida con archiver
                archive.pipe(salida);

                // Agrega la carpeta a archiver
                archive.directory(carpetaAComprimir, false);

                // Finaliza el archivo ZIP
                archive.finalize();

                parentPort.postMessage(response)
              }, 5000 * listaCustomerIdsUnicos.length);

              try{
                let pool = await sql.connect(config);
                let pdfUpdateFolio = await pool.request()
                  .input('pvoptioncrud', sql.VarChar, "U")
                  .input('pvidlanguageuser', sql.VarChar, params.language)
                  .input('pifolio', sql.Int, params.idRequest)
                  .input('pvpath', sql.VarChar, rutaPdfIp + nombreArchivoZip)
                  .input('pbstatus', sql.Int, 1)
                  .input('pvuser', sql.VarChar, params.user)
                  .input('pvip', sql.VarChar, params.ip)
                  .execute('spFLC_PDF_Requests_CRUD_Records')
                  
                pool.close();

                response = {
                  data: {
                      status: 1,
                      message: "Pdfs generados con exito"
                  }
                } 
                parentPort.postMessage(response)
              }catch(error){
                console.log(error);

                response = {
                  data: {
                      status: 1,
                      message: "Pdfs generados con exito, pero no se pudo actualizar el folio"
                  }
                } 
                parentPort.postMessage(response)
              }
            }
          }catch(error){
            console.log(error);
            response = {
              data: {
                  status: 0,
                  message: "No se pudo obtener la informacion de la base de datos para la generacion del PDF."
              }
            }
            parentPort.postMessage(response)
          }
        }
        else if(params.modality === "Distributor")
        {
          try{
            let pool = await sql.connect(config);
            let pdf = await pool.request()
                .input('pvmodality', sql.VarChar, params.modality)
                .input('pviddistributor', sql.VarChar, params.idDistributor)
                .input('pvidlanguageuser', sql.VarChar, params.language)
                .input('pvuser', sql.VarChar, params.user)
                .input('pvip', sql.VarChar, params.ip)
                .execute('spFLC_Generate_Price_List')

            pool.close();

            try{
              let poolD = await sql.connect(config);
              let pdfDiscounts = await poolD.request()
                  .input('pvOptionCRUD', sql.VarChar, "R")
                  .input('pvIdLanguageUser', sql.VarChar, params.language)
                  .input('piIdCustomer', sql.Int, params.idDistributor)
                  .input('pbStatus', sql.Int, 1)
                  .execute('spFLC_Customer_Categories_CRUD_Records')

              poolD.close();

              var discounts = []
              for(var i=0; i<pdfDiscounts.recordsets[0].length; i++)
              {
                discounts.push({
                  Product_Category : pdfDiscounts.recordsets[0][i].FLC_Category,
                  Discount: pdfDiscounts.recordsets[0][i].Category_Discount
                })
              }

              if(pdf.recordsets[0].length === 0)
              {
                  response = {
                      data: {
                          status: 0,
                          message: "Distribuidor inválido"
                      }
                  } 
                  //return response;
                  parentPort.postMessage(response)
              }
              else {
                var ruta = await dbGeneralParameters.getGeneralParametersbyID("60");
                var rutaPdf = ruta[0][0].Value;

                var rutaIp = await dbGeneralParameters.getGeneralParametersbyID("64");
                var rutaPdfIp = rutaIp[0][0].Value;

                var cluster = pdf.recordsets[0][0].Cluster.replace(/ /g, '_').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                var distributor = pdf.recordsets[0][0].Distributor_Name.replace(/ /g, '_').normalize("NFD").replace(/[\u0300-\u036f]/g, "");

                const nombreArchivo = params.modality + "_" + cluster + "_" + distributor;
                //const region = pdf.recordsets[0][0].Cluster;
                const para = pdf.recordsets[0][0].Distributor_Name;
                const region = "Latin America and Caribbean";
                //const para = "";
                const effectiveDate = formatearFecha(params.effectiveDate);
                const anio = obtenerAnio(params.effectiveDate);

                var responsePdf = await physician.createDocument(discounts, pdf.recordsets[0], rutaPdf, rutaPdfIp, nombreArchivo, region, para, effectiveDate, anio);
                console.log(responsePdf)
                var url
                if(responsePdf.data.status === 1)
                {
                  try{

                    let pool = await sql.connect(config);
                    let pdfUpdateFolio = await pool.request()
                        .input('pvoptioncrud', sql.VarChar, "U")
                        .input('pvidlanguageuser', sql.VarChar, params.language)
                        .input('pifolio', sql.Int, params.idRequest)
                        .input('pvpath', sql.VarChar, responsePdf.data.pdfPath)
                        .input('pbstatus', sql.Int, 1)
                        .input('pvuser', sql.VarChar, params.user)
                        .input('pvip', sql.VarChar, params.ip)
                        .execute('spFLC_PDF_Requests_CRUD_Records')
                    
                    pool.close();

                    response = { 
                      data: {
                          status: 1,
                          message: "Pdf generado con exito"
                      }
                    } 

                    parentPort.postMessage(response)
                  }catch(error){
                    console.log(error);
                    response = {
                      data: {
                          status: 0,
                          message: "PDF Generado con exito, pero no se pudo actualizar su folio en la base de datos."
                      }
                    }
                    parentPort.postMessage(response)
                  }
                } 
              }
            }catch(error){
              console.log(error);
              response = {
                data: {
                    status: 0,
                    message: "No se pudo obtener la informacion de la base de datos para la generacion del PDF."
                }
              }
              parentPort.postMessage(response)
            }
          }catch(error){
            console.log(error);
            response = {
              data: {
                  status: 0,
                  message: "No se pudo obtener la informacion de la base de datos para la generacion del PDF."
              }
            }
            parentPort.postMessage(response)
          }
        }
        else {
            response = {
                data: {
                    status: 0,
                    message: "Modalidad no válida"
                }
            } 
            parentPort.postMessage(response)
        }
        
    }catch(error){
        console.log(error)
        response = {
          data: {
              status: 0,
              message: "Lista de Precios inválida",
          }
        } 
        parentPort.postMessage(response)
    }
}

function obtenerAnio(fechaString) {
  // Divide la cadena de fecha en día, mes y año
  const partesFecha = fechaString.split('-');

  // Verifica que haya tres partes (día, mes, año)
  if (partesFecha.length === 3) {
    // Obtiene el año (la tercera parte)
    const anio = parseInt(partesFecha[2], 10);
    return anio;
  } else {
    // En caso de un formato de fecha inválido
    return null;
  }
}

function formatearFecha(fechaString) {
  // Divide la cadena de fecha en día, mes y año
  const partesFecha = fechaString.split('-');

  // Verifica que haya tres partes (día, mes, año)
  if (partesFecha.length === 3) {
    const dia = parseInt(partesFecha[0], 10);
    const mes = parseInt(partesFecha[1], 10) - 1; // Los meses en JavaScript son de 0 a 11
    const año = parseInt(partesFecha[2], 10);

    // Crea el objeto Date
    const fecha = new Date(año, mes, dia);

    // Obtiene el nombre del mes
    const nombreMes = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(fecha);

    // Obtiene el día del mes
    const diaDelMes = fecha.getDate();

    // Obtiene el año
    const añoActual = fecha.getFullYear();

    // Formatea la fecha como "NombreMes dia, año"
    const fechaFormateada = `${nombreMes} ${diaDelMes}, ${añoActual}`;

    return fechaFormateada;
  } else {
    // En caso de un formato de fecha inválido
    return 'Formato de fecha inválido';
  }
}


createPdfPhysician();


