// ISTE 340 | Project 2 | Darlene Ardila && Vicky Soler

$(document).ready(function () {

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
        let tabNames1 = "<ul>"; //tab names
        let divs1 = ""; //tab content

        let tabNames2 = "<ul>"; //tab names
        let divs2 = ""; //tab content

        $.each(json.byFaculty, function(index1,research1) {
            tabNames1 = tabNames1 + "<li><a href='#divID" + index1 + "'>" + research1.facultyName + "</a></li>";
            divs1 = divs1 + "<div id=divID" + index1 + "> Username: " + research1.username + "<br><ul>";
            $.each(research1.citations, function(index2,citation) {
                divs1 = divs1 + "<li>" + citation + "</li>";
            })
            divs1 = divs1 + "</ul></div>";
        })
        // creating tabs
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
        // creating tabs
        tabNames2 = tabNames2 + "</ul>";
        $("#interest").append(tabNames2);
        $("#interest").append(divs2);
        $("#interest").tabs();

    }).fail (function(jqXHR) {
        $('#research').append(jqXHR.responseText);
    })
}) 