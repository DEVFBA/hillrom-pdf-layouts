const router = require('express').Router();
const logger = require('../Utils/logger');

router.get('/', (req, res)=>{
  res.send('Welcome to PDF Hillrom API');
  logger.info("'Welcome to PDF Hillrom API'");
});

/*PDF Hillrom*/

module.exports = router;