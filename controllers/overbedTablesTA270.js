var config = require("../dbconfig"); //instanciamos el archivo dbconfig
const sql = require("mssql"); //necesitamos el paquete sql

//Para obtener los datos del catálogo Progressa
async function getDataOverbedTables(){ 
    try{
        let pool = await sql.connect(config);
        let users = await pool.request()   
            .execute('spPDF_Layout_Get_Info_OTTA270')
        return users.recordsets
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getDataOverbedTables : getDataOverbedTables
}