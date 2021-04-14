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
        //console.log(json);
        let heading;
        let divs;
        $.each(json,function(index,degree) {
            heading = "<h4>" + degree.degreeName + "</h4>";
            divs = "<div>" + degree.semester + "<br>";
            $.each(degree.courses, function(index2,course) {
                divs = divs + course + "<br>";
            })
            divs = divs + "</div>";
            $('#courses').append(heading);
            $('#courses').append(divs);
        })
        $("#courses").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });
    })
})