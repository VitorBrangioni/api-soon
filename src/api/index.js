const { Router } = require('express');
const bodyParser = require('body-parser');

const subscriber = require('./subscriber').router;
const plan = require('./plan').router;
const router = Router();

router.use(bodyParser.json({limit: '10mb'}));

router.use('/subscriber', subscriber);
router.use('/plan', plan);

exports.router = router;