var jwt = require('jsonwebtoken');
var express = require('express');
var config = require('../configs/config');
const configDataBase = require("../dbconfig");
const sql = require('mssql');

const auth = express.Router(); 
auth.use(async (req, res, next) => {
    const token = req.headers['access-token']; 
    var secret = await config.getSecret()
    if (token) {
      jwt.verify(token, secret, async (err, decoded) => {      
        if (err) {
          return res.status(401).json( { 
            data: {
              status: 0,
              mensaje: "Token inválido",
              pdfPath: ""
            }
          } ); 
        } else {
          const pool = await sql.connect(configDataBase);
          const validUser = await pool.request()
            .input('pvuser', sql.VarChar, decoded.id)
            .input('pvpassword', sql.VarChar, decoded.pass)
            .execute('spSecurity_Get_ValidateUser');
          
            console.log(validUser.recordset.length)
          if( validUser.recordset.length === 0 || validUser.recordset[0].Successfully === "0" ){
            return res.status(401).json( { 
              data: {
                status: 0,
                mensaje: "Token inválido",
                pdfPath: ""
              }
            } ); 
          } else {
            next();
          }
        }
      });
    } else {
      return res.status(401).json( { 
        error: {
          mensaje: 'Token no proveída.' 
        }
      } ); 
    }
});

module.exports = auth;