var express = require('express');
var router = express.Router();
var connection = require('../database/connection_manager');

router.get('/catalog', function (req, res) {
		obj = 
		{
		"courses" : 
		[ 
		{
		"course" : "CS 101",
		"course-title" : "Introduction to Computers and Computing",
		"department" : "CS",
		"units" : 3,
		"prerequisites": 
		[
		],
		"vari-prerequisites": 
		[
		[
		]
		],
		"corequisites" :
		[
		]
		},
		{
			"course" : "CS 115",
			"course-title" : "Programming I",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"GE Mathematics Elligibility",
			"GE English Elligibility"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 115W",
			"course-title" : "Programming I Workshop",
			"department" : "CS",
			"units" : 1,
			"prerequisites": 
				[	
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						"CS 115"
						]
		},
		{
			"course" : "CS 210",
			"course-title" : "Introduction to Unix",
			"department" : "CS",
			"units" : 1 ,
			"prerequisites": 
				[
				"CS 115",
			"CS 215"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						"CS 215"
						]
		},
		{
			"course" : "CS 215",
			"course-title" : "Programming II",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 115",
			"CS 210"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						"CS 210"
						]
		},
		{
			"course" : "CS 242",
			"course-title" : "Discrete Structures for Computer Science",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 115"
				],
				"vari-prerequisites": 
					[
					[
						"Math 161",
				"Math 161X"
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 252",
			"course-title" : "Introduction to Computer Organization",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 210",
			"CS 242"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 315",
			"course-title" : "Data Structures",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 210",
			"CS 215",
			"CS 242"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 340",
			"course-title" : "Security and Malware",
			"department" : "CS",
			"units" : 3,
			"prerequisites": 
				[
				"CS 215",
			"CS 252"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 351",
			"course-title" : "Computer Architecture",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 215",
			"CS 252"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 355",
			"course-title" : "Database Management Systems Design",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 215"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 360",
			"course-title" : "Object Oriented Programming",
			"department" : "CS",
			"units" : 3,
			"prerequisites": 
				[
				"CS 315"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 370",
			"course-title" : "Computer Architecture",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 215"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 385",
			"course-title" : "Selected Topics",
			"department" : "CS",
			"vari-units": [1, 4],
			"prerequisites": 
				[
				"consent",
			"upper-division"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 390",
			"course-title" : "Computer Science Colloquium",
			"department" : "CS",
			"units" : 1,
			"prerequisites": 
				[
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 415",
			"course-title" : "Computer Architecture",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 315"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 450",
			"course-title" : "Operating Systems",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 315",
			"CS 252"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 454",
			"course-title" : "Theory of Computation",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 315"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 460",
			"course-title" : "Programming Languages",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 315",
			"CS 252"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 470",
			"course-title" : "Advanced Software Design Project",
			"department" : "CS",
			"units" : 3,
			"prerequisites": 
				[
				"CS 315",
			"CS 370",
			"senior"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 496",
			"course-title" : "Senior Research Project",
			"department" : "CS",
			"units" : 3,
			"prerequisites": 
				[
				"senior",
			"approval"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 497",
			"course-title" : "Internship",
			"department" : "CS",
			"vari-units" : [1,3],
			"prerequisites": 
				[
				"senior",
			"approval"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "PSY 250",
			"course-title" : "Introduction to Psychology",
			"department" : "PSY",
			"units": 3,
			"vari-units" : [],
			"prerequisites": 
				[
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "PSY 280",
			"course-title" : "Psychological Research Methods",
			"department" : "PSY",
			"units": 4,
			"vari-units" : [],
			"prerequisites": 
				[
				"PSY 250"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "PSY 302",
			"course-title" : "Life Span Development",
			"department" : "PSY",
			"units": 3,
			"vari-units" : [],
			"prerequisites": 
				[
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "PSY 307",
			"course-title" : "Humanistic, Existential, and Transpersonal Psychology",
			"department" : "PSY",
			"units": 4,
			"vari-units" : [],
			"prerequisites": 
				[
				"sophomore"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "PSY 311",
			"course-title" : "Psychology Dialogue Series",
			"department" : "PSY",
			"units": 1,
			"vari-units" : [],
			"prerequisites": 
				[
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "PSY 313",
			"course-title" : "Careers in Psychology",
			"department" : "PSY",
			"units": 2,
			"vari-units" : [],
			"prerequisites": 
				[
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "PSY 322",
			"course-title" : "Myth, Dream, and Symbol",
			"department" : "PSY",
			"units": 4,
			"vari-units" : [],
			"prerequisites": 
				[
				"PSY 250"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "PSY 325",
			"course-title" : "Social Psychology",
			"department" : "PSY",
			"units": 4,
			"vari-units" : [],
			"prerequisites": 
				[
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "PSY 328",
			"course-title" : "Multicultural Psychology",
			"department" : "PSY",
			"units": 4,
			"vari-units" : [],
			"prerequisites": 
				[
				"PSY 250",
			"upper-division"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "PSY 338",
			"course-title" : "Psychology of Creativity",
			"department" : "PSY",
			"units": 4,
			"vari-units" : [],
			"prerequisites": 
				[
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course" : "CS 495",
			"course-title" : "Computer Architecture",
			"department" : "CS",
			"vari-units" : [1,4],
			"prerequisites": 
				[
				"upper-division",
			"consent"
				],
				"vari-prerequisites": 
					[
					[
					]
					],
					"corequisites" :
						[
						]
		},
		{
			"course": "ENGL 099T",
			"course-title": "Basic Composition-Tutoring",
			"department": "ENGL",
			"units": 1,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 100A",
			"course-title": "First-Year Composition",
			"department": "ENGL",
			"units": 3,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 101",
			"course-title": "Expository Writing and Analytical Reading",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 160A",
			"course-title": "Humanities Learning Community",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 235",
			"course-title": "Early British & American Literature",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 303",
			"course-title": "Special Studies in Composition",
			"department": "ENGL",
			"units": 2,
			"prerequisites": [
				"consent"
			],
			"corequisites": []
		},
		{
			"course": "ENGL 304",
			"course-title": "War and Peace Lecture Series",
			"department": "ENGL",
			"units": 0,
			"prerequisites": 
				[
				"upper-division"
				],
				"corequisites": []
		},
		{
			"course": "ENGL 315",
			"course-title": "California Ethnic Literature",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [
				"ENGL 101"
			],
			"corequisites": []
		},
		{
			"course": "ENGL 339",
			"course-title": "Introduction to Shakespeare",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 341",
			"course-title": "Explorations in Language",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 343",
			"course-title": "Youth and Literature",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},

		{
			"course": "ENGL 350",
			"course-title": "Survey in a Distinct Ethnic Tradition",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [ 
				"ENGL 101"
			],
			"corequisites": []
		},
		{
			"course": "ENGL 352",
			"course-title": "Personal Essay",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [
				"Upper-division standing",
				"Consent",
				"WEPT"
			],
			"corequisites": []
		},
		{
			"course": "ENGL 368",
			"course-title": "Small Press Editing: ZAUM",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 201",
			"course-title": "Literary Analysis: Seminar",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 207",
			"course-title": "Introduction to Creative Writing",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 214",
			"course-title": "Literature of the World",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 273",
			"course-title": "Critical and Creative Readings of Literary Texts",
			"department": "ENGL",
			"units": 0,
			"prerequisites": [
				"ENGL 101", ],
			"vari-prerequisites": [
				["ENGL 100B"],
				["Freshman", "Sophomore"]
			],
			"corequisites": []
		},
		{
			"course": "ENGL 307",
			"course-title": "Introduction to Fiction Writing",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 313",
			"course-title": "Classical Literature and Myth",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		}

		]
		};
		res.json(obj);

});
router.get('/directory', function (req, res) {
		res.end();
		});

module.exports = router;
