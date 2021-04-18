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

    getData({path:'/employment/coopTable/'}).done(function(json) {
        //console.log(json.coopTable.coopInformation);
        //creating the grid 
        $("#jsGrid").jsGrid({
            //size of the grid
            width: "100%",
            height: "400px",
        
            //properties of the grid
            inserting: true,
            editing: true,
            sorting: true,
            paging: true,

            //info in the grid
            data: json.coopTable.coopInformation,
        
            //headings in the grid
            fields: [
                { name: "employer", type: "text", width: 150 },
                { name: "degree", type: "text", width: 100 },
                { name: "city", type: "text", width: 100 },
                { name: "term", type: "text", width:100 },
                { type: "control" }
            ]
        
        });
    }).fail (function(jqXHR) {
        $('#grid').append(jqXHR.responseText);
    });
})