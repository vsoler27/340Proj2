
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

        let heading1;
        let div1;
        $.each(json.undergraduate, function(index1,degree1) {
            console.log(degree1);
            heading1 = "<h3>" + degree1.title + "</h3>";
            div1 = "<div>" + degree1.description + "<br>Concentrations: </ul>";
            $.each(degree1.concentrations, function(index2,concentration) {
                div1 = div1 + "<li>" + concentration + "</li>";
            })
            div1 = div1 + "</ul>";
            $("#undergrad").append(heading1);
            $("#undergrad").append(div1);
            $("#undergrad").accordion({
                collapsible: true,
                active: false,
                heightStyle: "content"
            });
        })

        let heading2 = "<h3>Graduate Degrees</h3>";
        let div2;
        $.each(json.graduate, function(index2,degree2) {
            console.log(degree2);
            heading2 = "<h3>" + degree2.title + "</h3>";
            div2 = "<div>" + degree2.description + "<br>Concentrations: </ul>";
            $.each(degree2.concentrations, function(index2,concentration) {
                div2 = div2 + "<li>" + concentration + "</li>";
            })
            div2 = div2 + "</ul>";
            $("#undergrad").append(heading2);
            $("#undergrad").append(div2);
            $("#undergrad").accordion({
                collapsible: true,
                active: false,
                heightStyle: "content"
            });
        })

    }).fail (function(jqXHR) {
        // Consider using the jQueryUI "Dialog" widget to display errors
        $('#degrees').append(jqXHR.responseText);
    });

    //json format
    //undergrad
        //title
        //degree name
        //description
        //concentrations (array)
            //key and value
    //grad
        //title
        //degree name
        //description
        //concentrations (array)
            //key and value
})