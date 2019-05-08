const output = {
    "messages": [
        {
            "title": "Wechsel bei Rapid",
            "text": "Letzter wechsel bei der Austria. Sax geht aus dem Spiel, neu aufs Feld kommt Demaku."
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

    while (i < output.messages.length) {
        document.querySelector(".outputText").innerHTML += output.messages[i]["title"] + output.messages[i]["text"];
        i++;
    }
}
