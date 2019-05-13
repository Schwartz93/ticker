const output = {
    "messages": [
        {
            "id": "1",
            "title": "Wechsel bei Rapid",
            "text": "Letzter wechsel Rapid. Sax geht aus dem Spiel, neu aufs Feld kommt Demaku."
        },
        {
            "id": "2",
            "title": "Gelbe Karte gegen Rapid und Austria",
            "text": "Nach einer Austria-Flanke liegt Stebinger am Boden."
        },
        {
            "id": "3",
            "title": "Wechsel bei Austria",
            "text": "Letzter wechsel Rapid. Sax geht aus dem Spiel, neu aufs Feld kommt Demaku."
        },
        {
            "id": "4",
            "title": "Rot nach schwerem Foul",
            "text": "F. Klein mit Rettung abtransportiert."
        },
        {
            "id": "5",
            "title": "Tor für Rapid",
            "text": "Tor in der 50. Minute nach einer Ecke von Schwab."
        },
    ]
};

(function showMessageEvery5Sec() {

    document.querySelector(".container").innerHTML += "<div class='tickerMessages'></div>";

        for (let i = 0; i < output.messages.length; i++) {
            setTimeout(function () {

                let today = new Date();
                let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

                document.querySelector(".tickerMessages").innerHTML
                    += "<div class='singleMessage'>"
                    + "<h2>" + output.messages[i]["title"] + "</h2>"
                    + "<p>" + output.messages[i]["text"] + "</p>"
                    + "<span class='time'>" + time + "</span>"
                    + "</div>";

            }, i * 5000);
        }
}());
