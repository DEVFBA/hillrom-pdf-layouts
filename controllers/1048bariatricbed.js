var config = require("../dbconfig"); //instanciamos el archivo dbconfig
const sql = require("mssql"); //necesitamos el paquete sql

//Para obtener los datos del catálogo 1048 Bariatric Bed
async function getData1048BariatricBed(){ 
    try{
        let pool = await sql.connect(config);
        let users = await pool.request()   
            .execute('spPDF_Layout_Get_Info_1048BARBED')
        return users.recordsets
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getData1048BariatricBed : getData1048BariatricBed
}