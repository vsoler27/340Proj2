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

        console.log(json);

        let tabNames = "<ul>";
        let divs = "";

        $.each(json.UgMinors, function (index1, minor) {
            console.log(minor.title);
            tabNames = tabNames + "<li>" + minor.title + "</li>";
            divs = divs + "<div>" + minor.title + "<br>Description: " + minor.description + "</div>";

            tabNames = tabNames + "</ul>";
            $("#minors").append(tabNames);
            $("#minors").append(divs);
            $("#minors").tabs();
           
        })

        
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
            $('#ugAccordion').append(heading);
            div = div + "<ul>";
            $.each(minor.courses, function(index2, course){
                div = div + "<li>" + course + "</li>"
            });
            div = div + "</ul>";
            div = div + minor.note + "</div>";
            
            $('#ugAccordion').append(div);
        });
    });
    $("#ugAccordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    }); */