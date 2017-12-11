/**
 * Created by David Sornberger on 11/07/2017
 */
var express = require('express');
var router = express.Router();
var connection = require('../database/connection_manager');
var csrequirements = require('./CS-BS_degree_requirements');
router.get('/graduation', function(req, res) {
	res.end();
});
router.get('/major', function(req, res) {
	
	if (req.query.major == "CS") {
		res.json(csrequirements);
	}
	else res.end();	
});
router.get('/minor', function(req, res) {
	res.end();
});

module.exports = router;
