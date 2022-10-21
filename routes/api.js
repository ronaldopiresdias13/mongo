const express = require('express');
const router = express.Router();

const apiCOntroller = require("../controllers/apiController");

router.get('/teste', apiCOntroller.test);
router.get('/details', apiCOntroller.details);
router.post('/interest', apiCOntroller.create);
router.put('/interest/:id', apiCOntroller.update);
router.delete('/interest/:id', apiCOntroller.delete);

module.exports = router;