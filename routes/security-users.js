const router = require('express').Router();
const dbusers = require('../controllers/security-users')
const auth = require('./auth');

// Para el logger
const logger = require('../utils/logger');

//Ruta para iniciar sesion
router.route('/login').post((request, response)=>{
    let userRegister = {...request.body}
    logger.info(JSON.stringify({...request.body}) + "/login - POST -")
    dbusers.iniciarSesion(userRegister, response).then(result => {
        if(result.data.status === "1")
        {
            response.status(200).json(result)
        }
        else {
            response.status(401).json(result)
        }
        //console.log(result.data.status)
        //response.json(result);
    })
})

module.exports = router;