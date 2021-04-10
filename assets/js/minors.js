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

getData({path:'/minors/'}).done(function(json){

    console.log(json);

    let minor;
    
    $.each(json, function(index, value){
        $.each(value, function(index1, value1){
            minor = "";
            console.log("index 1: " + index1);
            console.log(value1);
            console.log(value1.name);
            minor = "<h3>" + value1.title + "</h3>" ;
            /*$.each(value1, function(index2, value2){
                $('#ugAccordion').append('<b>'+ index2+ ': </b>' + value2 + "<br>");
                console.log("index 2: " + index2);
                console.log(value2);
            });*/
            $('#ugAccordion').append(minor + "</br>");
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