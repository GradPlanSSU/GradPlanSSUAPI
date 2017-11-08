var express = require('express');
var router = express.Router();
var connection = require('../database/connection_manager');

router.get('/', function (req, res) {
	
	res.send("Course Registry Information");
	res.end();

});

module.exports = router;
