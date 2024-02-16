var config = require("../dbconfig"); //instanciamos el archivo dbconfig
const sql = require("mssql"); //necesitamos el paquete sql

async function getGeneralParametersbyID(idParameter){

    try{
        let pool = await sql.connect(config);
        let generalParameters = await pool.request()
            .input('pvOptionCRUD', sql.VarChar, "R")
            .input('piIdParameter', sql.VarChar,idParameter)
            .execute('spCat_General_Parameters_CRUD_Records');
        
        pool.close();
        return generalParameters.recordsets;

    }catch(error){

        console.log(error);

    }

}

module.exports = {
    getGeneralParametersbyID: getGeneralParametersbyID
}