const { Router } = require('express');
const controller = require('./controller');
const router = new Router();

router.get('/', (req, res) => {
    controller.show(req, res);
});

router.post('/', (req, res) => {
    console.log('bateu aqui')
    controller.register(req, res);
});

exports.router = router;