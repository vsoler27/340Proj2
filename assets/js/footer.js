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

    getData({path:'/footer/'}).done(function(json){
        //console.log(json);

        //adding links 
        $.each(json.quickLinks, function(index,link) {
            $('#footer').append("<a href='" + link.href + "'>" + link.title + "</a>");
        })
        
        //social media 
        $('#footer').append("<p>" + json.social.title + "<br>" + json.social.tweet + " by: " + json.social.by + "</p>");
        $('#footer').append("<a href='>" + json.social.twitter + "'>Twitter</a><a href='" + json.social.facebook + "'>Facebook</a>")

        //copyright
        $('#footer').append("<p>" + json.copyright.html + "</p>");

    }).fail (function(jqXHR) {
        $('#footer').append(jqXHR.responseText);
    });
})