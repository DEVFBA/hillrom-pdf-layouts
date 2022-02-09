const router = require('express').Router();
const dbGenerate = require('../controllers/generate-pdf')
const auth = require('./auth');

// Para el logger
const logger = require('../utils/logger');

//Ruta para obtener todos los usuarios
router.route('/').post(auth, (request, response)=>{
    let generatePdf = {...request.body}
    logger.info(JSON.stringify({...request.body}) + "/generate-pdf - POST -")
    dbGenerate.createPdf(generatePdf).then(result => {
        response.json(result);
    })
})

module.exports = router;