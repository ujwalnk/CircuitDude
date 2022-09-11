var voltageLineHeights = [];
var voltageLineVoltages = [];

var voltageLines = {};

const LINE_GAP = 20;

function addVoltageLines(canvasId, voltage, color) {
    console.log(Math.max(voltageLineHeights));
    console.log(typeof (Math.max(voltageLineHeights) + LINE_GAP));
    voltageLineHeights.push((Math.max(voltageLineHeights) + LINE_GAP));
    console.log(Math.max(voltageLineHeights));
    voltageLineVoltages.push(voltage);

    const canvas = document.getElementById(canvasId);
    const c = canvas.getContext("2d");

    // Draw Voltage Line
    c.beginPath();
    if (!color) { c.strokeStyle = "red"; }
    c.strokeStyle = color;
    c.moveTo(10, Math.max(voltageLineHeights));
    c.lineTo(canvas.width - 10, Math.max(voltageLineHeights));
    c.stroke();

    console.log("Drawing Voltage Line @ " + Math.max(voltageLineHeights));

    // Add Voltage marking on line
    c.beginPath();
    c.rotate(-Math.PI / 4);
    c.font = "15px monospace";
    c.fillText(voltage + "V", 10, Math.max(voltageLineHeights) + 20); // 10 and 20 are tilted axis constants
}

function addVoltageLines(canvasId, voltage, color) {
    if (! (voltage in voltageLines)){
        let max = 0;
        for(let x = 0; x < voltageLines.length; x++){
            if(max < voltageLines[x]){
                max = voltageLines[x];
            }
        }
        const canvas = document.getElementById(canvasId);
        const c = canvas.getContext("2d");
    
        // Draw Voltage Line
        c.beginPath();
        if (!color) { c.strokeStyle = "red"; }
        c.strokeStyle = color;
        c.moveTo(10, max + 20);
        c.lineTo(canvas.width - 10, max + 20);
        c.stroke();

        voltageLines[voltage] = max + 20;
    
        console.log("Drawing Voltage Line @ " + max);
    
        // Add Voltage marking on line
        c.beginPath();
        c.rotate(-Math.PI / 4);
        c.font = "15px monospace";
        c.fillText(voltage + "V", 10, max + 20); // 10 and 20 are tilted axis constants
    
        // let arr = Object.values(voltageLines);
        // console.log(Math.max(arr));
        // console.log(voltage);
        // voltageLines[voltage] = Math.max(arr) + 20;
        // console.log(voltageLines);
    }
}

// srsr mm 
// dsrsddpp  pppmpmp dsdpmdpmrs 
// srsr dpm


// dddpd dmpppdm 
// dddpd
// ddssss sssr rsd
// pppm 

// 12.5 - Online education
// 9.2 c - Early specialization - Make Schematics without actually worrying about the learning curve of softwares like KiCad, keeping ones study and knowledge board
// 23 - Getting students into the digital world, having them work on detail oriented softwares, create fear in the minds of students, introduce them to a small, simple and easy to use cicuit builder rather than softwares like KiCad and Eagle Cad, which restricts the students ability, making them want to break out of the restriction, they develop an interest in professional, industry standard softwares. 
// When taking digital notes, students usually copy the diagram off the textbook, resulting in improper understanding, let them make the circuit virtually, and learn hands on.
// 11 - Multi disciplinary - Intriduce EC and EEE Students to small, UML coding, which builds confidence in them and enriches their liking in computers.


