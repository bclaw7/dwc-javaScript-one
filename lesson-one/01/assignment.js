let username = prompt("What is your name?");

alert("Hi " + username + "! Remember that every day is a good day!");

let birthYear = prompt("What year was " + username + " born");

birthYear = parseFloat(birthYear);

let age = 2021 - birthYear;

alert(username + " is " + age + " years old");