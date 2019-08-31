let phraseA = "The Kindness";
let phraseB = "of Others";
let phraseA_x;
let phraseA_y;
let phraseB_x;
let phraseB_y;

let size = 160;
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
  
  //background colors
  randomColorR= random(225,255);
  randomColorG= random(150,220);
  randomColorB= random(150,220);
  
  // text placement
  phraseA_x = windowWidth/2-250;
  phraseA_y = windowHeight/2;
  phraseB_x = windowWidth/2-250;
  phraseB_y = windowHeight/2 +150;
  
  options = {
    	sampleFactor: 0.5,
    	simplifyThreshold: 0
  };
  
  points = font.textToPoints(phraseA, phraseA_x, phraseA_y, size, options);
  points = font.textToPoints(phraseB, phraseB_x, phraseB_y, size, options);
  
  background(randomColorR, randomColorG, randomColorB);
  textSize(size);
  textFont(font);
}

function draw() {
  
  
  fill(randomColorR, randomColorG, randomColorB,50);
  text(phraseA, phraseA_x, phraseA_y);
  text(phraseB, phraseB_x, phraseB_y);
  
   fill(255,3);
  
  for(let i = 0; i< points.length-1; i++){
   var pt = points[i];
    
    pt.x += noise(i/25, frameCount * 0.005) * 2.0 - 1.0;
    pt.y += noise(i/55, frameCount * 0.005) * 2.0 - 1.0;
    
    fill(noise(i*0.02, frameCount*0.015) + 255,random(0,100));
    ellipse(pt.x, pt.y,1);

  }
  
}