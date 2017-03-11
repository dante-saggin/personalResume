bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", this.name);
    var formattedRole = HTMLheaderRole.replace("%data%", this.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
    var formattedContactInfo = [];

    formattedContactInfo.push(HTMLmobile.replace("%data%", this.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", this.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", this.contacts.github));
    formattedContactInfo.push(HTMLlinkedin.split("%data%").join(this.contacts.linkedIn));
    formattedContactInfo.push(HTMLlocation.replace("%data%", this.contacts.location));

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcome);

    if (this.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        this.skills.forEach(function(bioSkills) {
            $("#skills").append(HTMLskills.replace("%data%", bioSkills));
        });
    }
    formattedContactInfo.forEach(function(bioFormattedContact) {
        $("#topContacts").append(bioFormattedContact);
        $("#footerContacts").append(bioFormattedContact);
    });

}
bio.display();




work.display = function() {

    if (this.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);
        this.jobs.forEach(appendJobsData);

        function appendJobsData(jobsItem) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", jobsItem.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", jobsItem.title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", jobsItem.location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", jobsItem.datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", jobsItem.description);
            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);

        }




    }

}

work.display();


projects.display = function() {
    if (projects.projects.length > 0) {

        projects.projects.forEach(appendProjectsData);

        function appendProjectsData(projectsItem) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projectsItem.title).replace("#", projectsItem.url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projectsItem.datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projectsItem.description);

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            projectsItem.images.forEach(function(projectImages) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projectImages);
                $(".project-entry:last").append(formattedProjectImage);
            });


        }

    }
}

projects.display();

education.display = function() {
    if (this.schools.length > 0 || this.onlineCourses.length > 0) {
        this.schools.forEach(function(educationSchools) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", educationSchools.name).replace("#", educationSchools.url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", educationSchools.degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", educationSchools.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", educationSchools.location);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
        });

        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            this.onlineCourses.forEach(function(eduationOnlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", eduationOnlineCourses.title).replace("#", eduationOnlineCourses.url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", eduationOnlineCourses.school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", eduationOnlineCourses.dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", eduationOnlineCourses.url).replace("#", eduationOnlineCourses.url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            });

        }

    }
}

education.display();

$("#mapDiv").append(googleMap);
