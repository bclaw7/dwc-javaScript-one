function getMotto() {
    let userPhrase = prompt("Please enter your favorite phrase or motto:");
    return userPhrase;
}

function getCount(userMotto) {
    let userCount = prompt("Please enter the number of times you'd like to see " + userMotto +  " your motto:");
    return parseFloat(userCount);
}

function playAgain() {
    let playAgainString = prompt("Would you like to play again (y/n)?");

    if(playAgainString === "y") {
        playGame();
    } else {
        alert("Thanks for playing!");
    }
}

function printMotto(motto, count) {
    // for (let i = 1; i <= count; i++) {
    //     console.log(i + ". " + motto);
    // }

    let i = 1;
    while (i <= count) {
        console.log(i + ". " + motto);
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