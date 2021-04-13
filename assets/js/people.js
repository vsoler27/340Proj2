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

    getData({path:'/people/faculty/'}).done(function(data){

        // Your Code To Process Output Goes here
        //console.log(data)
        let tabNames = "<ul>";
        let divs = "";

        $.each(data.faculty, function(index,person) {
            tabNames = tabNames + "<li><a href='#divID" + index + "'>" + person.name + "</a></li>";
            divs = divs + "<div id=divID" + index + ">Tag Line: " + person.tagline + "<br>Username: " + person.username + "<br> Title: " + person.title + "<br>"
            + "Office: " + person.office + "<br>Phone: " + person.phone + "<br>Website: " + person.website + "<br>Interest Area: " + person.interestArea + "<br><img src='" + person.imagePath + "'>";
            divs = divs + "</div>";
        })

        //interestArea, office, phone, website
        
        tabNames = tabNames + "</ul>";
        $('#people').append(tabNames);
        $('#people').append(divs);
        $('#people').tabs();
    }).fail (function(jqXHR) {
        // Consider using the jQueryUI "Dialog" widget to display errors
        $('#people').append(jqXHR.responseText);
    });
})
