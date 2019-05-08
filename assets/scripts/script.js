const output = {
    "messages": [
        {
            "title": "Wechsel bei Rapid",
            "text": "Letzter wechsel Rapid. Sax geht aus dem Spiel, neu aufs Feld kommt Demaku."
        },
        {
            "title": "Gelbe Karte gegen Rapid und Austria",
            "text": "Nach einer Austria-Flanke liegt Stebinger am Boden."
        }
    ]
};

document.querySelector(".button").addEventListener("click", showText);

function showText () {
    var i = 0;
    var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0');
    // var yyyy = today.getFullYear();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    // today = dd + '/' + mm + '/' + yyyy;

    while (i < output.messages.length) {
         document.querySelector(".tickerMessages").innerHTML
            += "<h2>" + output.messages[i]["title"] + "</h2>";

         document.querySelector(".tickerMessages").innerHTML
            += "<p>" + output.messages[i]["text"] + "</p>";
        i++;
    }
};
