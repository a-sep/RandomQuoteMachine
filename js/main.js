//============================================== ver.2.0 to działa z json na necie  =========================================
function getQuote() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=777&format=jsonp&lang=en&jsonp=?", function (data) {
        // console.log(data.quoteText);
        var text = encodeURIComponent(data.quoteText)
        $('.my-quote').text(data.quoteText);
        $('.my-author').text(data.quoteAuthor);
        $("#tweet").attr('href', "https://twitter.com/intent/tweet?text=" + text + '  ' + data.quoteAuthor);
    });
}

$(document).ready(function () {
    getQuote();
    $("#newQuote").on("click", getQuote);
});


window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));

//=============================================== Ver.1.0 - to działa z danymi z obiektu ==================================================
// function showQuote() {
//     var quotes = [
//         {
//             "quote": "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it",
//             "author": "MAURICE SWITZER"
//         },
//         {
//             "quote": "Either you run the day, or the day runs you.",
//             "author": "JIM ROHN"
//         },
//         {
//             "quote": "The next time you’re faced with something that’s unexpected, unwanted and uncertain, consider that it just may be a gift.",
//             "author": "STACEY KRAMER"
//         },
//         {
//             "quote": "People are illogical, unreasonable, and self-centered. Love them anyway.",
//             "author": "KENT M. KEITH"
//         },
//         {
//             "quote": "A mind needs books as a sword needs a whetstone, if it is to keep its edge.",
//             "author": "GEORGE R. R. MARTIN"
//         },
//         {
//             "quote": "Laughter is poison to fear.",
//             "author": "GEORGE R. R. MARTIN"
//         },
//         {
//             "quote": "Every flight begins with a fall.",
//             "author": "GEORGE R. R. MARTIN"
//         },
//         {
//             "quote": "If I look back I am lost.",
//             "author": "GEORGE R. R. MARTIN"
//         },
//         {
//             "quote": "The world belongs to those who think and act with it, who keep a finger on its pulse.",
//             "author": "William R. Inge"
//         },
//         {
//             "quote": "The richest man is not he who has the most, but he who needs the least.",
//             "author": "Unknown Author"
//         },
//         {
//             "quote": "Once we accept our limits, we go beyond them.",
//             "author": "Albert Einstein"
//         }
//     ];
//
//     var index = Math.floor(Math.random() * quotes.length); // losowanie indexu jakiegoś cytatu
//
//     console.log(index);
//
//     $(".my-quote").text(quotes[index].quote);
//     $(".my-author").text(quotes[index].author);
//
//
//     $(".twitter-share-button").attr('href', "https://twitter.com/intent/tweet?text=" + quotes[index].quote + '  ' + quotes[index].author);
//
//
// }
//
//
// $(document).ready(function () {
//      showQuote();
//
//     $("#getQuote").on("click", showQuote);
// });

//====================================================================================================================
