var previousRestaurant = null;

function randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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
    
    if (!shuffledOptions.length) {
        priceRange = document.getElementById("priceRange").value;
        shuffledOptions = Object.keys(optionsByRange[priceRange]);
        randomizeArray(shuffledOptions);
    }

    if (!shuffledOptions.length) {
        shuffledOptions = Object.keys(optionsByRange[priceRange]);
        randomizeArray(shuffledOptions);
    }

    var randomKey = shuffledOptions.pop();
    
    document.getElementById("rangeBox").textContent =
                 "Your chosen price range is: " + priceRange;

    document.getElementById("resultBox").textContent = 
                "Your randomly chosen Boone restaurant is: " + randomKey + ". " + dict[randomKey];
}
