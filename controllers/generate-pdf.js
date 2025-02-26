var config = require("../dbconfig"); //instanciamos el archivo dbconfig
const sql = require("mssql"); //necesitamos el paquete sql
var camas = require("../camas");
var gruas = require("../gruas");
var physician = require("../physician");
const dbGeneralParameters = require("./cat-general-parameters");
const dbZones = require("./cat-zones");

async function createPdf(params) {
  try {
    let pool = await sql.connect(config);
    let pdf = await pool
      .request()
      .input("pvOptionCRUD", sql.VarChar, "R")
      .input("pvIdLanguageUser", sql.VarChar, "ANG")
      .input("pvIdLayoutType", sql.VarChar, params.priceList)
      .execute("spCat_PDF_Layout_Types_CRUD_Records");

    var response = {};
    if (pdf.recordsets[0].length === 0) {
      response = {
        data: {
          status: 0,
          message: "Lista de Precios inválida",
          pdfPath: "",
        },
      };
      return response;
    } else {
      var idZoneType = pdf.recordsets[0][0].Id_Zone_Type;
      var priceList = params.priceList;
      var pdfVersion = params.pdfVersion;
      try {
        let listPrice = await pool
          .request()
          .input("pvIdLayoutType", sql.VarChar, params.priceList)
          .input("pvIdZoneType", sql.VarChar, idZoneType)
          .input("pvIdZone", sql.VarChar, params.pdfZone)
          .execute("spPDF_Prices_List_Get_Layouts");

        if (listPrice.recordsets[0].length === 0) {
          return (response = {
            data: {
              status: 0,
              message: "Lista de Precios o Zona de PDF inválidas",
              pdfPath: "",
            },
          });
        } else {
          if (priceList === "IPL") {
            const fecha = new Date();
            var anio = fecha.getFullYear();
            var mes;
            var dia;
            if (fecha.getMonth() + 1 < 10) {
              mes = "0" + (fecha.getMonth() + 1);
            } else {
              mes = fecha.getMonth() + 1;
            }

            if (fecha.getDate() < 10) {
              dia = "0" + fecha.getDate();
            } else {
              dia = fecha.getDate();
            }
            var hora = fecha.getHours();
            var minutos = fecha.getMinutes();
            var segundos = fecha.getSeconds();

            var ruta = await dbGeneralParameters.getGeneralParametersbyID("55");
            var rutaPdf = ruta[0][0].Value;

            var rutaIp = await dbGeneralParameters.getGeneralParametersbyID(
              "56"
            );
            var rutaPdfIp = rutaIp[0][0].Value;

            var zone = await dbZones.getZones(params.pdfZone);
            var nombreArchivo =
              zone[0][0].Short_Desc +
              "-" +
              priceList +
              "-" +
              "V" +
              pdfVersion +
              "_" +
              anio +
              mes +
              dia +
              hora +
              minutos +
              segundos;
            var zonaNombre = zone[0][0].Short_Desc;
            return await camas.createDocument(
              rutaPdf,
              rutaPdfIp,
              nombreArchivo,
              zonaNombre,
              pdfVersion,
              listPrice.recordsets[0]
            );
          } else {
            const fecha = new Date();
            var anio = fecha.getFullYear();
            var mes;
            var dia;
            if (fecha.getMonth() + 1 < 10) {
              mes = "0" + (fecha.getMonth() + 1);
            } else {
              mes = fecha.getMonth() + 1;
            }

            if (fecha.getDate() < 10) {
              dia = "0" + fecha.getDate();
            } else {
              dia = fecha.getDate();
            }
            var hora = fecha.getHours();
            var minutos = fecha.getMinutes();
            var segundos = fecha.getSeconds();

            var ruta = await dbGeneralParameters.getGeneralParametersbyID("55");
            var rutaPdf = ruta[0][0].Value;

            var rutaIp = await dbGeneralParameters.getGeneralParametersbyID(
              "56"
            );
            var rutaPdfIp = rutaIp[0][0].Value;

            var zone = await dbZones.getZones(params.pdfZone);
            var nombreArchivo =
              zone[0][0].Short_Desc +
              "-" +
              priceList +
              "-" +
              "V" +
              pdfVersion +
              "_" +
              anio +
              mes +
              dia +
              hora +
              minutos +
              segundos;
            var zonaNombre = zone[0][0].Short_Desc;
            return await gruas.createDocument(
              rutaPdf,
              rutaPdfIp,
              nombreArchivo,
              zonaNombre,
              pdfVersion,
              listPrice.recordsets[0],
              params.pdfZone
            );
          }
        }
      } catch (error) {
        return (response = {
          data: {
            status: 0,
            message: "Lista de Precios o Zona de PDF inválidas",
            pdfPath: "",
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
    return (response = {
      data: {
        status: 0,
        message: "Lista de Precios inválida",
        pdfPath: "",
      },
    });
  }
}

async function createPdfV2(params) {
  try {
    let pool = await sql.connect(config);
    let pdf = await pool
      .request()
      .input("pvOptionCRUD", sql.VarChar, "R")
      .input("pvIdLanguageUser", sql.VarChar, "ANG")
      .input("pvIdLayoutType", sql.VarChar, params.priceList)
      .execute("spCat_PDF_Layout_Types_CRUD_Records");

    var response = {};
    if (pdf.recordsets[0].length === 0) {
      response = {
        data: {
          status: 0,
          message: "Lista de Precios inválida",
          pdfPath: "",
        },
      };
      return response;
    } else {
      var idZoneType = pdf.recordsets[0][0].Id_Zone_Type;
      var priceList = params.priceList;
      var pdfVersion = params.pdfVersion;
      try {
        let listPrice = await pool
          .request()
          .input("pvIdLayoutType", sql.VarChar, params.priceList)
          .input("pvIdZoneType", sql.VarChar, idZoneType)
          .input("pvIdZone", sql.VarChar, params.pdfZone)
          .execute("spPDF_Prices_List_Get_Layouts");

        if (listPrice.recordsets[0].length === 0) {
          return (response = {
            data: {
              status: 0,
              message: "Lista de Precios o Zona de PDF inválidas",
              pdfPath: "",
            },
          });
        } else {
          if (priceList === "IPL") {
            const fecha = new Date();
            var anio = fecha.getFullYear();
            var mes;
            var dia;
            if (fecha.getMonth() + 1 < 10) {
              mes = "0" + (fecha.getMonth() + 1);
            } else {
              mes = fecha.getMonth() + 1;
            }

            if (fecha.getDate() < 10) {
              dia = "0" + fecha.getDate();
            } else {
              dia = fecha.getDate();
            }
            var hora = fecha.getHours();
            var minutos = fecha.getMinutes();
            var segundos = fecha.getSeconds();

            var ruta = await dbGeneralParameters.getGeneralParametersbyID("55");
            var rutaPdf = ruta[0][0].Value;

            var rutaIp = await dbGeneralParameters.getGeneralParametersbyID(
              "56"
            );
            var rutaPdfIp = rutaIp[0][0].Value;

            var zone = await dbZones.getZones(params.pdfZone);
            var nombreArchivo =
              zone[0][0].Short_Desc +
              "-" +
              priceList +
              "-" +
              "V" +
              pdfVersion +
              "_" +
              anio +
              mes +
              dia +
              hora +
              minutos +
              segundos;
            var zonaNombre = zone[0][0].Short_Desc;
            return await camas.createDocument(
              rutaPdf,
              rutaPdfIp,
              nombreArchivo,
              zonaNombre,
              pdfVersion,
              listPrice.recordsets[0]
            );
          } else {
            const fecha = new Date();
            var anio = fecha.getFullYear();
            var mes;
            var dia;
            if (fecha.getMonth() + 1 < 10) {
              mes = "0" + (fecha.getMonth() + 1);
            } else {
              mes = fecha.getMonth() + 1;
            }

            if (fecha.getDate() < 10) {
              dia = "0" + fecha.getDate();
            } else {
              dia = fecha.getDate();
            }
            var hora = fecha.getHours();
            var minutos = fecha.getMinutes();
            var segundos = fecha.getSeconds();

            var ruta = await dbGeneralParameters.getGeneralParametersbyID("55");
            var rutaPdf = ruta[0][0].Value;

            var rutaIp = await dbGeneralParameters.getGeneralParametersbyID(
              "56"
            );
            var rutaPdfIp = rutaIp[0][0].Value;

            var zone = await dbZones.getZones(params.pdfZone);
            var nombreArchivo =
              zone[0][0].Short_Desc +
              "-" +
              priceList +
              "-" +
              "V" +
              pdfVersion +
              "_" +
              anio +
              mes +
              dia +
              hora +
              minutos +
              segundos;
            var zonaNombre = zone[0][0].Short_Desc;
            return await gruas.createDocument(
              rutaPdf,
              rutaPdfIp,
              nombreArchivo,
              zonaNombre,
              pdfVersion,
              listPrice.recordsets[0],
              params.pdfZone
            );
          }
        }
      } catch (error) {
        return (response = {
          data: {
            status: 0,
            message: "Lista de Precios o Zona de PDF inválidas",
            pdfPath: "",
          },
        });
      }
    }
  } catch (error) {
    return (response = {
      data: {
        status: 0,
        message: "Lista de Precios inválida",
        pdfPath: "",
      },
    });
  }
}

async function createPdfPhysician(params) {
  try {
    console.log(params);

    if (params.modality === "Master") {
      let pool = await sql.connect(config);
      let pdf = await pool
        .request()
        .input("pvmodality", sql.VarChar, params.modality)
        .input("pvidlanguageuser", sql.VarChar, params.language)
        .input("pvuser", sql.VarChar, params.user)
        .input("pvip", sql.VarChar, params.ip)
        .execute("spFLC_Generate_Price_List");

      var response = {};
      if (pdf.recordsets[0].length === 0 && pdf.recordsets[1].length === 0) {
        response = {
          data: {
            status: 0,
            message: "Mensaje del request",
          },
        };
        return response;
      } else {
        var ruta = await dbGeneralParameters.getGeneralParametersbyID("55");
        var rutaPdf = ruta[0][0].Value;

        var rutaIp = await dbGeneralParameters.getGeneralParametersbyID("56");
        var rutaPdfIp = rutaIp[0][0].Value;

        const nombreArchivo = "";
        const zonaNombre = "";
        const pdfVersion = "";
        physician.createDocument(
          pdf.recordsets[0],
          pdf.recordsets[1],
          rutaPdf,
          rutaPdfIp,
          nombreArchivo,
          zonaNombre,
          pdfVersion,
          params.printTermsConditions
        ); // AEGH -- 01/06/2025

        response = {
          data: {
            status: 0,
            message: "Mensaje del request",
          },
        };
        return response;
      }
    } else {
      response = {
        data: {
          status: 0,
          message: "Modalidad no válida",
        },
      };
      return response;
    }
  } catch (error) {
    return (response = {
      data: {
        status: 0,
        message: "Lista de Precios inválida",
      },
    });
  }
}

module.exports = {
  createPdf: createPdf,
  createPdfV2: createPdfV2,
  createPdfPhysician: createPdfPhysician,
};
