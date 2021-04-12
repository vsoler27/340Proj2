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

    getData({path:'/courses/'}).done(function(json){

        // Your Code To Process Output Goes here
        console.log(json);

            let tabNames = "<ul>";
            let divs ='';
            $.each(json, function(index, course) {
                tabNames = tabNames + "<li><a href='#divID"
                    + index + "'>"
                    + course.degreeName + "</a></li>";
                divs = divs + course.semester;
                $.each(course.courses, function (index2, courseInfo) {
                    divs = divs + "<div id=divID" + index2 + ">"
                        + courseInfo.semester + "<br>" +
                        courseInfo.description + "</div>";
                })

                
            })
            tabNames = tabNames + "</ul>";
            $("#courses").append(tabNames);
            $("#courses").append(divs);

            $("#courses").tabs();

    }).fail (function(jqXHR) {
        // Consider using the jQueryUI "Dialog" widget to display errors
        $('#courses').append(jqXHR.responseText);
    });
})