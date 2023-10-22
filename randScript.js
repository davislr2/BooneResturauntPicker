var shuffledOptions = [];

var cheap = { 
    "Chick-Fil-A": "2.0 Miles From Campus",
    "Cookout": "1.0 Miles From Campus",
    "Los Arcoiris": "2.2 Miles From Campus",
    "Taco Bell" : "0.9 Miles From Campus",
    "McDonalds" : "0.7 Miles From Campus",
    "Wendys" : "0.8 Miles From Campus",
    "Bojangles" : "0.8 Miles From Campus",
    "Chipotle" : "1.7 Miles From Campus",
}

var moderate = {
    "Tapp Room": "0.5 Miles From Campus",
    "Macados": "0.5 Miles From Campus",
    "Boone Saloon": "0.5 Miles From Campus",
    "Ale House": "0.5 Miles From Campus",

    "Dos Amigos" : "1.1 Miles From Campus",
    "Los Arcoiris": "2.2 Miles From Campus"
}

var expensive = {
    "Pedalin' Pig": "3.1 Miles From Campus",
    "Mikes Inland Seafood": "1.3 Miles From Campus",
    "Casa Rustica": "1.2 Miles From Campus",
    "Makatos" : "1.9 Miles From Campus",
    "Mint" : "1.4 Miles From Campus",
    "CoBo Sushi" : "1.1 Miles From Campus"
}

var optionsByRange = {
    "Cheap": cheap,
    "Moderate": moderate,
    "Expensive": expensive
}

function randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function pickBooneRestaurant() {

    var priceRange = document.getElementById("priceRange").value;
    var randomKey = ""; 

    var randomKey = Object.keys(optionsByRange[priceRange])[Math.floor(Math.random() * Object.keys(optionsByRange[priceRange]).length)];

    document.getElementById("rangeBox").textContent =
                 "Your chosen price range is: " + priceRange;

    document.getElementById("resultBox").textContent = 
                "Your randomly chosen Boone restaurant is: " + randomKey + ". " + optionsByRange[priceRange][randomKey];

    document.getElementById("restaurantImage").src = "images/" + randomKey + ".jpeg";

}

function pickImage() {

}
