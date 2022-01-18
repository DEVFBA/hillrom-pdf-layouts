var config = require("../dbconfig"); //instanciamos el archivo dbconfig
const sql = require("mssql"); //necesitamos el paquete sql

//Para obtener los datos del catálogo Progressa
async function getAffinity(){ 
    try{
        let pool = await sql.connect(config);
        let users = await pool.request()   
            .input('pvIdLine', sql.VarChar, "AFF4P37")
            .execute('spPDF_Layout_Get_Info_Records')
        return users.recordsets
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getAffinity : getAffinity
}