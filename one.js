/*
function name() {
    let name = prompt("How do you spell your name?", "Yoko Ono");
    alert("Thank you " + name + ".");
}
*/

/*
prompt("How do you spell your name?", "Yoko Ono");
alert("create don't hate.");
*/

/*
var person = prompt("How do you spell your name?", "Yoko Ono");

if (person != null) {
    alert("Thank you " + person + ". Create don't hate.");
}
*/

let username = prompt("How do you spell your name?");

alert(username + ", Create don't hate");

let birthYear = prompt("What year was " + username + " born?");

birthYear = parseInt(birthYear);

let age = 2021 - birthYear;

alert(username + " is " + age + " years old.");


