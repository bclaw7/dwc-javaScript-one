/* 
let student1 = "Byron";
let student2 = "Fouzi";
let student3 = "Nancy";

let students = ["Byron", "Fouzi", "Nancy"];

let student1Age = 25;
let student2Age = 26;
let student3Age = 30;

let studentAges = [25, 26, 30];

let student = {
    name: "Byron",
    age: 25,
    eyeColor: "blue",
}

student1 = {
    name: "Fouzi",
    age: 26,
    eyeColor: "brown",
}

let iAmHappy = true;

students = [student, student1];
alert(students[0].name);

function computeCircleArea(radius) {
    return Math.PI * radius * radius;
}

let area = computeCircleArea(20);
alert("The area is:" + area);
*/

/*
var i = 1;
while (i <= 100) {
    console.log("The number is " + i);
    i++;
}
*/

// for(var i=1; i<=100; i++) {
//     console.log("We will stop counting at 100. Current number is: " + i);
// }

// for (let z = 2; ) 

// let names = ["Olivia", "Emma", "Amelia"];
// names.length
// let count = 0;
// while(count < names.length) {
//     console.log()
// }

// for (let i in names) {
//     console.log( + names[i]);
// }
/*
function getDepth() {
    return parseFloat(prompt("please enter the depth of your home"));
}

function getWidth() {
    return parseFloat(prompt("please enter the width of your home"));
}

function getHeight() {
    return parseFloat(prompt("please enter the height of your home"));
}

function getSweep() {
    return parseFloat(prompt("please enter the sweep of your home"));
}

function houseVolume(width, depth, height, sweep) {
    return livingVolume(width, depth, height) + roofVolume(width, depth, height, sweep);
}
*/

function getMotto() {
    let motto = prompt("Enter a phrase or motto.");
    return motto;
}
getMotto();

function getCount(userMotto) {
    let Usercount = prompt("How many times would you like " + userMotto + " displayed?");
    return parseFloat(count * motto);
}
getCount();

let userMotto = getMotto();
let count = getCount(userMotto);



function printMotto(motto, count) {
    /*for (let i=1; i<= count; i++); {
        console.log(i + ". " + motto);
    }*/
    let i=1;
    let message = 
    while (i <= count) {
        document.getElementById("output")(i + ". " + motto)
    }
}
printMotto(userMotto);
playAgain();


function playAgain() {
    let playAgainString = prompt("Would you like to play again?");
    if(playAgainString === "y");
    else {
        alert("Thanks for playing!");
    }
}
/*
function playGame() {
    let userMotto = 
}
*/
/*
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
*/