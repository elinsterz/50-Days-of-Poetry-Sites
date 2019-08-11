//make empty array
let bubbles = [];
let numBubbles = 20;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

  frameRate(8);
}

function draw() {
  background(0, 80);

  //loop through all the bugs backwards
  //looping backwards lets us see older particles on top
  for (let i = bubbles.length - 1; i>=0; i--) {
    bubbles[i].move();
    bubbles[i].show();
    // bubbles[i].shrink();

    if (bubbles[i].radius <= 0) {
      //remove the dead ones
      bubbles.splice(i, 3);
    }
  }

  //make more fire!!!
  let x = windowWidth / 2;
  let y = windowHeight;
  let radius = random(1, 3);
  let b = new Bubble(x, y, radius);
  bubbles.push(b);
}

class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.radius = tempR;

    //color
    this.color = fill(255);
    let r = random(2);
    if (r < 1) {
      this.color = color(40, 60, 205, 10); //blue
    } else if (r >= 1 && r < 2) {
      this.color = color(255, 120, 20, 15); //orange
    } else if (r >= 2) {
      this.color = color(255, 250, 35, 20); //yellow 
    }
  }
  
  show(){
   noStroke();
    fill(this.color);
    ellipse(this.x + random(-1,1), this.y, mouseY/25 - this.radius *random(1,5) , mouseY - 150 - this.radius/20);
  }
  
  move(){
   this.x += random(-0.25,0.25);
   this.y -= random(-8,8);
  }
}