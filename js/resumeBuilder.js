var bio = {
	"name" : "Aaron Wright",
	"role" : "Web Developer",
	"contact" : 
		{
		"mobile" : "317.828.3788",
		"email" : "aaronfwright@gmail.com",
		"github" : "AFWrightOnDude",
		"twitter" : "@AFWrightOnDude",
		"location" : "Indianapolis, IN",
		},
	"welcomeMessage" : "Welcome to DOOMHAUS! I mean Web Dev! We are finally getting there.",
	"skills" : ["HTML/CSS", "JavaScript", "Bootstrap", "Japanese"],
	"bioPic" : "images/fry.jpg",
	display : function () {
		var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
		$("#header").append(formattedbioPic);

		var formattedwelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedwelcome);

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);


		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);

			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		};

		var formattedmobile = HTMLmobile.replace("%data%",bio.contact.mobile);
		$("#topContacts").append(formattedmobile);
		var formattedemail = HTMLemail.replace("%data%",bio.contact.email);
		$("#topContacts").append(formattedemail);
		var formattedgithub = HTMLgithub.replace("%data%",bio.contact.github);
		$("#topContacts").append(formattedgithub);
		var formattedtwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
		$("#topContacts").append(formattedtwitter);
		var formattedlocation = HTMLlocation.replace("%data%",bio.contact.location);
		$("#topContacts").append(formattedlocation);
		var formattedlocation = HTMLlocation.replace("%data%",bio.contact.location);

		var formattedmobile = HTMLmobile.replace("%data%",bio.contact.mobile);
		$("#footerContacts").append(formattedmobile);
		var formattedemail = HTMLemail.replace("%data%",bio.contact.email);
		$("#footerContacts").append(formattedemail);
		var formattedgithub = HTMLgithub.replace("%data%",bio.contact.github);
		$("#footerContacts").append(formattedgithub);
		var formattedtwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
		$("#footerContacts").append(formattedtwitter);
		var formattedlocation = HTMLlocation.replace("%data%",bio.contact.location);
		$("#footerContacts").append(formattedlocation);
		var formattedlocation = HTMLlocation.replace("%data%",bio.contact.location);


	}
};


var education = {
	"schools" : [
		{
			"name" : "Purdue University",
			"location" : "West Lafayette, IN",
			"degree" : "BA",
			"majors" : ["Japanese Language and Literature", "  Asian Studies"],
			"dates" : 2010,
			"url" : "https://www.purdue.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/nd001"
		}
	],
	display : function () {
			for (school in education.schools) {

			$("#education").append(HTMLschoolStart);
	var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedschoolInfo = formattedSchool + formattedDegree;
	$(".education-entry:last").append(formattedschoolInfo);
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedDates);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
	$(".education-entry:last").append(formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);

	for (onlineCourse in education.onlineCourses) {

		$(".education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineSchoolInfo = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineSchoolInfo);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedOnlineDates);	

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedURL);	
	}
	}
	
};


var work = {
	"jobs": [
		{
		"employer" : "Sankyo America, Inc.",
		"title" : "Sales Coordinator",
		"location" : "Indianapolis, IN",
		"dates" : "January 2013 - Present",
		"description" : "Creates, manages and issues price quotations for Tier 1 and Tier 2 Automotive part suppliers by confirming project requirements and working with domestic and international manufacturers."
		},
		{
		"employer" : "Sankyo America, Inc.",
		"title" : "Material Management Specialist",
		"location" : "Indianapolis, IN",
		"dates" : "October 2010 - December 2012",
		"description" : "Process customer orders. Purchase Inventory. Make Charts."
		},
		{
		"employer" : "Earhart Dining Court (Purdue University)",
		"title" : "Student Supervisor",
		"location" : "West Lafayette, IN",
		"dates" : "November 2006 - May 2010",
		"description" : "Supervisor man. I was cool."
		}
	],
	display: function() {
		for (var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation)
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects": [
		{
		"title" : "Web Page Mockup Match",
		"dates" : "January 2015",
		"description" : "Create a layout in HTML/CSS to match a mock.",
		"images" : ["images/placeholder.gif"]
		}
		,
		
		{
		"title" : "Purely fictional project 2",
		"dates" : "March 2015",
		"description" : "This is a made up project to make sure my function works!",
		"images" : ["images/placeholder.gif"]
		}],
		display: function () {
		for (project in projects.projects) {

			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			$(".project-entry:last").append(formattedImages);
	
		}
	}
};


function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);

});


  function inName() {
    var intNames = bio.name.trim().split(" ");
    var firstName = intNames[0][0].toUpperCase() + intNames[0].slice(1).toLowerCase();
    var lastName = intNames[1].toUpperCase();
    return firstName + " " + lastName;
}


bio.display();
projects.display();
education.display();
work.display();



$("#mapDiv").append(googleMap);






