let sizes = [];
let cols = 10;
let rows = 10;
let numCircles = cols * rows;

// Stores index for find function
let foundIndex = -1;

function setup() {
    let container = document.getElementById("canvas-container");
    let canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent("canvas-container");
    textAlign(CENTER, CENTER);

    resetData();

    // DOM Listeners
    document.getElementById("btn-find").addEventListener("click", findValue);
    document.getElementById("btn-sort-up").addEventListener("click", sortUp);
    document.getElementById("btn-sort-down").addEventListener("click", sortDown);
    document.getElementById("btn-reset").addEventListener("click", resetData);
}