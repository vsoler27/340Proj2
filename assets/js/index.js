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

    getData({path:'/about/'}).done(function(json){

        // Your Code To Process Output Goes here
        //console.log(json);
        $('#about').append("<h1>" + json.title + "</h1>" +
        "<h3>" + json.description + "</h3>" + 
        "<h4>'" + json.quote + "' -" + json.quoteAuthor + "</h4>");


    }).fail (function(jqXHR) {
        // Consider using the jQueryUI "Dialog" widget to display errors
        $('#about').append(jqXHR.responseText);
    });
})