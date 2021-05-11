function answerScore(qName) {
    var radiosNo = document.getElementsByName(qName);

    for (var i = 0, length = radiosNo.length; i < length; i++) {
        if (radiosNo[i].checked) {
            var answerValue = Number(radiosNo[i].value);
        }
    }
    if (isNaN(answerValue)) { // if they submitted blank value
        answerValue = 0;
    }
    return answerValue;
}

function correctAnswer(correctStringNo, qNumber) {
    return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
        (document.getElementById(correctStringNo).innerHTML) + "</strong>");
}

function submitQuiz() {
    var questionCount = document.getElementsByClassName('question').length;
    document.getElementById("submitButton").classList.add("hide");
    var calcScore = 0;
    for (let i = 1; i <= questionCount; i++) {
        calcScore += answerScore('q' + i); // get total score
        if (answerScore('q' + i) === 0) {  // print correct answers if any were missed
            var div = document.createElement("DIV"); // create div
            div.classList.add("quizAnswers");
            div.setAttribute("id", 'correctAnswer' + i);
            div.innerHTML = correctAnswer('correctString' + i, i);
            document.getElementById("quizAnswerContainer").appendChild(div); 
        }
    }
    var showScore = "Your Score: " + calcScore + "/" + questionCount;
    if (calcScore === questionCount) {
        showScore += "&nbsp; <strong>Perfect Score!</strong>"
    } else if (calcScore === 0) {
        showScore += "&nbsp; <strong>You need to watch more \" Who Wants to be a Millionaire\"!</strong>"
    }
    document.getElementById('userScore').innerHTML = showScore;
}