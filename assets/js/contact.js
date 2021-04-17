$(document).ready(function(){
    function getData(pathName){
        return $.ajax({
            type: 'post',
            url:'http://solace.ist.rit.edu/~plgics/proxy.php',
            dataType:'dataType',
            data: pathName,
            cache:false,
            async:true
        })
    }

    getData({path:'/contactForm'}).done(function(form){
        var f = document.createElement("form");
        f = form;
        $( ".result" ).append( f );
        console.log(form);
    })
})