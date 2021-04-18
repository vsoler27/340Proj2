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

    getData({path:'/people/faculty/'}).done(function(data){

        //console.log(data)
        let tabNames = "<ul>";
        let divs = "";
        //interestArea, office, phone, website
        $.each(data.faculty, function(index,person) {
            tabNames = tabNames + "<li><a href='#divID" + index + "'>" + person.name + "</a></li>";
            divs = divs + "<div id=divID" + index + ">Tag Line: " + person.tagline + "<br>Username: " + person.username + "<br> Title: " + person.title + "<br>"
            + "Office: " + person.office + "<br>Phone: " + person.phone + "<br>Website: " + person.website + "<br>Interest Area: " + person.interestArea + "<br><img src='" + person.imagePath + "'>";
            divs = divs + "</div>";
        })
        
        //creating tabs
        tabNames = tabNames + "</ul>";
        $('#people').append(tabNames);
        $('#people').append(divs);
        $('#people').tabs();
    }).fail (function(jqXHR) {
        $('#people').append(jqXHR.responseText);
    });
})
