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

    getData({ path: '/research/' }).done(function (json) {
        
        console.log(json);
        
        let tabNames1 = "<ul>";
        let divs1 = "";

        let tabNames2 = "<ul>";
        let divs2 = "";

        $.each(json.byFaculty, function(index1,research1) {
            tabNames1 = tabNames1 + "<li><a href='#divID" + index1 + "'>" + research1.facultyName + "</a></li>";
            divs1 = divs1 + "<div id=divID" + index1 + "> Username: " + research1.username + "<br><ul>";
            $.each(research1.citations, function(index2,citation) {
                divs1 = divs1 + "<li>" + citation + "</li>";
            })
            divs1 = divs1 + "</ul></div>";
        })
        tabNames1 = tabNames1 + "</ul>";
        $("#faculty").append(tabNames1);
        $("#faculty").append(divs1);
        $("#faculty").tabs();

        $.each(json.byInterestArea, function(index1,research2) {
            tabNames2 = tabNames2 + "<li><a href='#divID" + index1 + "'>" + research2.areaName + "</a></li>";
            divs2 = divs2 + "<div id=divID" + index1 + "> <ul>"
            $.each(research2.citations, function(index2,citation) {
                divs2 = divs2 + "<li>" +  citation + "</li>";
            })
            divs2 = divs2 + "</ul></div>";
        })
        tabNames2 = tabNames2 + "</ul>";
        $("#interest").append(tabNames2);
        $("#interest").append(divs2);
        $("#interest").tabs();
       
        //tab layout
       /* getData({path:'/courses/'}).done(function(json){

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
                            + courseInfo + "</div>";
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
    })*/

        
    }).fail (function(jqXHR) {
        // Consider using the jQueryUI "Dialog" widget to display errors
        $('#research').append(jqXHR.responseText);
    })
}) 