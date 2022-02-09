const router = require('express').Router();
const logger = require('../Utils/logger');

router.get('/', (req, res)=>{
  res.send('Welcome to PDF Hillrom API');
  logger.info("'Welcome to PDF Hillrom API'");
});

/*PDF Hillrom*/

//Rutas de los usuarios
router.use('/security-users', require('./security-users.js'));

//Rutas para la generacion del PDF
router.use('/generate-pdf', require('./generate-pdf.js'));

module.exports = router;