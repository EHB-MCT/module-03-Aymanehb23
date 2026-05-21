let container = document.querySelector("#canvas-container");

let buildings = [];
let numBuildings = 10;
let buildingWidth;
let groundLevel;
let startX;

function setup() {
    let canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent(container);

    // Calculate layout
    buildingWidth = (width * 0.8) / numBuildings;
    startX = width * 0.1;
    groundLevel = height * 0.8;

    // Initialize data
    resetData();

    // 2. Add Event Listeners
    // Select the buttons and add 'click' listeners to call the functions below
    document.querySelector("#btn-grow").addEventListener("click", growCity);
    document.querySelector("#btn-shrink").addEventListener("click", shrinkCity);
    document.querySelector("#btn-reset").addEventListener("click", resetData);
}

function draw() {
    background(255);

    // Draw ground line
    stroke(0);
    //draw line
    line(startX, groundLevel, width * 0.8, groundLevel);
    // stroke("white");
    noStroke();

    // 3. Visualize the Loop
    // Use forEach to loop through the buildings array

    buildings.forEach(function (building, index) {
        fill(10, 20 + building, 150);
        rect(
            startX + index * buildingWidth,
            groundLevel,
            buildingWidth - 1,
            -building,
        ); // als bij buildingWidth -2 dan spatie tussen balken
    });
}