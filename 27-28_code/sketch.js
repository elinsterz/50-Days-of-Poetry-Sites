// Edited from: 

// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/145-2d-ray-casting.html

// 2D Ray Casting
// https://editor.p5js.org/codingtrain/sketches/Nqsq3DFv-

let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;

// function preload() {
//     font = loadFont('style/fonts/apercu_bold.otf');
//   }


function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 3; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }
    walls.push(new Boundary(0, 0, width, 0));
    // walls.push(new Boundary(width, 0, width, height-height/2));
    walls.push(new Boundary(width, height, 0, height));
    // walls.push(new Boundary(0, height-height/2, 0, 0));
    particle = new Particle();
}

function draw() {
    background(0);

    for (let wall of walls) {
        wall.show();
    }

    particle.update(mouseX, mouseY);
    particle.show();
    particle.look(walls);

    xoff += 0.01;
    yoff += 0.01;

    drawText();
}


function drawText() {
    fill(0);
    textAlign(CENTER);
    textSize(132);
    textFont('Helvetica');
    strokeWeight(7);
    stroke(0);

    for (let i = 0; i < 5; i++) {
        let myString = 'The,Truth the,Dead Know';
        let splitString = split(myString, ',');
        text(splitString[i], windowWidth / 2, i * 120 + (windowHeight / 2) - 120);
    }


}



//don't know why this doesn't work

/*
for (let i = 0; i < 5; i++) {
    let myString = 'The,Truth the,Dead Know';
    let splitString = split(myString, ',');
    for (let j = 0; j < 5; j++) {
        text(splitString[i], windowWidth / 2, j * 100 + (windowHeight / 2) - 200);
    }
    */