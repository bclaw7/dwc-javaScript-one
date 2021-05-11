function submitData() {
    let low = parseFloat(guessForm.bottom.value);
    let high = parseFloat(guessForm.top.value);

    if((!low || isNaN(low)) || (!high || isNaN(high))) {
        updateDOM("Please include a valid number for both the inputs above.", "red");
        return;
    }
    if(!(low < high)) {
        updateDOM("The low number must be less than the high number...crazy, I know. :)", "red");
        return;
    }

    numberGuessGame(low, high)
}

function numberGuessGame(low, high) {
    let message = "I'm thinking of a number between " + low + " and " + high + ".\nTry to guess it!\nPlease enter an integer between " + low + " and " + high + ".";
    let answer = randomNumber(low, high);
    let guessCount = 0;
    let guess;

    do {
        guess = parseInt(prompt(message));
        if (guess < answer) {
            message = guess + " is too low. Please enter another integer.";
        } else if (guess > answer) {
            message = guess + " is too high. Please enter another integer.";
        }
        guessCount++;
    } while (guess != answer);
    message = "Congratulations!! " + guess + " is correct! It only took you " + guessCount + " guesses.";
    updateDOM(message, "green");
}

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

function updateDOM(value, color) {
    document.getElementById("output").innerHTML = value;
    document.getElementById("output").style.color = color;
}