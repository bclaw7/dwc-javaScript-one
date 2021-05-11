function submitData() {
    // retrieve data
    let balance = parseFloat(investmentForm.balance.value);
    let annualRate = parseFloat(investmentForm.rate.value);
    let months = parseFloat(investmentForm.months.value);

    if((!balance || balance < 0) || (!annualRate || annualRate < 0) || (!months || months < 0)) { // error validation
        updateDOM("Please include valid values for these three fields.", "red");
        return;
    }

    let futureVal = computeFutureValue(balance, annualRate, months)
    updateDOM("The future value of your investment is $" + futureVal + ".", "green");
}

function computeFutureValue(balance, annualRate, months) {
    let monthlyRate = annualRate / 12;

    for (let month = 1; month <= months; month++) {
        let interest = balance * monthlyRate;

        interest = Math.round(interest * 100) / 100; // round to pennies

        balance += interest;
    }
    balance = parseFloat(balance.toFixed(2)); // round it and turn it back into a number
    balance = balance.toLocaleString(); // add comma separators
    return balance;
}

function updateDOM(value, color) {
    document.getElementById("output").innerHTML = value;
    document.getElementById("output").style.color = color;
}