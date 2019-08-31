let phrase = "Kindness";
let size = 180;
let points;
let font;
let randomColorR;
let randomColorG;
let randomColorB;

let x;
let y;

function preload(){
  font = loadFont("BigCaslon.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);
  randomColorR= random(225,255);
  randomColorG= random(150,220);
  randomColorB= random(150,220);
  
  x = windowWidth/2 - 420;
  y = windowHeight/2 + 50;
  options = {
    	sampleFactor: 1,
    	simplifyThreshold: 0
  };
  
  points = font.textToPoints(phrase, x, y, size, options);
  
  background(randomColorR, randomColorG, randomColorB);
  textSize(size);
  textFont(font);
}

function draw() {
  
  
  fill(randomColorR, randomColorG, randomColorB,50);
  text(phrase, x, y);
  
   fill(255,3);
  
  for(let i = 0; i< points.length-1; i++){
   var pt = points[i];
    
    pt.x += noise(i/5, frameCount * 0.005) * 2.0 - 1.0;
    pt.y += noise(i/4, frameCount * 0.005) * 2.0 - 1.0;
    
    fill(noise(i*0.02, frameCount*0.015) + 255,random(0,100));
    ellipse(pt.x, pt.y,1);

  }
  
}