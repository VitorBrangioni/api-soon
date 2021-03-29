const { Router } = require('express');
const controller = require('./controller');
const router = new Router();

router.get('/', (req, res) => {
    controller.show(req, res);
});

router.post('/', (req, res) => {
    controller.register(req, res);
});

exports.router = router;