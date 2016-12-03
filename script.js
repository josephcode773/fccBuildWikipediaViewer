$(document).ready(function () {

    $('#target').submit(function (event) {
        event.preventDefault();
        var searchResults = '';
        var searchQuery = "https://en.wikipedia.org/w/api.php?action=opensearch&callback=?&limit=10&namespace=0&format=json&search=";
        var searchTerm = $("#search-box").val();
        $.getJSON(searchQuery + searchTerm, function (data) {
            searchResults = data;
            console.log(data)
        });
        var txt1 = function () {
            var resultTitle = "";
            var resultHtml = "";
            for (var x = 0; x < 10; x++) {
                resultTitle = searchResults[1][x];
                resultHtml = searchResults[3][x];
                var resultResult = ('<a href="url">link text</a>');
                return resultResult;
            }
            //document.getElementById("demo").innerHTML = resultResult;
        };
        $("ol").append(txt1)


    })
});