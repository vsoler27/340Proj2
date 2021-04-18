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

    getData({path:'/about/'}).done(function(json){
        //console.log(json);
        //printing about information
        $('#about').append("<h1>" + json.title + "</h1>" +
        "<h3>" + json.description + "</h3>" + 
        "<h4>'" + json.quote + "' -" + json.quoteAuthor + "</h4>");

    }).fail (function(jqXHR) {
        $('#about').append(jqXHR.responseText);
    });
})