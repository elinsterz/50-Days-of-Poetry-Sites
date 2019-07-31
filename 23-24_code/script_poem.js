/* Edited from p5js:https://p5js.org/examples/color-linear-gradient.html
 * @name Linear Gradient
 * @description The lerpColor() function is useful for interpolating between 
 * two colors.
 */

// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2;

function setup() {
    //format canvas
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '0');

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');

    // Define colors
    c1 = color(17,25,96,90);
    c2 = color(63, 78, 35,90);

    // frameRate(24);
    // noLoop();
}

function draw() {
    // Background
    setGradient(0, 0, width, height, c1, c2, Y_AXIS);

    //draw sparkles
    let sparkle = {
        locationX: random(width),
        locationY: random(height),
        size: random(1, 8)
    }

    fill(255);
    noStroke();
    ellipse(mouseX, mouseY, sparkle.size, sparkle.size);
    ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);
}


function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();

    if (axis == Y_AXIS) {  // Top to bottom gradient
        for (var i = y; i <= y + h; i++) {
            var inter = map(i, y, y + h, 0, 1);
            var c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    }
    else if (axis == X_AXIS) {  // Left to right gradient
        for (var i = x; i <= x + w; i++) {
            var inter = map(i, x, x + w, 0, 1);
            var c = lerpColor(c1, c2, inter);
            stroke(c);
            line(i, y, i, y + h);
        }
    }
}


/*


// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2;
// let bkg_g = (76,83,52);

function setup(){
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '0');

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');


    c1 = color(17,25,96);
    c2 = color(84, 53, 31);

    noLoop();
}

function draw(){
    setGradient(0, 0, width, height, c1, c2 Y_AXIS);
    // background(0,10);

    let sparkle = {
        locationX: random(width),
        locationY: random(height),
        size: random(1, 5)
    }

    fill(255, 25);
    noStroke();
    ellipse(mouseX, mouseY, sparkle.size, sparkle.size);
    ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);
}


function setGradient(x, y, w, h, c1, c2, axis) {

    noFill();

    if (axis == Y_AXIS) {  // Top to bottom gradient
      for (var i = y; i <= y+h; i++) {
        var inter = map(i, y, y+h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x+w, i);
      }
    }
    else if (axis == X_AXIS) {  // Left to right gradient
      for (var i = x; i <= x+w; i++) {
        var inter = map(i, x, x+w, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y+h);
      }
    }
  }
  */