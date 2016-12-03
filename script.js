$(document).ready(function () {

    $('#target').submit(function (event) {
        event.preventDefault();
        //var searchResults = '';
        var searchQuery = "https://en.wikipedia.org/w/api.php?action=opensearch&callback=?&limit=10&namespace=0&format=json&search=";
        var searchTerm = $("#search-box").val();
        //var searchResults = '';
        $.getJSON(searchQuery + searchTerm, function (data) {
            var searchResults = "";
            searchResults = data;

            var resultTitle = "";
            var resultHtml = "";
            var resultResult = "";
            var txt1 = function () {

                for (var x = 0; x < 10; x++) {
                    resultTitle = searchResults[1][x];
                    resultHtml = searchResults[3][x];

                    resultResult = '<li><a href=' + resultHtml + '>' + resultTitle + '</a></li>';

                    //console.log(resultResult);
                    $("ol").append(resultResult);

                }
                //document.getElementById("demo").innerHTML = resultResult;
            };
            //debugger;
            $("ol").append(txt1());

            //searchResults = data;
            //console.log(searchResults)
            //$.ajaxSetup({ cache: false});
        });



    })
});