/**
 * Created by David Sornberger on 11/07/2017
 */
var express = require('express');
var router = express.Router();
var connection = require('../database/connection_manager');
var jwt = require('jsonwebtoken');
var fs = require('fs');
var skGradPlanSSU = fs.readFileSync(__dirname + '/../../keychain/skGradPlanSSU.pem');

router.post('/login', function(req, res) {
    var query = 'CALL spGradPlanAccountLogin(?, ?)';

    var userName = req.body.fullname;
    var password = req.body.student_id;
    var queryParams = [userName, password];
    console.log(queryParams);
    connection.query(query, queryParams, function (err, result) {
        if (err) {
            console.log(err);
            res.send("Error");
            res.end();
        }
        else if (result[0][0] === null) {
            res.send("Account Not Valid");
            res.end();
        }
        else {
	    console.log(result);
            var userData = result[0][0];
            var returnJson = {
                "fname" : userData.student_fName,
                "lname" : userData.student_lName,
		"mname" : userData.student_mName,
                "student_id" : userData.student_id,
                "token" : ""
            };
            var token = jwt.sign(result[0][0], skGradPlanSSU, {
                expiresIn: "23h"
            });
            returnJson.token = token;
            res.json(returnJson);
        }
    });
});
router.post('/tokenlogin', function(req, res) {
    var fs = require('fs');
    var skGradPlanSSU = fs.readFileSync(__dirname + '/../../keychain/skGradPlanSSU.pem');
    var token = req.body.token || req.query['token'] || req.headers['x-access-token'];
    if (token) {
	jwt.verify(token, skGradPlanSSU, function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                var userData = decoded;
            	var returnJson = {
                	"fname" : userData.student_fName,
                	"lname" : userData.student_lName,
			"mname" : userData.student_mName,
                	"student_id" : userData.student_id,
                	"token" : ""
            	};
		var token = jwt.sign(decoded, skGradPlanSSU, {
		});
		returnJson.token = token;
		res.json(returnJson);
            }
        });

    } else {
	return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
    
});
module.exports = router;
