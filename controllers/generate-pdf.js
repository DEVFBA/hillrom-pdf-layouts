var config = require("../dbconfig"); //instanciamos el archivo dbconfig
const sql = require("mssql"); //necesitamos el paquete sql
var camas = require("../camas")
var gruas = require("../gruas");
const dbGeneralParameters= require('./cat-general-parameters');
const dbZones = require('./cat-zones');

async function createPdf(params){
    try{
        let pool = await sql.connect(config);
        let pdf = await pool.request()
            .input('pvOptionCRUD', sql.VarChar, "R")
            .input('pvIdLanguageUser', sql.VarChar, "ANG")
            .input('pvIdLayoutType', sql.VarChar, params.priceList)
            .execute('spCat_PDF_Layout_Types_CRUD_Records')

            var response = {}
            if(pdf.recordsets[0].length === 0)
            {
                response = {
                    data: {
                        status: 0,
                        message: "Lista de Precios inválida",
                        pdfPath: ""
                    }
                } 
                return response
            }
            else {
                var idZoneType = pdf.recordsets[0][0].Id_Zone_Type
                var priceList = params.priceList;
                var pdfVersion = params.pdfVersion;
                console.log(idZoneType)
                try {
                
                    let listPrice = await pool.request()
                        .input('pvIdLayoutType', sql.VarChar, params.priceList)
                        .input('pvIdZoneType', sql.VarChar, idZoneType)
                        .input('pvIdZone', sql.VarChar, params.pdfZone)
                        .execute('spPDF_Prices_List_Get_Layouts')

                    if(listPrice.recordsets[0].length === 0)
                    {
                        return response = {
                            data: {
                                status: 0,
                                message: "Lista de Precios o Zona de PDF inválidas",
                                pdfPath: ""
                            }
                        }
                    }
                    else {
                        //console.log(params.priceList)
                        if(priceList === "IPL")
                        {
                            const fecha = new Date();
                            var anio = fecha.getFullYear()
                            var mes; 
                            var dia;
                            if((fecha.getMonth() + 1) < 10)
                            {
                                //console.log(fecha.getMonth() + 1)
                                mes = "0" + (fecha.getMonth() + 1)
                            }
                            else {
                                mes = fecha.getMonth() + 1
                            }

                            if((fecha.getDate()) < 10)
                            {
                                dia = "0" + (fecha.getDate())
                            }
                            else {
                                dia = fecha.getDate()
                            }
                            var hora = fecha.getHours()
                            var minutos = fecha.getMinutes()
                            var segundos = fecha.getSeconds()
                    
                            var ruta = await dbGeneralParameters.getGeneralParametersbyID("55")
                            var rutaPdf = ruta[0][0].Value
                            var zone = await dbZones.getZones(params.pdfZone)
                            //console.log(zone[0][0])
                            var nombreArchivo = zone[0][0].Short_Desc + " - " + priceList + " - " + "V" + pdfVersion + "_" + anio + mes + dia + hora + minutos + segundos
                            var zonaNombre = zone[0][0].Short_Desc
                            //console.log(nombreArchivo)
                            //console.log("Voy a crear documento de camas")
                            return await camas.createDocument(rutaPdf, nombreArchivo, zonaNombre, pdfVersion, listPrice.recordsets[0])
                        }
                        else {
                            const fecha = new Date();
                            var anio = fecha.getFullYear()
                            var mes; 
                            var dia;
                            if((fecha.getMonth() + 1) < 10)
                            {
                                //console.log(fecha.getMonth() + 1)
                                mes = "0" + (fecha.getMonth() + 1)
                            }
                            else {
                                mes = fecha.getMonth() + 1
                            }

                            if((fecha.getDate()) < 10)
                            {
                                dia = "0" + (fecha.getDate())
                            }
                            else {
                                dia = fecha.getDate()
                            }
                            var hora = fecha.getHours()
                            var minutos = fecha.getMinutes()
                            var segundos = fecha.getSeconds()
                    
                            var ruta = await dbGeneralParameters.getGeneralParametersbyID("55")
                            var rutaPdf = ruta[0][0].Value
                            var zone = await dbZones.getZones(params.pdfZone)
                            //console.log(zone[0][0])
                            var nombreArchivo = zone[0][0].Short_Desc + " - " + priceList + " - " + "V" + pdfVersion + "_" + anio + mes + dia + hora + minutos + segundos
                            var zonaNombre = zone[0][0].Short_Desc
                            //console.log(listPrice.recordsets[0])
                            return await gruas.createDocument(rutaPdf, nombreArchivo, zonaNombre, pdfVersion, listPrice.recordsets[0])
                            //console.log("Voy a crear documento de gruas")
                        }
                    }
                   
                }catch(error){
                    return response = {
                        data: {
                            status: 0,
                            message: "Lista de Precios o Zona de PDF inválidas",
                            pdfPath: ""
                        }
                    }
                }
            }
    }catch(error){
        return response = {
            data: {
                status: 0,
                message: "Lista de Precios inválida",
                pdfPath: ""
            }
        } 
    }
}

module.exports = {
    createPdf : createPdf,
}