let alarmList = [];
let alarmIncrement = 1; // in minutes. used for dropdown and for loop to check for alarms

function timeLoop() {
    setInterval(function(){ 
        var t = new Date();
        document.getElementById('time').innerHTML = t;  
    }, 1000);
}

//Dynamic Content
function loadDynamicContent() {
    var image = new Image(); // image
    image.src = wakeUpImage;
    var h1Tag = document.querySelector("h1");
    h1Tag.parentNode.insertBefore(image, h1Tag.nextSibling);
    document.body.style.backgroundColor = backgroundColor; // background color
}

function loadAlarmDropdowns() {
    var formDropdown = document.getElementById("timeDropdown");
    var tt = 0, ap = ['AM', 'PM']; 
    for (var i=0;tt<24*60; i++) {
        var hh = Math.floor(tt/60);
        var mm = (tt%60);
        var newTime = ("" + ((hh==12)?12:hh%12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)];
        var option = document.createElement("option");
        option.text = newTime;
        formDropdown.add(option)
        tt += alarmIncrement;
    }
}

function listenForAlarms() {
    setInterval(function() {
        var d = new Date();
        if ( d.getSeconds() === 0 && d.getMinutes() % alarmIncrement === 0 ) checkForAlarm();
    },1000);
}

function checkForAlarm() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    var pmBool = false;
    if(h > 12) {
        pmBool = true;
        h -= 12;
    }
    var timeString = h + ":" + m;
    if(pmBool) {
        timeString += "PM";
    } else {
        timeString += "AM";
    }
    const found = alarmList.some(el => el.time === timeString);
    if (found) {
        document.getElementById('soundAlarmHack').click();
    }
}

function toggleAlarm() {
    document.getElementById('alarm').play();
    var audio = document.getElementById('alarm');
    audio.muted = audio.muted == true ? false : true;
    var div = document.getElementById('alarmSounding');
    div.style.display = div.style.display == "none" ? "block" : "none";
}

window.onload = function() { 
    timeLoop();
    loadDynamicContent();
    loadAlarmDropdowns();
    listenForAlarms();
}

function createAlarm() {
    let newAlarm = {
        title: alarmForm.alarmTitle.value,
        time: alarmForm.alarmTime.value
    }
    newAlarm.displayString = newAlarm.title + ": " + newAlarm.time;

    const found = alarmList.some(el => el.title === newAlarm.title);
    if(newAlarm.title === "" || found) {
        var errorElement = document.createElement('p');
		errorElement.className = 'error';
		errorElement.appendChild(document.createTextNode("Please enter a unique title for your alarm."));
		document.getElementById("submitForm").parentNode.appendChild(errorElement);
    } else {
        alarmList.push(newAlarm);
        var li = document.createElement("LI");
        var textnode = document.createTextNode(newAlarm.displayString);
        li.appendChild(textnode);
        document.getElementById("setAlarms").appendChild(li);
    }
}