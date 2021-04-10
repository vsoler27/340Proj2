
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

    getData({path:'/degrees/'}).done(function(json){

        // Your Code To Process Output Goes here
        console.log(json);

    }).fail (function(jqXHR) {
        // Consider using the jQueryUI "Dialog" widget to display errors
        $('#degrees').append(jqXHR.responseText);
    });
})
/*
$(document).ready(function () {
        
            let ugDegrees = underGrad.undergraduate;

            let degreeDetails;
            let concentrations;
            for (let i = 0; i < ugDegrees.length; i++ ){
                $("#ugAccordion").append("<h3>" + ugDegrees[i].degreeName.toUpperCase() + "</h3>")
                    degreeDetails = "<div>" +
                        ugDegrees[i].title + "<br>" +
                        ugDegrees[i].description + "<br>";

                        concentrations = "<br>Concentrations:"
                        concentrations = concentrations + "<ul>";
                        for (let j = 0; j < ugDegrees[i].concentrations.length; j++) {
                            concentrations = concentrations +
                            "<li>" + ugDegrees[i].concentrations[j] + "</li>"
                        }
                    concentrations = concentrations + "</ul>";
                    degreeDetails = degreeDetails + concentrations;
                $("#ugAccordion").append(
                    degreeDetails
                )                        
            }

            $("#ugAccordion").accordion({
                collapsible: true,
                active: false,
                heightStyle: "content"
            });
        });
*/