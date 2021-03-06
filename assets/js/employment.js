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

    getData({path:'/employment/'}).done(function(json){

        //console.log(json);
        //introduction display
        $("#employment").append("<h2>" + json.introduction.title + "</h2>");
        $.each(json.introduction.content ,function(index,info) {
            $("#employment").append("<p><b>" + info.title + ": </b>" + info.description + "</p>");
        })

        //employers display
        $("#employment").append("<h2>" + json.employers.title + "</h2>");
        $("#employment").append("<p>");
        $.each(json.employers.employerNames ,function(index,name) {
            $("#employment").append(name + " ");
        })
        $("#employment").append("</p>");

        //degree statistics display
        $("#employment").append("<h2>" + json.degreeStatistics.title + "</h2>");
        $.each(json.degreeStatistics.statistics ,function(index,stats) {
            $("#employment").append("<p>" + stats.value + " " + stats.description + "</p>");
        })

        //careers display
        $("#employment").append("<h2>" + json.careers.title + "</h2>");
        $("#employment").append("<p>");
        $.each(json.careers.careerNames ,function(index,name) {
            $("#employment").append(name + " ");
        })
        $("#employment").append("</p>");

    }).fail (function(jqXHR) {
        $('#employment').append(jqXHR.responseText);
    });
})