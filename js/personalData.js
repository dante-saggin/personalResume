var bio = {
    "name": "Dante Henrique Strutzel Saggin",
    "role": "Digital Business Integration Consultant",
    "contacts": {
        "mobile": "+55 11 96076-1276",
        "email": "dante.saggin@gmail.com",
        "github": "dante-saggin",
        "linkedIn": "dante-saggin",
        "location": "São Paulo Brasil"
    },
    "welcomeMessage": "Hi my name is Dante, I'm a specialist in Business Integration, learning new thigs like Front-End" +
        "development and Machine Learning and many other things.",
    "biopic": "images/me.png",
    "skills": ["Oracle Fusion Middleware", "Technology Architecture", "Software Development", "Performance Test", "Front-End Development", ]
};

var work = {
    "jobs": [{
        "employer": "Accenture",
        "title": "Technology Architect Analyst",
        "location": "São Paulo, São Paulo, Brasil",
        "datesWorked": "March 2011 - March 2013",
        "description": "I was hired to work on Accenture right after my graduation, since I had no prior experience with Oracle Fusion Middleware" +
            "or Solution Architecture I started learning about Oracle Service Bus and how do design a service oriented architecture works," +
            "some months later I started to teach about Oracle Service Bus and review the code sent by the remote team." +
            " Later on, this role I started to learn about the Oracle SOA Suite and became a reference on the project."
    }, {
        "employer": "Accenture",
        "title": "Technology Architect Senior Analyst",
        "location": "São Paulo, São Paulo, Brasil",
        "datesWorked": "March 2013 - December 2013",
        "description": "During this period, I worked with a team of experts in a performance tests seeking to improve the average " +
            "response time and stability for all services inside the company."
    }, {
        "employer": "Accenture",
        "title": "Technology Architect Team Leader",
        "location": "São Paulo, São Paulo, Brasil",
        "datesWorked": "December 2013 - May 2015",
        "description": "During this time, I have done many things, I participate of a Team Called Problem Solve Group (PSG) in this team we have" +
            "the responsibility to understand and address the root cause of many problems. During a crisis inside the client where" +
            "I was allocated I as able to identify that a product bug which was causing a major loss of service, since this product" +
            "is a packaged solution there was nothing that I could do except understand and propose a workaround which worked and became the client official Architecture."
    }, {
        "employer": "Accenture",
        "title": "Digital Business Integration Consultant",
        "location": "São Paulo, São Paulo, Brasil",
        "datesWorked": "May 2015 - Today",
        "description": "In this role so far I have the opportunity to work with IBM WorkLight (Mobile First) building a hybrid mobile application with" +
            "AngularJs and Ionic for the first mobile bank in Brazil."
    }]
};

var projects = {
    "projects": [{
        "title": "Learn Technology",
        "datesWorked": "1995 - 2017",
        "description": "Constant Project",
        "images": ["https://placeimg.com/600/200/tech"],
        "url": "https://placeimg.com/200/200/tech"
    }, {
        "title": "Admire Nature",
        "datesWorked": "1985 - 2017",
        "description": "Nature is everything",
        "images": ["https://placeimg.com/600/200/nature"],
        "url": "https://placeimg.com/200/200/nature"
    }]
};

var education = {
    "schools": [{
        "name": "Universidade Estadual Paulista - UNESP",
        "dates": "2005 - 2010",
        "location": "Bauru, São Paulo, Brasil",
        "degree": "Eletric Engeniring",
        "url": "http://www.feb.unesp.br"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Nanodegree Desenvolvedor Web Front-End",
        "dates": "December 2016 - March 2017",
        "url": "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }]
};

var placesWhereILivedAndWorked = [{
    "place": "SKY Cenu",
    "state": "São Paulo"
}, {
    "place": "Accenture",
    "state": "São Paulo"
}, {
    "place": "SKY Santana do Parnaiba",
    "state": "São Paulo"
}, {
    "place": "Banco Original",
    "state": "São Paulo"
}, {
    "place": "Unesp",
    "state": "Bauru"
}, {
    "place": "",
    "state": "Piratininga"
}];

var geoLocation = [];

placesWhereILivedAndWorked.forEach(convertPlaceToGeoLocation);

function convertPlaceToGeoLocation(item) {
    var geolocationGoogle = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + item.place + ' ' + item.state + '&key=AIzaSyBZ-kZI0S-CL9_sUVqje5wxtWz4jnbrfis';

    $.getJSON(geolocationGoogle, function(data) {
        geoLocation.push(data.results[0].geometry.location);
    });

}
