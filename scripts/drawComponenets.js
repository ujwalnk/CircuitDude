function drawResistor(canvasId, icNumber, pinNumber, supply, resistance) {
    const canvas = document.getElementById(canvasId);
    const c = canvas.getContext("2d");

    // Setting the x coordinate for the current IC
    let thisICXCoordinate = IC_GAP;
    icWidth.forEach(item => {
        thisICXCoordinate += item;
    });
    if (icWidth.length != 0) {
        thisICXCoordinate += icCount * IC_GAP;
    }

    const RESISTOR_WIDTH = 8;

    let x = thisICXCoordinate;
    let y = canvas.height / 2 - 30 / 2 - PIN_HEIGHT;

    c.beginPath();
    c.moveTo(x  + IC_GAP + 1 * PIN_GAP, y);
    c.lineTo(x  + IC_GAP + 1 * PIN_GAP, y + 8);
    c.lineTo(x - RESISTOR_WIDTH + IC_GAP + 1 * PIN_GAP, y + 32 / 3);
    c.lineTo(x + RESISTOR_WIDTH + IC_GAP + 1 * PIN_GAP, y + 40 / 3);
    c.lineTo(x - RESISTOR_WIDTH + IC_GAP + 1 * PIN_GAP, y + 56 / 3);
    c.lineTo(x + RESISTOR_WIDTH + IC_GAP + 1 * PIN_GAP, y + 64 / 3);
    c.lineTo(x - RESISTOR_WIDTH + IC_GAP + 1 * PIN_GAP, y + 80 / 3);
    c.lineTo(x + RESISTOR_WIDTH + IC_GAP + 1 * PIN_GAP, y + 88 / 3);
    c.lineTo(x + IC_GAP + 1 * PIN_GAP, y + 32);
    c.lineTo(x + IC_GAP + 1 * PIN_GAP, y + 40 + PIN_HEIGHT);
    // c.scale(2, 2);
    c.stroke();


    icWidth.push(10 + PIN_BUFFER_WIDTH);
    icPins.push(1);

    // Increase the count of ICs used
    icCount++;
}

function drawCap(canvasId) {
    const canvas = document.getElementById(canvasId);
    const c = canvas.getContext("2d");

    // Setting the x coordinate for the current IC
    let thisICXCoordinate = IC_GAP;
    icWidth.forEach(item => {
        thisICXCoordinate += item;
    });
    if (icWidth.length != 0) {
        thisICXCoordinate += icCount * IC_GAP;
    }

    pinXCoordinate = 40;
    pinYCoordinate = 40;

    let x = pinXCoordinate;
    let y = pinYCoordinate;

    c.beginPath();
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 - PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP - PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP - PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 + 50 / 3 + PIN_HEIGHT);
    // c.scale(2, 2);
    c.stroke();

    icWidth.push(10 + PIN_BUFFER_WIDTH);
    icPins.push(1);

    // Increase the count of ICs used
    icCount++;
}

function drawDiode(canvasId) {
    const canvas = document.getElementById(canvasId);
    const c = canvas.getContext("2d");

    // Setting the x coordinate for the current IC
    let thisICXCoordinate = IC_GAP;
    icWidth.forEach(item => {
        thisICXCoordinate += item;
    });
    if (icWidth.length != 0) {
        thisICXCoordinate += icCount * IC_GAP;
    }

    c.beginPath();
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 - PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP - PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP - PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP - PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 + 50 / 3 + PIN_HEIGHT);
    // c.scale(2, 2);
    c.stroke();

    icWidth.push(10 + PIN_BUFFER_WIDTH);
    icPins.push(1);

    // Increase the count of ICs used
    icCount++;
}

function drawLED(canvasId, color) {
    const canvas = document.getElementById(canvasId);
    const c = canvas.getContext("2d");

    // Setting the x coordinate for the current IC
    let thisICXCoordinate = IC_GAP;
    icWidth.forEach(item => {
        thisICXCoordinate += item;
    });
    if (icWidth.length != 0) {
        thisICXCoordinate += icCount * IC_GAP;
    }

    c.beginPath();
    c.strokeStyle = color;
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 - PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP - PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP - PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP - PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + PIN_GAP, canvas.height / 2 - 50 / 3 + PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 + 50 / 3 - PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 + 50 / 3 + PIN_HEIGHT);
    c.fill();
    // c.scale(4,4);
    // // Arrow
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + PIN_GAP, canvas.height / 2 - 30 / 2 - PIN_HEIGHT + 25);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + PIN_GAP * 1.5, canvas.height / 2 - 30 / 2 - PIN_HEIGHT + 30);
    c.stroke();

    icWidth.push(10 + PIN_BUFFER_WIDTH);
    icPins.push(1);

    // Increase the count of ICs used
    icCount++;
}

function drawInductor(canvasId) {
    const canvas = document.getElementById(canvasId);
    const c = canvas.getContext("2d");

    // Setting the x coordinate for the current IC
    let thisICXCoordinate = IC_GAP;
    icWidth.forEach(item => {
        thisICXCoordinate += item;
    });
    if (icWidth.length != 0) {
        thisICXCoordinate += icCount * IC_GAP;
    }

    c.beginPath();
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 - PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2);
    // c.arc(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 - PIN_HEIGHT, 5, 0, 2 * Math.PI);
    // c.arc(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 - PIN_HEIGHT, 5 + 2, 0, Math.PI);
    // c.arc(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 + PIN_HEIGHT, 50/12, Math.PI / 2, -Math.PI / 2);
    c.arc(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + 0, canvas.height / 2 - 30 / 2 + 5, 5, - Math.PI / 2, Math.PI / 2);
    c.arc(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + 0, canvas.height / 2 - 30 / 2 + 15, 5, - Math.PI / 2, Math.PI / 2);
    c.arc(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + 0, canvas.height / 2 - 30 / 2 + 25, 5, - Math.PI / 2, Math.PI / 2);
    // for(let x = 0; x < 10; x+= 5){
    //     c.arc(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 - PIN_HEIGHT + x, 3, Math.PI / 2, -Math.PI / 2);
    // }
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 30);

    c.stroke();
    icWidth.push(10 + PIN_BUFFER_WIDTH);
    icPins.push(1);

    // Increase the count of ICs used
    icCount++;

}

function drawNPN(canvasId) {
    const canvas = document.getElementById(canvasId);
    const c = canvas.getContext("2d");

    // Setting the x coordinate for the current IC
    let thisICXCoordinate = IC_GAP;
    icWidth.forEach(item => {
        thisICXCoordinate += item;
    });
    if (icWidth.length != 0) {
        thisICXCoordinate += icCount * IC_GAP;
    }

    c.beginPath();
    // Emitter Pin
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 - PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 5);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + 3, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 10 + 3);
    // Common Line
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 10 + 3);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + 10, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 10 + 3);
    // Collector Line
    c.moveTo(thisICXCoordinate + IC_GAP + 2 * PIN_GAP, canvas.height / 2 - 30 / 2 - PIN_HEIGHT);
    c.lineTo(thisICXCoordinate + IC_GAP + 2 * PIN_GAP, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 5);
    c.lineTo(thisICXCoordinate + IC_GAP + 2 * PIN_GAP - 3, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 10 + 3);
    // Base Line
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + 5, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 10 + 3);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + 5, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 10 * 2 + 3 + 5);
    c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 10 * 2 + 3 + 5);
    c.lineTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + 10, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 10 * 2 + 3 + 5);
    c.stroke();
    // Circle
    c.beginPath();
    // c.moveTo(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + 5, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 5 + 5);
    c.arc(thisICXCoordinate + IC_GAP + 1 * PIN_GAP + 5, canvas.height / 2 - 30 / 2 + PIN_HEIGHT + 5 + 5, 6, 0, 2 * Math.PI);


    c.stroke();
    icWidth.push(10 + PIN_BUFFER_WIDTH);
    icPins.push(1);

    // Increase the count of ICs used
    icCount++;
}