let img;
function preload() {
    img = loadImage('assets/losangeles_hike.jpg');
}



function setup() {
    img.loadPixels();
    //format canvas
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '0');

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
    // frameRate(8);
}

function draw() {
    for (x = 0; x < windowWidth; x = x + 5) {
        for (y = 0; y < img.height; y = y + 5) {
            index = (floor(x) + floor(y) * img.width) * 4;
            red = img.pixels[index]
            blue = img.pixels[index + 1]
            green = img.pixels[index + 2]
            alpha = img.pixels[index + 3]
            pixel_brightness = (red + blue + green) / 3
            strokeWeight(0.5);
            stroke(red, blue, green, alpha / (50 * random()));

            // noStroke();
            // fill(red, blue, green, alpha/ random(0,255));
            // ellipse(x * random()+ mouseX, y + random() + mouseY, 5);
            line(x + random(), y + random(), x + random(-10,10) * random(), y + random(-10,10) * random());

        }
    }
}

/*
let video;
let vScale = 16;

let particles = [];

let slider;


function setup() {
    createCanvas(640, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width / vScale, height / vScale);

    for (let i = 0; i < 100; i++) {
        particles[i] = new Particle(random(width), random(height));
    }

    slider = createSlider(0,255,127);
    background(51);
}

function draw() {
    // background(51);
    video.loadPixels();

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
    }
}
*/