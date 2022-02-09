var config = require("../dbconfig"); //instanciamos el archivo dbconfig
const sql = require("mssql"); //necesitamos el paquete sql

async function getZones(zone){

    try{
        let pool = await sql.connect(config);
        let generalParameters = await pool.request()
            .input('pvOptionCRUD', sql.VarChar, "R")
            .input('pvIdLanguageUser', 'ANG')
            .input('pvIdZone', sql.VarChar, zone)
            .execute('spCat_Zones_CRUD_Records');
        
        pool.close();
        return generalParameters.recordsets;

    }catch(error){

        console.log(error);

    }

}

module.exports = {
    getZones: getZones
}