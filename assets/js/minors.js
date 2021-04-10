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