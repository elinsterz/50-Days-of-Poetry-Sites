// Credits:
// Polar Perlin Noise Loop
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/136-polar-perlin-noise-loops.html
// https://youtu.be/ZI1dmHv3MeM
// https://editor.p5js.org/codingtrain/sketches/sy1p1vnQn

let noiseMax = 5;
let slider; 
let phase = 0;

function setup() {
  
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  
  slider = createSlider(0.5, 8, 2, 0.1);
  slider.position (windowWidth -200, 90);
}

function draw() {
  background(254, 255, 239, 100);
  
  translate(width/2, height/2);
  stroke(0);
  noFill();

  
  beginShape();
  
  let noiseMax = slider.value();
  
  for(let a = 0; a < TWO_PI; a+= 0.001){
    let xoff = map(cos(a), -1,1,0, noiseMax);
    let yoff = map(sin(a+phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff,yoff), 0, 1, 100, 900);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  
  endShape();
  phase += 0.005;
  // noLoop();
}