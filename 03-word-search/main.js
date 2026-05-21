function draw() {
    background(255); // White background

    let cellW = width / cols;
    let cellH = height / rows;

    // Loop through the sizes

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            fill(0, 119, 255);
            noStroke();
            let size = sizes[i * j];
            let x = (i * cellW) / 2;
            let y = (j * cellH) / 2;
            circle(i * cellW + cellW / 2, j * cellH + cellW / 2, size);
            if (size > 25) {
                fill(255);
                text(size, x, y);
            }
        }
    }
}

function resetData() {
    //generate sizes
    sizes = [];
    for (let i = 0; i < numCircles; i++) {
        sizes.push(random(10, 100));
    }

    foundIndex = -1;
    calculateStats();
}

function findValue() {
    //get input value
    //search for value

    //if value not found, alert
    if (foundIndex == -1) {
        alert("Value not found!");
    }
}

function sortUp() {
    // sort ascending
    console.log("sorting ascending!");
    sizes.sort(function (sizeA, sizeB) {
        if (sizeA > sizeB) {
            return -1;
        } else {
            return 1;
        }
    });
    console.log("sorted array:");
    console.log(sizes);
}

function sortDown() {
    // sort descending
}

function calculateStats() {
    //use reduce to calculate total
    let total = sizes.reduce(function (sum, size) {
        return sum + size;
    });

    console.log("total:", total);

    //calculate average
    let average = total / sizes.length;
    console.log("average:", average);

    //add both to DOM
    document.querySelector("#total-mass").innerHTML = total;
}
