function displayTime() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours > 12) {
        hours -= 12;
        minutes += " pm";
    } else {
        minutes += " am";
    }
    document.getElementById("output").innerHTML = hours + ":" + minutes;
}