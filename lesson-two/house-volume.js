function getDepth() {
    return parseFloat(prompt("please enter the depth of your home"));
}

function getWidth() {
    return parseFloat(prompt("please enter the width of your home"));
}

function getHeight() {
    return parseFloat(prompt("please enter the height of your home"));
}

function getSweep() {
    return parseFloat(prompt("please enter the sweep of your home"));
}

function houseVolume(width, depth, height, sweep) {
    return livingVolume(width, depth, height) + roofVolume(width, depth, height, sweep);
}

