var express = require('express');
var router = express.Router();

var contactController = require('../controllers/contact');
var customerController = require('../controllers/customer');


// router.post('/contact/create', userController.sequre , contactController.contactcreate);

router.post('/create', customerController.sequre ,contactController.contactcreate);

router.get('/find', contactController.contactAlldata);

router.get('/findOne/:findId', contactController.contactSingledata);

router.delete('/:deleteId', contactController.contactDelete);

router.put('/:UpdateId', contactController.contactUpdate);



module.exports = router;