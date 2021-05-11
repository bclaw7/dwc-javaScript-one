function testFunction() {
    let d = new Date();
    let time = d.getTime();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    if (minutes <10) {
        minutes = "0" + minutes;
        if (hours > 12) {
            hours -=12;

        }
    }
    document.getElementById("output").innerHTML = time;
}
function displayTime() {
    let d = new Date();
    let time = d.getTime();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    if (minutes <10) {
        minutes = "0" + minutes;
        if (hours > 12) {
            hours -=12;

        }
    }
    document.getElementById("output").innerHTML = hours; minutes;
}