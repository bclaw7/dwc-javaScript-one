function submitData() {
    // retrieve form data
    let balance = parseFloat(investmentForm.balance.value);
    let rate = parseFloat(investmentForm.rate.value);
    let months = parseFloat(investmentForm.months.value);

    // check for validation errors (each input should be a number >= 0)
    if((!balance || balance < 0) || (!rate || rate < 0) || (!months || months < 0)){  // balance has an error
        updateDOM("Please include valid values for these three fields.", "red");
        return;
    }

    let futureValue = computeFutureValue(balance, rate, months);
    updateDOM("The future value of your investment is $" + futureValue, "green");
}

function updateDOM(value, color) {
    document.getElementById("output").innerHTML = value;
    document.getElementById("output").style.color = color;
}

function computeFutureValue(balance, rate, months) {
    let monthlyRate = rate / 12;

    for (let month = 1; month <= months; month++) {
        let interest = balance * monthlyRate;
        interest = Math.round(interest * 100) / 100;
        balance += interest;
    }
    balance = parseFloat(balance.toFixed(2));
    return balance.toLocaleString();
}