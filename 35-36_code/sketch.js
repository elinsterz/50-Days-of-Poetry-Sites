let x = 0;
let img;

function preload() {
    img = loadImage('assets/sun.svg');
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(50, 160, 255); //HEX #74B4FF
    imageMode(CENTER);

    x += 0.002;
    translate(width/2, height/2);
    rotate(x);
    // rect(0, 0, 100, 100);
    image(img, 0, 0, 960, 960);
}