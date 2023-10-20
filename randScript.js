function pickBooneRestaurant() {
    var options = { "Boone Saloon" : "0.5 Miles From Campus",
                    "Macados" : "0.5 Miles From Campus",
                    "Tapp Room" : "0.5 Miles From Campus",
                    "Chick-Fil-A" : "2.0 Miles From Campus",
                    "Cookout" : "1.0 Miles From Campus",
                    "Mikes Inland Seafood" : "1.3 Miles From Campus",
                    "Pedalin' Pig" : "3.1 Miles From Campus",
                    "Los Arcoiris" : "2.2 Miles From Campus",
                }
    var keys = Object.keys(options)
    var randomIndex = Math.floor(Math.random() * keys.length)
    var randomKey = keys[randomIndex]
    document.getElementById("result").textContent 
                        = "Randomly Picked: Your randomly chosen Boone restaurant is: "
                        + randomKey + ". " + options[randomKey];
}