var ericHolder = '';
// $(document).ready(function () {
//     $.getJSON("https://www.wikidata.org/w/api.php?action=wbsearchentities&search=Chicago&language=en&type=item&format=json", function (json) {
//       ericHolder = json;
//     });
//     // $.ajaxSetup({ cache: false});
// });

var southPark = [
    "Joe Smith",
    [
        "Joe Smith",
        "Joe Smith (basketball)",
        "Joe Smith (winger)",
        "Joe Smith (pitcher)",
        "Joe Smith (rugby union)",
        "Joe Smith (football forward, born 1889)",
        "Joe Smith Jr.",
        "Joe Smith, American",
        "Joe Smith (musician)",
        "Joe Smith (gridiron football)"
    ],
    [
        "",
        "Joseph Leynard Smith (born July 26, 1975) is an American former professional basketball player who played at power forward position for 12 teams of the NBA during his 16-year career.",
        "Joseph Stanley \"Joe\" Smith was an English professional footballer who played as a winger.",
        "Joseph Michael Smith (born March 22, 1984) is an American professional baseball pitcher who is a free agent.",
        "Johan Smith (born (1991-12-02)2 December 1991 in Fochville, South Africa) is a South African rugby union player, currently playing with the Leopards.",
        "Joseph \"Joe\" Smith (25 June 1889 \u2013 11 August 1971) was an English professional football player and manager.",
        "Joe Smith Jr. (born September 20, 1989) is an American professional boxer who competes in the light heavyweight division.",
        "Joe Smith, American is a 1942 American spy film directed by Richard Thorpe and stars Robert Young and Marsha Hunt.",
        "Joe \"Fox\" Smith (n\u00e9 Joseph Emory Smith; 28 June 1902 Ripley, Ohio \u2013 2 December 1937 Central Islip, New York) was an American jazz trumpeter.",
        "Joseph O\u2019Brien \"Joe\" Smith (born August 26, 1979) is aformer professional Canadian football player in the Canadian Football League."
    ],
    [
        "https://en.wikipedia.org/wiki/Joe_Smith",
        "https://en.wikipedia.org/wiki/Joe_Smith_(basketball)",
        "https://en.wikipedia.org/wiki/Joe_Smith_(winger)",
        "https://en.wikipedia.org/wiki/Joe_Smith_(pitcher)",
        "https://en.wikipedia.org/wiki/Joe_Smith_(rugby_union)",
        "https://en.wikipedia.org/wiki/Joe_Smith_(football_forward,_born_1889)",
        "https://en.wikipedia.org/wiki/Joe_Smith_Jr.",
        "https://en.wikipedia.org/wiki/Joe_Smith,_American",
        "https://en.wikipedia.org/wiki/Joe_Smith_(musician)",
        "https://en.wikipedia.org/wiki/Joe_Smith_(gridiron_football)"
    ]
];

$(document).ready(function () {
    $('.ui.search')
        .search({
            apiSettings: {
                url: 'https://api.github.com/search/repositories?q={query}'
            },
            fields: {
                results : 'items',
                title   : 'name',
                url     : 'html_url'
            },
            minCharacters : 3
        })
    ;
    // $.ajaxSetup({ cache: false});
});


