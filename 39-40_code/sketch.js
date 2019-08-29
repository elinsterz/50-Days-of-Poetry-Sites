let textArr = [];
let numText = 200;
let letters = "Open Gesture of an I";

let typeface;

function preload() {
  typeface = loadFont("Calibre-Bold.otf")
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '2');

  //move canvas nto div id 'sketch-holder
  canvas.parent('sketch-holder');


  //push falling text constructor
  for (let i = 0; i < numText; i++) {
    textArr.push(new fallText(letters[int(random(0, letters.length))], random(width), random(height)));
  }

  frameRate(36);
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth);
}

function draw() {
  background(253, 98, 167,75) //hex #FD62A7

  //write title
  writeTitle('Open Gesture', 120, windowWidth/2, windowHeight/2 - 120);
  writeTitle('of an I', 120, windowWidth/2, windowHeight/2);

  //write author
  writeTitle('By D. A. Powell', 24,  windowWidth/2, windowHeight/2 + 175);

  //loop through array of falling text
  for (let i = 0; i < textArr.length - 1; i++) {
    textSize(60);
    fill(20);
    textFont(typeface);
    textArr[i].draw();
    textArr[i].update();  
  }
}

function writeTitle(title, fontSize, x, y,) {
  textFont(typeface);
  textSize(fontSize);
  fill(255);
  textAlign(CENTER);
  //translate(windowWidth/2, windowHeight/2);
  text(title, x, y);
}

class fallText {

  constructor(type, x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(-1, 1);
    this.speedY = random(1, 2);
    this.type = type;
    this.randRotate = random(-5, 5);
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(frameCount * 0.01 * this.randRotate);
    text(this.type, 0, 0);
    pop();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.y > height + 20) {
      this.y = random(-20, -10);
      this.x = random(width);
    }

    if (this.x > width + 20) {
      this.y = random(-20, -10);
      this.x = random(width);
    }
  }
}
