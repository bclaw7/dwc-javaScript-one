function submitData() {
    let lowNumber = parseInt(GuessGame.lowNumber.value);
    let highNumber = parseInt(GuessGame.highNumber.value);
    if (lowNumber >= highNumber) {
        updateDom("Enter a lower number.", "red");
    } else if (highNumber <= lowNumber) {
        updateDom("Enter a higher number", "red");
    } else {
        numberGuessGame(lowNumber, highNumber);
    }
}



function updateDom(value, color) {
    document.getElementById("output", "green").innerHTML = value;
}

function numberGuessGame(min, max) {
    let message = "Try to guess my number between your low and high numbers.";
    let num = randomNumber(min, max);
    let guessCount = 0;
    let guess;
    do {
        guess = parseInt(prompt(message));
        if (guess < num) {
            message = guess + " is too low; guess again.";
        } else if (guess > num) {
            message = guess + " is too high; guess again.";
        }
        guessCount++;
    } while (guess != num);
    message = "Yay!!  " + guess + "  is correct.  It took you " + guessCount + " guess(es).";
    updateDom(message, "green");
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function updateDOM(value, color) {
    document.getElementById("output").innerHTML = value;
    document.getElementById("output").style.color = color;
}