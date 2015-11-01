var bio = {
	name: "Steve O'Gallagher",
	role: "Developer",
	contacts: {
		mobile: "07725550475",
		email: "ogallaghersteve@gmail.com",
		github: "AddedSteve",
		twitter: "AddedSteve",
		location: "London, UK"
	},
	welcomeMessage: "Hello, and welcome to my resume.",
	skills: ["HTML", "CSS", "JavaScript", "Python", "Swift"],
	biopic: "https://media.licdn.com/media/AAEAAQAAAAAAAAL5AAAAJGUwZTg2MzU1LWJkNmMtNDQ4MC04Y2Y2LTBjOWRmZGViYTZiOQ.jpg",
	display: function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedSkills = function () { 
			var skillsList = [];
			bio.skills.forEach(function(val) {
    			skillsList.push(HTMLskills.replace("%data%", val));
			});
			return skillsList;
		};

		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
		$('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
		$('#header').append(formattedBioPic);
		$('#header').append(formattedWelcome);
		$('#header').append(HTMLskillsStart);
		$('#skills').append(formattedSkills);
	}
};

var education {
	schools: {
		name: "University of York",
		location: "York, UK",
		degree: "BEng in Electronic Engineering with Media Technology",
		majors: ["Acoustics", "Cinematography", "Digital Engineering", "Analogue Engineering"],
		dates: 2007,
		url: "http://www.york.ac.uk/"
	},
	onlineCourses: {
		title: Introduction to Computer Sciene and Programming Using Python,
		school: MIT,
		date: 2015,
		url: "https://courses.edx.org/courses/course-v1:MITx+6.00.2x_3+1T2015/info"
	},
	display: function () {

	}
};

bio.display();


