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

// The value you assign to the 'path' parameter, in this example '/minors/', is the 'ist.rit.edu/api' 
// endpoint you wish to retrieve data from.
// Starting on line 16, you will write code to parse the returned data and display it in a jQueryUI widget of 
// your choosing.
getData({path:'/minors/'}).done(function(json){

    console.log(json);

    let heading;
    let div;

    $.each(json, function(index, value){
        $.each(value, function(index1, value1){
            $.each(value1, function(index2, value2){
                $('#minorsContent').append('<b>'+ index2+ ': </b>' + value2 + "<br>");
            });
            $('#minorsContent').append("<br>");
        });
    });
});