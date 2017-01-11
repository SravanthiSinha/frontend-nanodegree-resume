var bio = {
    "name": "Catana Channi",
    "role": " Full Stack Ninja",
    "contacts": {
        "email": "sinha.sravanthi@gmail.com",
        "mobile": "510-461-2501",
        "github": "SravanthiSinha",
        "twitter": "@SravanthiSinha",
        "location": "RedLands, California"
    },
    "bioPic": "http://play.dcsuperherogirls.com/en-US/Images/profile-katana-new_tcm1249-241033.png",
    "welcomemsg": "Hello World!",
    "skills": ["DataScience Magneto", "JS Logan", "PYTHON Xavier", "C Mystique"]
};

var formatedName = HTMLheaderName.replace("%data%", bio.name);
var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
var formatedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formatedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemsg);
var formatedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formatedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formatedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formatedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formatedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

var work = {
    "jobs": [{
        "title": "DataScientist",
        "employer": "NASA",
        "yearsWorked": 0.2,
        "city": "San Francisco",
        "dates": "June 2016 - August 2016",
        "description": "Finding meteroids using DeepLearning."
    }, {
        "title": "Full Stack Engineer",
        "employer": "Holberton",
        "yearsWorked": 1,
        "city": "San Francisco",
        "dates": "Jan 2016 - Current",
        "description": "Studying to become a Full Stack Engineer."
    }]
};

var projects = {
    "projects": [{
        "title": "Finding meteroids using DeepLearning.",
        "dates": "June 2016 - August 2016",
        "description": "Finding meteroids using DeepLearning.",
        "images": ["http://www.frontierdevelopmentlab.org/images/two.png"]
    }]
};

var education = {
    "schools": [{
        "name": "Holberton School",
        "location": "San Francisco",
        "dates": "Jan 2016 - Current",
        "majors": ["Low Level", "High Level", "Devops"]
    }, {
        "name": "Keshav Memorial Institute of Technology",
        "location": "Hyderabad",
        "dates": "Sep 2009 - April 2013",
        "majors": ["Electroics"]
    }],
    "onlineCourses": [{
        "title": "Learning How to Learn",
        "school": "Coursera",
        "dates": "April 2014",
        "url": "https://classroom.udacity.com/courses/ud804/"
    }, {
        "title": "Javascript Bascis",
        "school": "Udacity",
        "dates": "Jan 2017",
        "url": "https://classroom.udacity.com/courses/ud804/"
    }]
};



$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);

$("#header").append(formatedPic);
$("#header").append(formatedmsg);
$("#topContacts").append(formatedmobile);
$("#topContacts").append(formatedemail);
$("#topContacts").append(formatedgithub);
$("#topContacts").append(formatedtwitter);
$("#topContacts").append(formatedlocation);
$("#header").append(HTMLskillsStart);

for (i = 0; i < bio.skills.length; i++) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
}

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (i = 0; i < work.jobs.length; i++) {
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i]["title"]))
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].city));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
}

projects.display = function() {
    $('#projects').append(HTMLprojectStart);
    for (i = 0; i < projects.projects.length; i++) {
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i]["title"]));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        for (j = 0; j < projects.projects[i]["images"].length; j++) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i]["images"][j]));
        }
    }
}


education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (i = 0; i < education.schools.length; i++) {
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (i = 0; i < education.onlineCourses.length; i++) {
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
    }
}

work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$("#footerContacts").append(formatedmobile);
$("#footerContacts").append(formatedemail);
$("#footerContacts").append(formatedgithub);
$("#footerContacts").append(formatedtwitter);
$("#footerContacts").append(formatedlocation);

//$("#main").append(internationalizeButton);

function inName(name) {
    var names = name.split(" ");
    return names[0][0].toUpperCase() + names[0].slice(1).toLowerCase() + " " + names[1].toUpperCase();
}
