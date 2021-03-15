const { Router } = require('express');
const bodyParser = require('body-parser');

const subscriber = require('./subscriber').router;
const router = Router();

router.use(bodyParser.json({limit: '10mb'}));

router.use('/subscriber', subscriber);

exports.router = router;