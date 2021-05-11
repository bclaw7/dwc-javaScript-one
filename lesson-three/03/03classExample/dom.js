let outputDiv = document.querySelector("#output"); // reference ID with #
let fancyDiv = document.querySelector(".fancyDiv"); // reference class with .


outputDiv.innerHTML = 'Login';
outputDiv.style.color = "pink";
outputDiv.style.backgroundColor = "blue";

outputDiv.classList.add("big");
fancyDiv.innerHTML = "THIS IS AWESOME!";
fancyDiv.style.color = "red";