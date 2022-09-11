var icCount = 0;
// Store the width of each IC
var icWidth = [];

// Store the number of pins of each IC
var icPins = [];

const IC_GAP = 20;
const PIN_GAP = 10;
const PIN_BUFFER_WIDTH = 10;
const PIN_HEIGHT = 10;
const NOTCH_RADIUS = 7;
const IC_HEIGHT = 30;

function drawIC(pinCount, canvasId, icText, color) {
    const canvas = document.getElementById(canvasId);
    const c = canvas.getContext("2d");

    c.strokeStyle = color;

    // Setting the x coordinate for the current IC
    let thisICXCoordinate = IC_GAP;
    icWidth.forEach(item => {
        thisICXCoordinate += item;
    });
    if (icWidth.length != 0) {
        thisICXCoordinate += icCount * IC_GAP;
    }


    // Drawing: PINS
    let pin = 0; // Pin to be drawn

    for (let x = 0; x < pinCount; x++) {
        c.beginPath();
        c.strokeStyle = "black";
        c.moveTo(thisICXCoordinate + IC_GAP + pin * PIN_GAP + PIN_BUFFER_WIDTH, canvas.height / 2 - 30 / 2 - PIN_HEIGHT);
        c.lineTo(thisICXCoordinate + IC_GAP + pin * PIN_GAP + PIN_BUFFER_WIDTH, canvas.height / 2 + 30 / 2 + PIN_HEIGHT);
        c.stroke();
        pin++;
    }

    // Drawing: IC Structure
    c.beginPath();
    c.fillStyle = "black";
    c.strokeStyle = "black";
    try {
        c.roundRect(thisICXCoordinate + IC_GAP, (canvas.height / 2 - 30 / 2), 10 * pinCount + PIN_BUFFER_WIDTH, IC_HEIGHT, 2);
    } catch (err) {
        c.rect(thisICXCoordinate + IC_GAP, (canvas.height / 2 - 30 / 2), 10 * pinCount + PIN_BUFFER_WIDTH, IC_HEIGHT, 2);

    }
    c.fill();
    c.stroke();
    // icWidth.push(10 * pinCount + PIN_BUFFER_WIDTH);

    // Drawing: IC Notch
    c.beginPath();
    c.fillStyle = "#3F3F4E";
    c.strokeStyle = "#3F3F4E";
    c.arc(thisICXCoordinate + IC_GAP, canvas.height / 2, NOTCH_RADIUS, -Math.PI / 2, Math.PI / 2);
    c.fill();
    c.stroke();

    // Drawing: Pin 1 DOT
    c.beginPath();
    c.fillStyle = "grey";
    c.arc(thisICXCoordinate + PIN_BUFFER_WIDTH + IC_GAP, canvas.height / 2 + 8, 2, 0, Math.PI * 2);
    c.fill();
    c.stroke();

    // TEXT: IC Details
    if (icText) {
        c.beginPath();
        c.font = "10px monospace";
        c.textAlign = "center";
        c.fillText(icText, thisICXCoordinate + IC_GAP + 5 + (10 * pinCount + PIN_BUFFER_WIDTH) / 2, canvas.height / 2 + 3);
    }

    // icWidth.push(15 * pinCount);
    icWidth.push(10 * pinCount + PIN_BUFFER_WIDTH);
    icPins.push(pinCount);

    // Increase the count of ICs used
    icCount++;
}



function generateDarkColorHsl() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * (100 + 1)) + "%";
    const lightness = Math.floor(Math.random() * (100 / 2 + 1)) + "%";
    return "hsl(" + hue + ", " + saturation + ", " + lightness + ")";
}