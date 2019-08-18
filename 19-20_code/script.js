
//https://p5js.org/examples/motion-morph.html

// Two ArrayLists to store the vertices for two shapes
// This example assumes that each shape will have the same
// number of vertices, i.e. the size of each ArrayList will be the same
let circle = [];
let square = [];

// An ArrayList for a third set of vertices, the ones we will be drawing
// in the window
let morph = [];

// This boolean variable will control if we are morphing to a circle or square
let state = false;



function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '0');

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');


    // Create a circle using vectors pointing from center
    for (let angle = 0; angle < 360; angle += 9) {
        // Note we are not starting from 0 in order to match the
        // path of a circle.
        let v = p5.Vector.fromAngle(radians(angle - 25));
        v.mult(500);
        circle.push(v);
        // Let's fill out morph ArrayList with blank PVectors while we are at it
        morph.push(createVector());
    }

    // A square is a bunch of vertices along straight lines
    // Top of square
    for (let x = -50; x < 50; x += 10) {
        square.push(createVector(x, -900));
    }
    // Right side
    for (let y = -50; y < 50; y += 10) {
        square.push(createVector(900, y));
    }
    // Bottom
    for (let x = 50; x > -50; x -= 10) {
        square.push(createVector(x, 900));
    }
    // Left side
    for (let y = 50; y > -50; y -= 10) {
        square.push(createVector(-900, y));
    }
}

function draw() {
    background(0,0);

    // We will keep how far the vertices are from their target
    let totalDistance = 0;

    // Look at each vertex
    for (let i = 0; i < circle.length; i++) {
        let v1;
        // Are we lerping to the circle or square?
        if (state) {
            v1 = circle[i];
        } else {
            v1 = square[i];
        }
        // Get the vertex we will draw
        let v2 = morph[i];
        // Lerp to the target
        v2.lerp(v1, 0.1);
        // Check how far we are from target
        totalDistance += p5.Vector.dist(v1, v2);
    }

    // If all the vertices are close, switch shape
    if (totalDistance < 0.1) {
        state = !state;
    }

    // Draw relative to center
    translate(width / 2, height / 2);
    strokeWeight(0.5);
    // Draw a polygon that makes up all the vertices
    beginShape();
    noFill();
    stroke(255, 20);

    morph.forEach(v => {
        vertex(v.x, v.y);
    });
    endShape(CLOSE);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }