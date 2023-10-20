function pickBooneRestaurant() {
    var cheap = { 
        "Chick-Fil-A": "2.0 Miles From Campus",
        "Cookout": "1.0 Miles From Campus",
        "Los Arcoiris": "2.2 Miles From Campus",
    }

    var moderate = {
        "Tapp Room": "0.5 Miles From Campus",
        "Macados": "0.5 Miles From Campus",
        "Boone Saloon": "0.5 Miles From Campus",
        "Ale House": "0.5 Miles From Campus"
    }

    var expensive = {
        "Pedalin' Pig": "3.1 Miles From Campus",
        "Mikes Inland Seafood": "1.3 Miles From Campus"
    }

    var optionsByRange = {
        "Cheap": cheap,
        "Moderate": moderate,
        "Expensive": expensive
    }
    var priceRange = document.getElementById("priceRange").value;

    var keys = Object.keys(optionsByRange[priceRange])
    var randomIndex = Math.floor(Math.random() * keys.length)
    var randomKey = keys[randomIndex]
    
    var priceRange = document.getElementById("priceRange").value;
    document.getElementById("rangeBox").textContent = "Your chosen price range is: " + priceRange;

    document.getElementById("resultBox").textContent = "Your randomly chosen Boone restaurant is: " + randomKey + ". " + options[randomKey];
}

