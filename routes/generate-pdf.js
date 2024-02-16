const router = require('express').Router();
const dbGenerate = require('../controllers/generate-pdf')
const auth = require('./auth');
const { Worker } = require('worker_threads');

// Para el logger
const logger = require('../utils/logger');

//Ruta para generar el pdf v1
router.route('/').post( (request, response)=>{
    let generatePdf = {...request.body}
    logger.info(JSON.stringify({...request.body}) + "/generate-pdf - POST -")
    dbGenerate.createPdf(generatePdf).then(result => {
        response.json(result);
    })
})

router.route('/v2/').post(auth, (request, response)=>{
    let generatePdf = {...request.body}
    logger.info(JSON.stringify({...request.body}) + "/generate-pdf/v2/ - POST -")
    dbGenerate.createPdf(generatePdf).then(result => {
        response.json(result);
    })
})

router.route('/physician/').post((request, response)=>{
    let generatePdf = {...request.body}
    logger.info(JSON.stringify({...request.body}) + "/generate-pdf/physician/ - POST -")

    const worker = new Worker("./worker.js", {workerData: generatePdf});   
    /*worker.on("message", data => {
        response.send(data)
    })*/
    var result = {
        data: {
            status: 1,
            message: "Generacion de documento(s) en proceso"
        }
    }
    response.json(result); 
})

module.exports = router;