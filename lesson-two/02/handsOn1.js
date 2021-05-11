// string
let name = "Nathan Birch";

// number
let favoriteNumber = 5;

// object
let person = {
    name: "Nathan",
    favoriteNumber: 56,
    eyeColor: "blue",
    house: {
        address: "567 N Main",
        color: "blue",
        zip: 57575815
    },
    randomNumbers: [1,2,3,4,5]
}

let birthday = new Date();

// array
let heights = [60, 50, 48, 31, 75];
let names = ["fred", "sam", "jane"];

// function
function computeCircumference(r) {
    return Math.PI * r * r;
}

console.log(typeof(name));
console.log(typeof(favoriteNumber));
console.log(typeof(person));
console.log(typeof(heights));
console.log(typeof(computeCircumference(5)));
console.log(typeof(birthday));

let hello = "55";
console.log(hello);