$(document).ready(function(){
    function getData(pathName){
        return $.ajax({
        type: 'get',
        url:'http://solace.ist.rit.edu/~plgics/proxy.php',
        dataType:'json',
        data: pathName,
        cache:false,
        async:true
        })
    }

    getData({path:'/resources/'}).done(function(json){ 
        //console.log(json);
        $('#resources').append("<h2>" + json.title + "</h2>");
        $('#resources').append("<h3>" + json.subTitle + "</h3>");

        //tutoring info
        $('#resources').append("<h3>" + json.tutorsAndLabInformation.title + "</h3>");
        $('#resources').append("<p>" + json.tutorsAndLabInformation.description + "</p>");
        $('#resources').append("<a href='" + json.tutorsAndLabInformation.tutoringLabHoursLink + "'>Tutoring Hours</a>");

        //study abroad info
        $('#resources').append("<h3>" + json.studyAbroad.title + "</h3>");
        $('#resources').append("<p>" + json.studyAbroad.description + "</p>");
        $('#resources').append("<h3>Places</h3>"); 
        $.each(json.studyAbroad.places, function(index,place) {
            $('#resources').append("<p><b>" + place.nameOfPlace + ": </b>" + place.description + "</p>");
        })

        //console.log(json.studentServices);
        //student services info
        $('#resources').append("<h3>" + json.studentServices.title + "</h3>");
        $('#resources').append("<h4>" + json.studentServices.academicAdvisors.title + "</h4>");
        $('#resources').append("<p>" + json.studentServices.academicAdvisors.description + "</p>");
        $('#resources').append("<a href = " + json.studentServices.academicAdvisors.faq.contentHref  + ">" + json.studentServices.academicAdvisors.faq.title + "</a>");
        $('#resources').append("<h4>" + json.studentServices.professonalAdvisors.title + "</h4>");
        $.each(json.studentServices.professonalAdvisors.advisorInformation, function(index,advisor) {
            $('#resources').append("<p>" + advisor.name + " Department: " + advisor.department + " Email: " + advisor.email + "</p>");
        })
        console.log(json.studentServices.facultyAdvisors);

        //faculty advisors
        $('#resources').append("<h3>" + json.studentServices.facultyAdvisors.title + "</h3>");
    });
})