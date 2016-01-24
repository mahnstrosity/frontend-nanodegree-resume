var bio = {
	"name": "BATMAN",
	"role": "Dark Knight",
	"contacts" : {
		"mobile" : "bat",
		"email" : "bwayne@wayneindustries.com",
		"signal" : "bat",
		"location" : "Gotham"
	},
	"welcomeMessage" : "Tell me. Do you bleed? ... You will!      <br>P.S. Supergirl, call me!",
	"skills": ["Theatricality", "Deception", "Martial Arts", "Forensics", "Growly Voice"],
	"bioPic" : "https://s-media-cache-ak0.pinimg.com/236x/42/b2/c0/42b2c095545c4addc157268dd7a2f08c.jpg",
	"display" : function(){
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedSignal = HTMLsignal.replace("%data%", bio.contacts.signal);
		$("#topContacts").append(formattedSignal);
		$("#footerContacts").append(formattedSignal);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);		
		if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			for(skill in bio.skills){	
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
	}
}

var education = {
	"schools" : [
		{ "name" : "Old Dominion University",
		"location" : "Norfolk, VA",
		"degree" : "Bachelors",
		"major" : "Computer Science",
		"dates" : "2007 - 2008",
		"url" : "http://www.odu.edu"},
		{ "name" : "Christopher Newport University",
		"location" : "Newport News, VA",
		"degree" : "Bachelors",
		"major" : "Legal Studies",
		"dates" : "1990 - 1994",
		"url" : "http://www.cnu.edu"}
	],
	"onlineCourses" : [
		{ "title" : "Front-End Web Developer Nanodegree",
		"school" : "UDACITY",
		"date" : "2016",
		"url" : "http://www.udacity.com"
		}
	],
	"display" : function(){
		for(school in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedNameDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameDegree);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
		}
		if(education.onlineCourses.length > 0){
			$("#education").append(HTMLonlineClasses);
		}
		for(course in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleSchool);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			$(".education-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
}

var work = {
	"jobs": [{
			"employer": "The Justice League",
			"title": "Caped Crusader",
			"location": "Metropolis",
			"dates": "2014 - Present",
			"description": "Jump between Superman and Kryptonite."
		},

		{
			"employer": "Wayne Industries",
			"title": "Dark Knight",
			"location": "Gotham",
			"dates": "2011 - 2014",
			"description": "Constantly fight The Joker."
		}
	],
	"display" : function(){
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
}

var projects = {
	"projects": [{
			"title": "More Stuff To Throw",
			"dates": "2010 - Present",
			"description": "More stuff to throw at bad guys.",
			"images": [{
				"url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3PTokc4WdzvxQrAPWe7yDULvj6WP9Ul66QhdQf9SMIBAZ9k_HGg"
			}, {
				"url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIfi7EKcXz2_lYh8GxhXQIRL6m1cOLCXA3v15arO7pLNz9K5Mr3Q"
			}]
		},

		{
			"title": "The Sonic Batarang",
			"dates": "2007 - 2008",
			"description": "The Sonic Batarang sent out a high-pitched wailing sound.",
			"images": [{
				"url": "http://vignette3.wikia.nocookie.net/arkhamcity/images/b/b9/Sonic_Batarang.jpg/revision/latest?cb=20120122152614"
			}]
		}
	],
	"display" : function(){
		$("#projects").append(HTMLprojectStart);
		for(project in projects.projects){
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image].url);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
