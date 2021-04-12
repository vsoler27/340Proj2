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
        
        //console.log(json);
        
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

        
/*
        // Your Code To Process Output Goes here
        
        let heading = "<h3>Research</h3>";
        let div = "<div>Faculty Research: <ul>";
        $("#research").append(heading);
        $.each(json.byFaculty, function(index, research) {
            div = div + "<li>" + research.facultyName + "<br>" + research.username + "<br>";
            $.each(research.citations, function(index1,citation) {
                div = div + citation + "<br>";
            })
            div = div + "</li>";
        })
        div = div + " </ul>Interest Area: <ul>"
        $.each(json.byInterestArea, function(index, area) {
            div = div + "<li>" + area.areaName + "<br>";
            $.each(area.citations, function(index2,citation) {
                div = div + citation + "<br>";
            })
            div = div + "</li>";
        })
        div = div + "</div>";
        $("#research").append(div);
        
        $("#research").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });
*/
    }).fail (function(jqXHR) {
        // Consider using the jQueryUI "Dialog" widget to display errors
        $('#research').append(jqXHR.responseText);
    })
}) 