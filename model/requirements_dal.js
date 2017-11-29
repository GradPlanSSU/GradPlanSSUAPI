/**
 * Created by David Sornberger on 11/07/2017
 */
var express = require('express');
var router = express.Router();
var connection = require('../database/connection_manager');

router.get('/graduation', function(req, res) {
	res.end();
});
router.get('/major', function(req, res) {
	obj = 
		{
		"requirements":
			{
			"core": 
				[
				"CS 115",
				"CS 210",
				"CS 215",
				"CS 242",
				"CS 252",
				"CS 315",
				"CS 351",
				"CS 355",
				"CS 370",
				"CS 415",
				"CS 450",
				"CS 454",
				"CS 460"
				],
			"electives" : 
				{
				"units": 9,
				"courses":
					[
					"CS 330",
					"CS 340",
					"CS 360",
					"CS 365",
					"CS 375",
					"CS 385",
					"CS 386",
					"CS 425",
					"CS 452",
					"CS 465",
					"CS 480"
					],
				"limited-courses":
					[ {
					"limit": 3,
					"courses" : 
						[
						"CS 349",
						"CS 390",
						"CS 495",
						"CS 497"
						]
					} ]
				},	
			"capstone" : 
				{
				"units": 3,
				"vari-courses": 
					[
					"CS 470",
					"CS 496"
					]
				},
			"support" : 
				{
				"vari-courses":
					[
					"MATH 161",
					"MATH 161X"
					],
				"additional": 
					{
					"num-courses": 2,
					"options": 
						[
						"MATH 165",
						"MATH 165X",
						"MATH 211",
						"MATH 222",
						"MATH 241",
						"MATH 306",
						"MATH 316",
						"MATH 352",
						"MATH 416",
						"MATH 430",
						"MATH 470",
						"PHYS 214"
						]
					}
				}
			}
		};
	res.json(obj);	
});
router.get('/minor', function(req, res) {
	res.end();
});

module.exports = router;
