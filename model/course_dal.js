var express = require('express');
var router = express.Router();
var connection = require('../database/connection_manager');

router.get('/catalog', function (req, res) {
    var query = 'SELECT id, catalog, subject, course_title, ge_designation, units, min_units, max_units FROM courses AS c GROUP BY c.course_title, c.department;';

    connection.query(query, function (err, result) {
	if (err) {
	    console.log(err);
	    res.send("Error");
	    res.end();
	}
	else {
	    var jsonObj = 
	    { 
		"entity_name" : "Catalog",
		"courses" : []
	    }
	    jsonObj.courses = result;
	    res.json(jsonObj);
	}
    });


});
router.get('/prerequisite', function(req, res){

		var obj = 
		{
		"entity_name" : "Prerequisites",
		"courses" : 
		[ 
			{
	        	"course" : "CS 101",
		        "course_title" : "Introduction to Computers and Computing",
			"department" : "CS",
			"units" : 3,
			"prerequisites": 
				[
					null
				],
		"corequisites" :
			[
				null
			]
			},
			{
			"course" : "CS 115",
			"course_title" : "Programming I",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				null
				],
			"corequisites" :
				[
				null
				]
			},
			{
			"course" : "CS 115W",
			"course_title" : "Programming I Workshop",
			"department" : "CS",
			"units" : 1,
			"prerequisites": 
				[	
					null
				],
					"corequisites" :
						[
						"CS 115"
						]
			},
			{
			"course" : "CS 110",
			"course_title" : "Introduction to Unix",
			"department" : "CS",
			"units" : 1 ,
			"prerequisites": 
				[
				"CS 115",
				],
					"corequisites" :
						[
						"CS 215"
						]
			},
			{
			"course" : "CS 215",
			"course_title" : "Programming II",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 115",
				],
					"corequisites" :
						[
						"CS 210"
						]
			},
			{
			"course" : "CS 242",
			"course_title" : "Discrete Structures for Computer Science",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 115"
				],
					"corequisites" :
						[
						null
						]
			},
			{
			"course" : "CS 252",
			"course_title" : "Introduction to Computer Organization",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 110",
			"CS 242"
				],
					"corequisites" :
						[
						null
						]
			},
			{
			"course" : "CS 315",
			"course_title" : "Data Structures",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 110",
			"CS 215",
			"CS 242"
				],
					"corequisites" :
						[
						null
						]
			},
			{
			"course" : "CS 340",
			"course_title" : "Security and Malware",
			"department" : "CS",
			"units" : 3,
			"prerequisites": 
				[
				"CS 215",
			"CS 252"
				],
					"corequisites" :
						[
						null
						]
			},
			{
			"course" : "CS 351",
			"course_title" : "Computer Architecture",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 215",
			"CS 252"
				],
					"corequisites" :
						[
						null
						]
			},
			{
			"course" : "CS 355",
			"course_title" : "Database Management Systems Design",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 215"
				],
					"corequisites" :
						[
						null
						]
		},
		{
			"course" : "CS 360",
			"course_title" : "Object Oriented Programming",
			"department" : "CS",
			"units" : 3,
			"prerequisites": 
				[
				"CS 315"
				],
					"corequisites" :
						[
						null
						]
		},
		{
			"course" : "CS 370",
			"course_title" : "Computer Architecture",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 215"
				],
					"corequisites" :
						[
						null
						]
		},
		{
			"course" : "CS 385",
			"course_title" : "Selected Topics",
			"department" : "CS",
			"units": 3,
			"vari_units": [1, 4],
			"prerequisites": 
				[
				"consent",
			"upper_division"
				],
					"corequisites" :
						[
						null
						]
		},
		{
			"course" : "CS 390",
			"course_title" : "Computer Science Colloquium",
			"department" : "CS",
			"units" : 1,
			"prerequisites": 
				[
				null
				],
					"corequisites" :
						[
						null
						]
		},
		{
			"course" : "CS 415",
			"course_title" : "Computer Architecture",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 315"
				],
					"corequisites" :
						[
						null
						]
		},
		{
			"course" : "CS 450",
			"course_title" : "Operating Systems",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 315",
			"CS 252"
				],
					"corequisites" :
						[
						null
						]
		},
		{
			"course" : "CS 454",
			"course_title" : "Theory of Computation",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 315"
				],
					"corequisites" :
						[
						null
						]
		},
		{
			"course" : "CS 460",
			"course_title" : "Programming Languages",
			"department" : "CS",
			"units" : 4,
			"prerequisites": 
				[
				"CS 315",
			"CS 252"
				],
					"corequisites" :
						[
						null
						]
		},
		{
			"course" : "CS 470",
			"course_title" : "Advanced Software Design Project",
			"department" : "CS",
			"units" : 3,
			"prerequisites": 
				[
				"CS 315",
			"CS 370",
			"senior"
				],
					"corequisites" :
						[
						null
						]
		},
		{
			"course" : "CS 496",
			"course_title" : "Senior Research Project",
			"department" : "CS",
			"units" : 3,
			"prerequisites": 
				[
				"senior",
			"approval"
				],
					"corequisites" :
						[
						null
						]
		},
		{
			"course" : "CS 497",
			"course_title" : "Internship",
			"department" : "CS",
			"units": 3,
			"vari_units" : [1,3],
			"prerequisites": 
				[
				"senior",
			"approval"
				],
					"corequisites" :
						[
						null
						]
		}/*,
		{
			"course" : "PSY 250",
			"course_title" : "Introduction to Psychology",
			"department" : "PSY",
			"units": 3,
			"vari_units" : [],
			"prerequisites": 
				[
				],
				"vari_prerequisites": 
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
			"course_title" : "Psychological Research Methods",
			"department" : "PSY",
			"units": 4,
			"vari_units" : [],
			"prerequisites": 
				[
				"PSY 250"
				],
				"vari_prerequisites": 
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
			"course_title" : "Life Span Development",
			"department" : "PSY",
			"units": 3,
			"vari_units" : [],
			"prerequisites": 
				[
				],
				"vari_prerequisites": 
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
			"course_title" : "Humanistic, Existential, and Transpersonal Psychology",
			"department" : "PSY",
			"units": 4,
			"vari_units" : [],
			"prerequisites": 
				[
				"sophomore"
				],
				"vari_prerequisites": 
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
			"course_title" : "Psychology Dialogue Series",
			"department" : "PSY",
			"units": 1,
			"vari_units" : [],
			"prerequisites": 
				[
				],
				"vari_prerequisites": 
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
			"course_title" : "Careers in Psychology",
			"department" : "PSY",
			"units": 2,
			"vari_units" : [],
			"prerequisites": 
				[
				],
				"vari_prerequisites": 
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
			"course_title" : "Myth, Dream, and Symbol",
			"department" : "PSY",
			"units": 4,
			"vari_units" : [],
			"prerequisites": 
				[
				"PSY 250"
				],
				"vari_prerequisites": 
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
			"course_title" : "Social Psychology",
			"department" : "PSY",
			"units": 4,
			"vari_units" : [],
			"prerequisites": 
				[
				],
				"vari_prerequisites": 
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
			"course_title" : "Multicultural Psychology",
			"department" : "PSY",
			"units": 4,
			"vari_units" : [],
			"prerequisites": 
				[
				"PSY 250",
			"upper_division"
				],
				"vari_prerequisites": 
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
			"course_title" : "Psychology of Creativity",
			"department" : "PSY",
			"units": 4,
			"vari_units" : [],
			"prerequisites": 
				[
				],
				"vari_prerequisites": 
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
			"course_title" : "Computer Architecture",
			"department" : "CS",
			"vari_units" : [1,4],
			"prerequisites": 
				[
				"upper_division",
			"consent"
				],
				"vari_prerequisites": 
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
			"course_title": "Basic Composition_Tutoring",
			"department": "ENGL",
			"units": 1,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 100A",
			"course_title": "First_Year Composition",
			"department": "ENGL",
			"units": 3,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 101",
			"course_title": "Expository Writing and Analytical Reading",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 160A",
			"course_title": "Humanities Learning Community",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 235",
			"course_title": "Early British & American Literature",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 303",
			"course_title": "Special Studies in Composition",
			"department": "ENGL",
			"units": 2,
			"prerequisites": [
				"consent"
			],
			"corequisites": []
		},
		{
			"course": "ENGL 304",
			"course_title": "War and Peace Lecture Series",
			"department": "ENGL",
			"units": 0,
			"prerequisites": 
				[
				"upper_division"
				],
				"corequisites": []
		},
		{
			"course": "ENGL 315",
			"course_title": "California Ethnic Literature",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [
				"ENGL 101"
			],
			"corequisites": []
		},
		{
			"course": "ENGL 339",
			"course_title": "Introduction to Shakespeare",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 341",
			"course_title": "Explorations in Language",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 343",
			"course_title": "Youth and Literature",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},

		{
			"course": "ENGL 350",
			"course_title": "Survey in a Distinct Ethnic Tradition",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [ 
				"ENGL 101"
			],
			"corequisites": []
		},
		{
			"course": "ENGL 352",
			"course_title": "Personal Essay",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [
				"Upper_division standing",
				"Consent",
				"WEPT"
			],
			"corequisites": []
		},
		{
			"course": "ENGL 368",
			"course_title": "Small Press Editing: ZAUM",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 201",
			"course_title": "Literary Analysis: Seminar",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 207",
			"course_title": "Introduction to Creative Writing",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 214",
			"course_title": "Literature of the World",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 273",
			"course_title": "Critical and Creative Readings of Literary Texts",
			"department": "ENGL",
			"units": 0,
			"prerequisites": [
				"ENGL 101", ],
			"vari_prerequisites": [
				["ENGL 100B"],
				["Freshman", "Sophomore"]
			],
			"corequisites": []
		},
		{
			"course": "ENGL 307",
			"course_title": "Introduction to Fiction Writing",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		},
		{
			"course": "ENGL 313",
			"course_title": "Classical Literature and Myth",
			"department": "ENGL",
			"units": 4,
			"prerequisites": [],
			"corequisites": []
		}*/

		]
		};
		res.json(obj);
	
});
router.get('/directory', function (req, res) {
		res.end();
		});

module.exports = router;
