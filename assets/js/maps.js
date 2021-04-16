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

    getData({path:'/map/'}).done(function(json){

        // Your Code To Process Output Goes here
        console.log(json);

    }).fail (function(json) {
        // Consider using the jQueryUI "Dialog" widget to display errors
//$('#map').append(json.responseText);

        // <iframe src="http://ist.rit.edu/api/map.php" frameborder="0"></iframe>
    });
})