var config = require("../dbconfig"); //instanciamos el archivo dbconfig
const sql = require("mssql"); //necesitamos el paquete sql

//Para obtener los datos del catálogo Progressa
async function getDataCatoniStyle(){ 
    try{
        let pool = await sql.connect(config);
        let users = await pool.request()   
            .execute('spPDF_Layout_Get_Info_CH700B3')
        return users.recordsets
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getDataCatoniStyle : getDataCatoniStyle
}