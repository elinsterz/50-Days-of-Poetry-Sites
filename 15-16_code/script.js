let bubbles = [];
let photos = [];

function preload() {
    for (let i = 0; i < 5; i++) {
        photos[i] = loadImage(`assets/nyc${i}.jpg`);
    }
}

function setup() {
    let canvas = createCanvas(windowWidth, 2500);
    canvas.position(0,0);
    canvas.style('z-index', '1');

    // Move the canvas so it’s inside our <div id="sketch-holder">.
   canvas.parent('sketch-holder');

    for (let i = 0; i < 4; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(100, 350);

        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }
}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
}


function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r, img) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.photo = random(photos);

    }

    //if mouse clicks on photo tint the photo
    clicked(px, py) {
        if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
            tint(random(100,255), random(250,255), random(100,255));
        }
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        image(this.photo, this.x, this.y, this.r, this.r);
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }