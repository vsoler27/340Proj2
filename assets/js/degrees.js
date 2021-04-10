
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

    getData({path:'/degrees/'}).done(function(json){

        // Your Code To Process Output Goes here
        console.log(json);

        let heading1 = "<h3>Undergraduate Degrees</h3>";
        let div1;
        $.each(json.undergraduate, function(index1,degree1) {
            console.log(degree1);
        })

        let heading2 = "<h3>Graduate Degrees</h3>";
        let div2

    }).fail (function(jqXHR) {
        // Consider using the jQueryUI "Dialog" widget to display errors
        $('#degrees').append(jqXHR.responseText);
    });

    //json format
    //undergrad
        //title
        //degree name
        //description
        //concentrations (array)
            //key and value
    //grad
        //title
        //degree name
        //description
        //concentrations (array)
            //key and value
})