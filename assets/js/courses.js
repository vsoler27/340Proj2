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

    getData({path:'/courses/'}).done(function(json){

        // Your Code To Process Output Goes here
        //console.log(json);
        let minCourses = json;

            let tabNames = "<ul>";
            let divs ='';
            for (let i = 0; i < minCourses.courses; i++ ){
                tabNames = tabNames + "<li><a href='#divID" + i + "'>" + minCourses[i].courseID + "</a></li>";

                divs = divs + "<div id=divID" + i + ">" +  minCourses[i].title + "<br>" +
                    minCourses[i].description + "</div>";
            }
            tabNames = tabNames + "</ul>";
            $( "#courses" ).append(tabNames);
            $( "#courses" ).append(divs);

            $( "#courses" ).tabs();

    }).fail (function(jqXHR) {
        // Consider using the jQueryUI "Dialog" widget to display errors
        $('#courses').append(jqXHR.responseText);
    });
})