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

// The value you assign to the 'path' parameter, in this example '/minors/', is the 'ist.rit.edu/api' 
// endpoint you wish to retrieve data from.
// Starting on line 16, you will write code to parse the returned data and display it in a jQueryUI widget of 
// your choosing.
getData({path:'/minors/'}).done(function(json){

    console.log(json);

    let heading;
    let div;

    $.each(json, function(index, value){
        $.each(value, function(index1, value1){
            $.each(value1, function(index2, value2){
                $('#ugAccordion').append('<b>'+ index2+ ': </b>' + value2 + "<br>");
            });
            $('#ugAccordion').append("<br>");
        });
    });
    $("#ugAccordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
});

/*$(document).ready(function(){
        
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
});*/