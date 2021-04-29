function submitData() {
    let lowNumber = parseInt(GuessGame.lowNumber.value);
    let highNumber = parseInt(GuessGame.highNumber.value);
    if (lowNumber >= highNumber) {
        document.getElementById("lowNumber").innerHTML = "Enter a lower number"
    }
    else (lowNumber < highNumber); {
        numberGuessGame();
    }
    if (highNumber <= lowNumber) {
        document.getElementById("highNumber").innerHTML = "Enter a higher number"
    }
    else (highNumber > lowNumber); {
        numberGuessGame();
    }
}


function updateDom(value, color) {
    updateDom("Congratulations", "green")
}

function numberGuessGame(min, max) {
    let num = randomNumber(min, max).innerHTML = "I'm thinking of a number between " + min + " and " + max
    let guess;
    do {
        guess < num || guess > num; parseInt(prompt("Guess Again"))
    } while(guess = num)prompt(updateDom)
}

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}