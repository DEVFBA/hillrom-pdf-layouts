var config = require("../dbconfig"); //instanciamos el archivo dbconfig
const sql = require("mssql"); //necesitamos el paquete sql

//Para obtener los datos del catálogo Progressa
async function getReposheet(pdfZone){ 
    try{
        let pool = await sql.connect(config);
        let users = await pool.request()   
            .input('pvIdZone', sql.VarChar, pdfZone)
            .execute('spPDF_Layout_Get_Info_REPOMULTI')
        return users.recordsets
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getReposheet : getReposheet
}