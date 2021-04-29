function submitData() {
    let lowNumber = parseInt(GuessGame.lowNumber.value);
    let highNumber = parseInt(GuessGame.highNumber.value);
    if (lowNumber >= highNumber) {
        updateDom("Enter a lower number.", "red")
    }
    else (lowNumber < highNumber); {
        numberGuessGame(lowNumber, highNumber);
    }
    if (highNumber <= lowNumber) {
        updateDom("Enter a higher number", "red")
    }
    else (highNumber > lowNumber); {
        numberGuessGame(lowNumber, highNumber);
    }
}


function updateDom(value, color) {
    document.getElementById("output", "green").innerHTML = value;
}

function numberGuessGame(min, max) {
    let num = randomNumber(min, max).innerHTML = "I'm thinking of a number between " + min + " and " + max
    let guess;
    do {
        guess < num || guess > num; parseInt(prompt("Guess Again"))
    } while(guess = num)parseInt(prompt("Good Guess"))
}

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}