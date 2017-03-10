
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

        for (i in this.skills) {
            $("#skills").append(HTMLskills.replace("%data%", this.skills[i]));
        }
    }

    for (i in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }
}
bio.display();




work.display = function() {

    if (this.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);
        this.jobs.forEach(appendJobsData);
        function appendJobsData (jobsItem){
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
            for (img in projectsItem.images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projectsItem.images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }

        }

    }
}

projects.display();

education.display = function() {
    if (this.schools.length > 0 || this.onlineCourses.length > 0) {
        for (i in this.schools) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[i].name).replace("#", this.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);

        }

        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i in this.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title).replace("#", this.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[i].url).replace("#", this.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();

$("#mapDiv").append(googleMap);
