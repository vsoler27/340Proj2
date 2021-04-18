// ISTE 340 | Project 2 | Darlene Ardila && Vicky Soler

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

    getData({path:'/degrees/'}).done(function(json) {
        //console.log(json);

        let heading1; //headings for first accordion
        let div1; //content for first accordion
        let heading2; //headings for second accordion
        let div2; //content for second accordion

        $.each(json.undergraduate, function (index1, degree1) {
            //adding degree name  
            heading1 = "<h3>" + degree1.title + "</h3>";

            //adding degree info
            div1 = "<div>" + degree1.description + "<br>Concentrations: </ul>";
            $.each(degree1.concentrations, function(index2,concentration) {
                div1 = div1 + "<li>" + concentration + "</li>";
            })
            div1 = div1 + "</ul>";

            //adding content to the first accordion
            $("#undergrad").append(heading1);
            $("#undergrad").append(div1);
        })
        
        $.each(json.graduate, function (index, degree2) {
            div2 = "";
            if (degree2.hasOwnProperty("title")) { //process for adding graduate degrees
                //adding degree name
                heading2 = "<h3>" + degree2.title + "</h3>";

                //adding degree info 
                div2 = "<div>" + degree2.description + "<br>Concentrations: </ul>";
                $.each(degree2.concentrations, function(index3,concentration) {
                    div2 = div2 + "<li>" + concentration + "</li>";
                })
                div2 = div2 + "</ul>";

                //adding content to the second accordion
                $("#grad").append(heading2);
                $("#grad").append(div2);
            } 
            else { //process for adding certificates
                //adding heading
                heading2 = "<h3>" + degree2.degreeName + "</h3>";

                //list of certificates
                div2 = div2 + "<div>Available Certificates</ul>";
                $.each(degree2.availableCertificates, function(index3,certificate) {
                    div2 = div2 + "<li>" + certificate + "</li>";
                })
                div2 = div2 + "</ul></div>";

                //adding content to the second accordion
                $("#grad").append(heading2);
                $("#grad").append(div2);
            }
        })
        
        //creating first accordion
        $("#undergrad").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });

        //creating second accordion
        $("#grad").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });
    }).fail (function(jqXHR) {
        $('#degrees').append(jqXHR.responseText);
    });
})