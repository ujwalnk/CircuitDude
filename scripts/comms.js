function cls() {
    console.log("Clearing");

    let canvas = document.getElementById("canvas");
    const c = canvas.getContext("2d");

    c.clearRect(0, 0, canvas.width, canvas.height);

    // Variables to clear
    wireHeights = [];


    icCount = 0;
    icWidth = [];

    icPins = [];
}