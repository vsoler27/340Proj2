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
                + minor.description + "<ul>";
            $.each(minor.courses, function(index2, course){
                div1 = div1 + "<li>" + course + "</li>"
            });
            div1 = div1 + "</ul>";
            div1 = div1 + minor.note + "</div>";

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
