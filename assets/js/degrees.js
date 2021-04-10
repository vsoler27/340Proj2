$(document).ready(function(){
        
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
