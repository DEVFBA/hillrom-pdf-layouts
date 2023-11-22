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
            let pool = await sql.connect(config);
            let pdf = await pool.request()
                .input('pvmodality', sql.VarChar, params.modality)
                .input('pvidlanguageuser', sql.VarChar, params.language)
                .input('pvuser', sql.VarChar, params.user)
                .input('pvip', sql.VarChar, params.ip)
                .execute('spFLC_Generate_Price_List')

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
                const effectiveDate = params.effectiveDate;

                var responsePdf = await physician.createDocument(pdf.recordsets[0], pdf.recordsets[1], rutaPdf, rutaPdfIp, nombreArchivo, region, para, effectiveDate);

                if(responsePdf.data.status === 1)
                {
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

                  response = {
                    data: {
                        status: 1,
                        message: "Pdf generado con exito"
                    }
                  } 

                  parentPort.postMessage(response)
                }                
            }
        }
        else if(params.modality === "Cluster")
        {
          let pool = await sql.connect(config);
          let pdf = await pool.request()
              .input('pvmodality', sql.VarChar, params.modality)
              .input('pvidcluster', sql.VarChar, params.idCluster)
              .input('pvidlanguageuser', sql.VarChar, params.language)
              .input('pvuser', sql.VarChar, params.user)
              .input('pvip', sql.VarChar, params.ip)
              .execute('spFLC_Generate_Price_List')

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
            rutaPdf = rutaPdf + params.modality;

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
              if ('Customer Id' in objeto) {
                customerIdsUnicos.add(objeto['Customer Id']);
              }
            });

            // Convierte el conjunto a un array
            var listaCustomerIdsUnicos = Array.from(customerIdsUnicos);

            for(var i=0; i<listaCustomerIdsUnicos.length; i++)
            {
              let poolD = await sql.connect(config);
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

              var data = pdf.recordsets[0].filter(objeto => objeto['Customer Id'] === listaCustomerIdsUnicos[i]);

              const nombreArchivo = params.modality + "_" + data[0].Cluster + "_" + data[0]['Distributor Name'];
              const region = data[0].Cluster;
              const para = data[0]['Distributor Name'];
              const effectiveDate = params.effectiveDate;

              await physician.createDocument(discounts, data, rutaPdf, rutaPdfIp, nombreArchivo, region, para, effectiveDate);
 
            }

            setTimeout(() => {
              // Código que se ejecutará después de 5 segundos
              // Ruta de la carpeta que deseas comprimir
              const carpetaAComprimir = rutaPdf;

              // Nombre del archivo ZIP resultante
              const nombreArchivoZip = params.modality + '.zip';

              // Crea un flujo de salida para el archivo ZIP
              const salida = fs.createWriteStream(nombreArchivoZip);
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
            }, 5000 * listaCustomerIdsUnicos.length);

            response = {
                data: {
                    status: 1,
                    message: "Pdfs generados con exito"
                }
            } 
            parentPort.postMessage(response)
          }
        }
        else if(params.modality === "Distributor")
        {
          let pool = await sql.connect(config);
          let pdf = await pool.request()
              .input('pvmodality', sql.VarChar, params.modality)
              .input('pviddistributor', sql.VarChar, params.idDistributor)
              .input('pvidlanguageuser', sql.VarChar, params.language)
              .input('pvuser', sql.VarChar, params.user)
              .input('pvip', sql.VarChar, params.ip)
              .execute('spFLC_Generate_Price_List')

          let poolD = await sql.connect(config);
          let pdfDiscounts = await poolD.request()
              .input('pvOptionCRUD', sql.VarChar, "R")
              .input('pvIdLanguageUser', sql.VarChar, params.language)
              .input('piIdCustomer', sql.Int, params.idDistributor)
              .input('pbStatus', sql.Int, 1)
              .execute('spFLC_Customer_Categories_CRUD_Records')

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

            const nombreArchivo = params.modality + "_" + pdf.recordsets[0][0].Cluster + "_" + pdf.recordsets[0][0]['Distributor Name'];
            const region = pdf.recordsets[0][0].Cluster;
            const para = pdf.recordsets[0][0]['Distributor Name'];
            const effectiveDate = params.effectiveDate;

            var responsePdf = await physician.createDocument(discounts, pdf.recordsets[0], rutaPdf, rutaPdfIp, nombreArchivo, region, para, effectiveDate);

            if(responsePdf.data.status === 1)
            {
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

              response = { 
                data: {
                    status: 1,
                    message: "Pdf generado con exito"
                }
              } 

              parentPort.postMessage(response)
            } 
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
            //return response
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
        /*return response = {
            data: {
                status: 0,
                message: "Lista de Precios inválida",
            }
        } */
    }
}

createPdfPhysician();


