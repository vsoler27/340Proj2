$(document).ready(function () {

    function getData(pathName) {
        return $.ajax({
            type: 'get',
            url: 'http://solace.ist.rit.edu/~plgics/proxy.php',
            dataType: 'json',
            data: pathName,
            cache: false,
            async: true
        })
    }

    getData({ path: '/minors/' }).done(function (json) {

        //console.log(json);

        let heading1;
        let div1;

        $.each(json.UgMinors, function (index1, minor) {
            heading1 = "<h3>" + minor.title + "</h3>";
            div1 = "<div>" + "<br>Description: "
                + minor.description;
            getData({ path: 'courses/degreeName=' + minor.name}).done(function (json2) {
                console.log("inside the second get data");
                console.log(json2);
            })

            $("#minors").append(heading1);
            $("#minors").append(div1);

           
        })
        $("#minors").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });

        
    }).fail (function(jqXHR) {
        // Consider using the jQueryUI "Dialog" widget to display errors
        $('#minors').append(jqXHR.responseText);
    });


})
/*
    tabNames = "<ul>" + research.name + "<";
    let divs = "";
    for (let i = 0; minorCourses.length; i++) {
        tabNames = tabNames + "<li><a href='divID" + i + "'>" + minorCourses[i].courseID + "</a></li>";

        dics = divs + "<div di=divID" + ">" + minorCourses[i].title + "<br>" + minorCourses[i].description + "</div>";
    }
    tabNames = tabNames + "</ul>";
    $("#courses").append(tabNames);
    $("#courses").append(divs);
    $("#courses").tabs();
*/

// Accordian Code
/*
    $.each(json, function(index, obj){
        
        $.each(obj, function(index1, minor){
            
            let heading;
            let div;

            heading = "<h3><b>" + minor.title + "</b></h3>";
            div = "<div>" + minor.name + "<br>" +
                            minor.description + "<br>";
            $('#minors').append(heading);
            div = div + "<ul>";
            $.each(minor.courses, function(index2, course){
                div = div + "<li>" + course + "</li>"
            });
            div = div + "</ul>";
            div = div + minor.note + "</div>";
            
            $('#minors').append(div);
        });
    });
    $("#minors").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    }); */