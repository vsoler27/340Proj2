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

    getData({path:'/employment/coopTable/'}).done(function(json) {
        console.log(json.coopTable.coopInformation);
        $("#jsGrid").jsGrid({
            width: "100%",
            height: "400px",
        
            inserting: true,
            editing: true,
            sorting: true,
            paging: true,

            data: json.coopTable.coopInformation,
        
            fields: [
                { name: "employer", type: "text", width: 150 },
                { name: "degree", type: "text", width: 100 },
                { name: "city", type: "text", width: 100 },
                { name: "term", type: "text", width:100 },
                { type: "control" }
            ]
        
        });
    })
})