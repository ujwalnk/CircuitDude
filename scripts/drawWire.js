const WIRE_GAP = 10;
const JOINT_RADIUS = 1.5;
const SUPPLY_HEIGHT = 170;
const GND_COMMS_LEN = 10;

// Store all wire height
var wireHeights = [];


function drawWire(canvasId, icNumberA, pinNumberA, icNumberB, pinNumberB, height, color) {
    console.log(canvasId, icNumberA, pinNumberA, icNumberB, pinNumberB, height, color);
    
    // Check for invalid ICs
    if (icCount < icNumberA || icCount < icNumberB) {
        console.log("Return 1");
        return;
    }

    // Check for invalid Pins
    if (icPins[icNumberA] * 2 < pinNumberA || icPins[icNumberA] * 2 < pinNumberA) {
        console.log("Return 2");
        return;
    }

    const c = canvas.getContext("2d");


    // Generate Random wire height and color
    if (!height) {
        height = Math.random() * (100 - 40) + 40;
        // height = Math.max(wireHeights) + WIRE_GAP;
        // wireHeights.push(Number(Number(Math.max(wireHeights)) + Number(WIRE_GAP)));
        // wireHeights.push(wireHeights[wireHeights.length - 1] + WIRE_GAP);
    }
    if (!color) {
        color = generateDarkColorHsl();
    }

    pinAXCoordinate = IC_GAP + IC_GAP + pinNumberA * PIN_GAP + PIN_BUFFER_WIDTH;
    pinBXCoordinate = IC_GAP + IC_GAP + pinNumberB * PIN_GAP + PIN_BUFFER_WIDTH;

    var yCoordinates = []; // Store the y Coordinates of the wires

    if (pinNumberA < icPins[icNumberA]) {
        console.log("Drawing from A");
        for (let x = 0; x < icNumberA; x++) {
            pinAXCoordinate += icWidth[x] + IC_GAP;
        }

        // Draw Straight line from pinA to height
        c.beginPath();
        c.strokeStyle = color;
        c.moveTo(pinAXCoordinate, canvas.height / 2 + 30 / 2 + PIN_HEIGHT - 5);
        c.lineTo(pinAXCoordinate, canvas.height / 2 + 30 / 2 + PIN_HEIGHT + height);
        c.arc(pinAXCoordinate, canvas.height / 2 + 30 / 2 + PIN_HEIGHT + height, JOINT_RADIUS, 0, 2 * Math.PI);
        c.stroke();

        yCoordinates[0] = -1;

    } else {
        pinNumberA -= icPins[icNumberA];
        console.log("Drawing from A up");
        pinAXCoordinate = IC_GAP + IC_GAP + pinNumberA * PIN_GAP + PIN_BUFFER_WIDTH;
        for (let x = 0; x < icNumberA; x++) {
            pinAXCoordinate += icWidth[x] + IC_GAP;
        }

        // DRAW: Straight line from the pinA to a height
        c.beginPath();
        c.strokeStyle = color;
        c.moveTo(pinAXCoordinate, canvas.height / 2 - 30 / 2 - PIN_HEIGHT + 5);
        c.lineTo(pinAXCoordinate, canvas.height / 2 - 30 / 2 - PIN_HEIGHT - height);
        c.arc(pinAXCoordinate, canvas.height / 2 - 30 / 2 - PIN_HEIGHT - height, JOINT_RADIUS, 0, 2 * Math.PI);
        c.stroke();
        yCoordinates[0] = 1;
    }

    console.log(icNumberB);
    console.log(icPins[icNumberB]);
    console.log(icPins);
    if (pinNumberB < icPins[icNumberB]) {
        console.log("Drawing from B");
        for (let x = 0; x < icNumberB; x++) {
            pinBXCoordinate += icWidth[x] + IC_GAP;
        }

        // DRAW: Straight line from the pinB to a height
        c.beginPath();
        c.strokeStyle = color;
        c.moveTo(pinBXCoordinate, canvas.height / 2 + 30 / 2 + PIN_HEIGHT - 5);
        c.lineTo(pinBXCoordinate, canvas.height / 2 + 30 / 2 + PIN_HEIGHT + height);
        c.arc(pinBXCoordinate, canvas.height / 2 + 30 / 2 + PIN_HEIGHT + height, JOINT_RADIUS, 0, 2 * Math.PI);
        c.stroke();

        yCoordinates[1] = -1;

    } else {
        console.log("Drawing from B up");
        pinNumberB -= icPins[icNumberB];
        pinBXCoordinate = IC_GAP + IC_GAP + pinNumberB * PIN_GAP + PIN_BUFFER_WIDTH;
        for (let x = 0; x < icNumberB; x++) {
            pinBXCoordinate += icWidth[x] + IC_GAP;
        }

        // DRAW: Straight line from the pinB to a height
        c.beginPath();
        c.strokeStyle = color;
        c.moveTo(pinBXCoordinate, canvas.height / 2 - 30 / 2 - PIN_HEIGHT + 5);
        c.lineTo(pinBXCoordinate, canvas.height / 2 - 30 / 2 - PIN_HEIGHT - height);
        c.arc(pinBXCoordinate, canvas.height / 2 - 30 / 2 - PIN_HEIGHT - height, JOINT_RADIUS, 0, 2 * Math.PI);
        c.stroke();

        yCoordinates[1] = 1;
    }

    // Connect the two wires & add joint
    c.beginPath();
    c.fillStyle = color;

    // Condition to ensure joining straight line is from the 1st IC
    if (yCoordinates[0] == -1) {
        c.moveTo(pinAXCoordinate, canvas.height / 2 + 30 / 2 + PIN_HEIGHT + height);
        c.lineTo(pinBXCoordinate, canvas.height / 2 + 30 / 2 + PIN_HEIGHT + height);
    } else {
        c.moveTo(pinAXCoordinate, canvas.height / 2 - 30 / 2 - PIN_HEIGHT - height);
        c.lineTo(pinBXCoordinate, canvas.height / 2 - 30 / 2 - PIN_HEIGHT - height);

    }
    c.fill();
    c.stroke();
    // If y coordinates are not matching, draw an arc to connect them
    if (yCoordinates[1] != yCoordinates[0]) {
        c.beginPath();
        c.strokeStyle = color;
        c.arc(pinBXCoordinate, canvas.height / 2, height + IC_HEIGHT / 2 + 10, -Math.PI / 2, Math.PI / 2);
        c.stroke();
    }
}

function supplyWire(canvasId, icNumber, icPin, supply) {
    const canvas = document.getElementById(canvasId);
    const c = canvas.getContext("2d");

    pinXCoordinate = IC_GAP + IC_GAP + icPin * PIN_GAP + PIN_BUFFER_WIDTH;
    pinYCoordinate = 0;
    c.beginPath();
    if (supply <= 0) {
        c.strokeStyle = "black";
    } else {
        c.strokeStyle = "red";
    }
    if (icPin < icPins[icNumber]) {
        for (let x = 0; x < icNumber; x++) {
            pinXCoordinate += icWidth[x] + IC_GAP;
        }
        c.moveTo(pinXCoordinate, canvas.height / 2 + IC_HEIGHT / 2);
        c.lineTo(pinXCoordinate, canvas.height / 2 + SUPPLY_HEIGHT);
        pinYCoordinate = canvas.height / 2 + SUPPLY_HEIGHT;
    } else {
        icPin -= icPins[icNumber];
        pinXCoordinate = IC_GAP + IC_GAP + icPin * PIN_GAP + PIN_BUFFER_WIDTH;
        for (let x = 0; x < icNumber; x++) {
            pinXCoordinate += icWidth[x] + IC_GAP;
        }
        c.moveTo(pinXCoordinate, canvas.height / 2 - IC_HEIGHT);
        c.lineTo(pinXCoordinate, canvas.height / 2 - SUPPLY_HEIGHT);
        pinYCoordinate = canvas.height / 2 - SUPPLY_HEIGHT;
    }
    c.stroke();
    if (supply <= 0) {
        drawGND(canvas, pinXCoordinate, pinYCoordinate);
    } else {
        drawVCC(canvas, pinXCoordinate, pinYCoordinate, supply);
    }
}

function drawGND(canvas, pinXCoordinate, pinYCoordinate) {
    const c = canvas.getContext("2d");

    c.beginPath();
    c.strokeStyle = "black";
    if (pinYCoordinate < canvas.height / 2) {
        c.moveTo(pinXCoordinate - GND_COMMS_LEN, pinYCoordinate);
        c.lineTo(pinXCoordinate + GND_COMMS_LEN, pinYCoordinate);

        c.moveTo(pinXCoordinate - GND_COMMS_LEN * (2 / 3), pinYCoordinate - 5);
        c.lineTo(pinXCoordinate + GND_COMMS_LEN * (2 / 3), pinYCoordinate - 5);

        c.moveTo(pinXCoordinate - GND_COMMS_LEN * (1 / 3), pinYCoordinate - 10);
        c.lineTo(pinXCoordinate + GND_COMMS_LEN * (1 / 3), pinYCoordinate - 10);
    } else {
        c.moveTo(pinXCoordinate - GND_COMMS_LEN, pinYCoordinate);
        c.lineTo(pinXCoordinate + GND_COMMS_LEN, pinYCoordinate);

        c.moveTo(pinXCoordinate - GND_COMMS_LEN * (2 / 3), pinYCoordinate + 5);
        c.lineTo(pinXCoordinate + GND_COMMS_LEN * (2 / 3), pinYCoordinate + 5);

        c.moveTo(pinXCoordinate - GND_COMMS_LEN * (1 / 3), pinYCoordinate + 10);
        c.lineTo(pinXCoordinate + GND_COMMS_LEN * (1 / 3), pinYCoordinate + 10);
    }
    c.stroke();
}

function drawVCC(canvas, pinXCoordinate, pinYCoordinate, supply) {
    const c = canvas.getContext("2d");

    c.beginPath();
    c.strokeStyle = "red";
    c.moveTo(pinXCoordinate - GND_COMMS_LEN, pinYCoordinate);
    c.lineTo(pinXCoordinate + GND_COMMS_LEN, pinYCoordinate);
    c.font = "15px monospace";
    c.fillStyle = "red";
    c.align = "center";
    if (pinYCoordinate < canvas.height / 2) {
        c.fillText(supply + "V",pinXCoordinate, pinYCoordinate - 5);
    } else {
        c.fillText(supply + "V", pinXCoordinate,  pinYCoordinate + 15);
    }
    c.stroke();
}
