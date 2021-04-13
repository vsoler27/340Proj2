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

    getData({path:'/footer/'}).done(function(json){

        // Your Code To Process Output Goes here
        //console.log(json);
        $.each(json.quickLinks, function(index,link) {
            $('#footer').append("<a href='" + link.href + "'>" + link.title + "</a>");
        })
        $('#footer').append("<p>" + json.social.title + "<br>" + json.social.tweet + " by: " + json.social.by + "</p>");
        $('#footer').append("<a href='>" + json.social.twitter + "'>Twitter</a><a href='" + json.social.facebook + "'>Facebook</a>")
        $('#footer').append("<p>" + json.copyright.html + "</p>");

    }).fail (function(jqXHR) {
        // Consider using the jQueryUI "Dialog" widget to display errors
        $('#footer').append(jqXHR.responseText);
    });
})