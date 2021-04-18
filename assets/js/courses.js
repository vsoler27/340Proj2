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

    getData({path:'/courses/'}).done(function(json){
        //console.log(json);
        let heading; //headings for the accordion
        let divs; //the content in the accordion
        $.each(json,function(index,degree) {
            //adding degree names
            heading = "<h4>" + degree.degreeName + "</h4>";

            //adding content for each degree
            divs = "<div>" + degree.semester + "<br>";
            $.each(degree.courses, function(index2,course) {
                divs = divs + course + "<br>";
            })
            divs = divs + "</div>";

            //adding info to accordion
            $('#courses').append(heading);
            $('#courses').append(divs);
        })
        //creating accordion
        $("#courses").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });
    }).fail(function (jqXHR) {
        $('#courses').append(jqXHR.responseText);
    });
})