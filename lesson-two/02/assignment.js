function getMotto() {
    return prompt("Please enter your favorite motto: ");
}

function getCount() {
    return parseFloat(prompt("How many times do you want to see your motto? "));
}

function printMotto(motto, count) {
    for (let i = 1; i <= count; i++) {
        console.log(i + ". " + motto);
    }
}

printMotto(getMotto(), getCount());