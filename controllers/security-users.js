var config = require("../dbconfig"); //instanciamos el archivo dbconfig
const sql = require("mssql"); //necesitamos el paquete sql
var jwt = require('jsonwebtoken');
var config2 = require('../configs/config');
var fs = require('fs');

//Iniciar sesión
async function iniciarSesion(req) {
    try{
        let pool = await sql.connect(config);
        let userLogin = await pool.request()
            .input('pvuser', sql.VarChar, req.user)
            .input('pvpassword', sql.VarChar, req.password)
            .execute('spSecurity_Get_ValidateUser')

        var expiration = await config2.getExpiration();
        var secret = await config2.getSecret();

        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + parseInt(expiration, 10)); // 1 día antes de expirar

        const token = jwt.sign({
            id: req.user,
            pass: req.password,
            exp: parseInt(exp.getTime() / 1000),
        }, secret);

        var response = {};
        if(userLogin.recordsets[0][0].Successfully==="1")
        {
            response = {
                data: {
                    status: userLogin.recordsets[0][0].Successfully,
                    message: userLogin.recordsets[0][0].Message,
                    token: token
                }
            }
        }
        else {
            response = {
                data: {
                    status: userLogin.recordsets[0][0].Successfully,
                    message: userLogin.recordsets[0][0].Message,
                    token: ""
                }
            }
        }
        console.log(response);
        return response;
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    iniciarSesion: iniciarSesion,
}