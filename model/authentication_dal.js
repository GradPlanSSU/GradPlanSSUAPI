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
    var query = 'CALL spGetAccountLogin(?, ?)';

    var userName = req.body.username;
    var password = req.body.password;
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
                "fname" : userData.fname,
                "lname" : userData.lname,
                "user_name" : userData.user_name,
                "user_icon_url" : userData.user_icon_url,
                "token" : ""
            };
            var token = jwt.sign(result[0][0], skGradPlanSSU, {
                expiresIn: "10h"
            });
            returnJson.token = token;
            res.json(returnJson);
        }
    });
});

module.exports = router;
