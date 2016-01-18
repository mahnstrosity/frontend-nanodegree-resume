// var awesomeThoughts = "I am Mahnstrostiy and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// // console.log(funThoughts);
// // $("#main").append(funThoughts);

// var name = "Mark S. Mahn";
 // var role = "Mahnstrosity";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// var skills = ["AngularJS, JavaScript, JQuery, HTML, CSS, Java, C++"];
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var work = {

	"jobs": [{
			"employer": "aXseum Solutions",
			"title": "Senior Software Engineer",
			"location": "Fort Eustis, VA",
			"dates": "2014 - Present",
			"description": "working on CAR/TAG"
		},

		{
			"employer": "Zantech",
			"title": "Software Programmer",
			"location": "Fort Eustis, VA",
			"dates": "2011 - 2014",
			"description": "working on TDC/CAR/TAG"
		}
	]
}

var projects = {
	"projects": [{
			"title": "Speech Simulator",
			"dates": "2010 - Present",
			"description": "TBA",
			"images": [{
				"url": "http://www.cs.odu.edu/~cpi/old/cpi-s2008/isa/palmtop2g.jpg"
			}, {
				"url": "http://www.cs.odu.edu/~cpi/old/cpi-s2008/isa/KC200PEN2.png"
			}]
		},

		{
			"title": "iSa",
			"dates": "2007 - 2008",
			"description": "iTouch Speech Assistant",
			"images": [{
				"url": "http://www.cs.odu.edu/~cpi/old/cpi-s2008/isa/10003200.jpg"
			}, {
				"url": "http://vignette2.wikia.nocookie.net/callofduty/images/0/07/Ray_Gun_side_view_BOII.png/revision/latest?cb=20121118055921"
			}]
		}
	]
}

var bio = {
	"name": "Mark S. Mahn",
	"role": "Mahnstrosity",
	"contacts" : {
		"mobile" : "(757)298-6899",
		"email" : "markmahn@gmail.com",
		"github" : "mahnstrosity",
		"twitter" : "n/a",
		"location" : "Newport News, VA"
	},
	
	"welcomeMessage" : "Welcome to Hell",
	"skills": ["AngularJS", "JavaScript", "JQuery", "HTML", "CSS", "Java", "C++"],
	"bioPic" : "http://www.cs.odu.edu/~cpi/old/cpi-s2008/isa/mahn.jpg"
}


var education = {
	"college" : "Old Dominion Universtiy",
	"years" : "2007 - 2008"
}

var education = {
	"schools" : [
		{ "name" : "Old Dominion University",
		"location" : "Norfolk, VA",
		"degree" : "BSCS",
		"major" : "Software Engineering",
		"dates" : "2007 - 2008",
		"url" : "http://www.odu.edu"},
		{ "name" : "Christopher Newport University",
		"location" : "Newport News, VA",
		"degree" : "BSGS",
		"major" : "Legal Studies",
		"dates" : "1990 - 1994",
		"url" : "http://www.cnu.edu"}
	]
}

if(bio.skills.length > 0){
	console.log("there are some skills");
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
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
}else{
	console.log("there are NO skills");
}

function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

function inName(name){
	var tempName = name.trim().split(" ");
	console.log(name);
	tempName[1] = tempName[1].toUpperCase();
	tempName[0] = tempName[0].slice(0,1).toUpperCase() + tempName[0].slice(1).toLowerCase();
	return tempName[0] + " " + tempName[1];
}

displayWork();

projects.display = function(){
	console.log("this is the display function");
	$("#projects").append(HTMLprojectStart);
	for(project in projects.projects){
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		for(image in projects.images){
			var formattedImage = HTMLprojectImage.replace("%data%", projects.images[image].url);
			$(".project-entry:last").append(formattedImage);
		}
	}
}
projects.display();


$("#main").append(internationalizeButton);

// $("#main").append("Name: " + bio.name);
// $("#main").append("<br>Role: " + bio.role);
// $("#main").append("<br>Contact Info: " + bio.contacts.mobile);
// $("#main").append("<br>Pic URL: " + bio.bioPic);
// $("#main").append("<br>" + bio.welcomeMessage);
// $("#main").append("<br>Skills: " + bio.skills);
// $("#main").append("<br>Position: " + work.position);
// $("#main").append("<br>College: " + education.college);
