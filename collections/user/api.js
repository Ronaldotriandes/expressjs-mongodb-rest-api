var express = require('express');
var router = express.Router();
const controller = require('./controller')

router.get('/', controller.getAllData);

router.post('/', controller.save);

router.get('/:id', controller.getById);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;
