/*
Credit: Original example by Ira Greenberg. 
https://p5js.org/examples/simulate-soft-body.html

Edited by: Emily Lin
*/

// center point
let centerX = 0.0, centerY = 0.0;

let radius = 400, rotAngle = -90;
let accelX = 0.0, accelY = 0.0;
let deltaX = 0.0, deltaY = 0.0;
let springing = 0.0005, damping = 0.98;

//corner nodes
let nodes = 90;

//zero fill arrays
let nodeStartX = [];
let nodeStartY = [];
let nodeX = [];
let nodeY = [];
let angle = [];
let frequency = [];

// soft-body dynamics
let organicConstant = 10.0;

function setup() {

    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');

    //center shape in window
    centerX = width / 2;
    centerY = height / 2;

    //initialize arrays to 0
    for (let i = 0; i < nodes; i++) {
        nodeStartX[i] = 0;
        nodeStartY[i] = 0;
        nodeY[i] = 0;
        nodeY[i] = 0;
        angle[i] = 0;
    }

    // iniitalize frequencies for corner nodes
    for (let i = 0; i < nodes; i++) {
        frequency[i] = random(2, 6);
    }

    noStroke();
    frameRate(30);
}

function draw() {
    //fade background
    fill(216,225,222, 100);
    rect(0, 0, width, height);
    drawShape();
    moveShape();
}

function drawShape() {
    //  calculate node  starting locations
    for (let i = 0; i < nodes; i++) {
        nodeStartX[i] = centerX + cos(radians(rotAngle)) * radius;
        nodeStartY[i] = centerY + sin(radians(rotAngle)) * radius;
        rotAngle += 360.0 / nodes;
    }

    // draw polygon
    curveTightness(organicConstant);
    fill(255);
    beginShape();
    for (let i = 0; i < nodes; i++) {
        curveVertex(nodeX[i], nodeY[i]);
    }
    for (let i = 0; i < nodes - 1; i++) {
        curveVertex(nodeX[i], nodeY[i]);
    }
    endShape(CLOSE);
}

function moveShape() {
    //move center point
    deltaX = mouseX - centerX;
    deltaY = mouseY - centerY;

    // create springing effect
    deltaX *= springing;
    deltaY *= springing;
    accelX += deltaX;
    accelY += deltaY;

    // move predator's center
    centerX += accelX;
    centerY += accelY;

    // slow down springing
    accelX *= damping;
    accelY *= damping;

    // change curve tightness
    organicConstant = 1 - ((abs(accelX) + abs(accelY)) * 0.1);

    //move nodes
    for (let i = 0; i < nodes; i++) {
        nodeX[i] = nodeStartX[i] + sin(radians(angle[i])) * (accelX * 1);
        nodeY[i] = nodeStartY[i] + sin(radians(angle[i])) * (accelY * 1);
        angle[i] += frequency[i];
    }
}
