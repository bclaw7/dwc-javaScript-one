function getMotto() {
    let userPhrase = prompt("Enter a phrase or motto.");
    return userPhrase;
}


function getCount(userMotto) {
    let UserCount = prompt("How many times would you like to see your motto or phrase displayed?: " + userMotto);
    return parseFloat(UserCount);
}

function playAgain() {
    let playAgainString = prompt("Would you like to enter a new phrase or motto?: (y/n)");

    if(playAgainString === "y") {
        playGame();
    } else {
        alert("Thanks for playing!");
    }
}

function printMotto(motto, count) {
    let i = 1;
    while (i <= count) {
        console.log(i + ": " + motto);
        i++;
    }
}

function playGame() {
    let userMotto = getMotto();
    let count = getCount(userMotto);
    printMotto(userMotto, count);
    playAgain();
}

playGame();