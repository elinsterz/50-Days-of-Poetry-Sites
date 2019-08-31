let phraseA = "The Kindness";
let phraseB = "of Others";

let phraseA_x;
let phraseA_y;
let phraseB_x;
let phraseB_y;

let size = 165;
let points;
let font;

let randomColorR;
let randomColorG;
let randomColorB;


function preload(){
  font = loadFont("CanelaText-Regular.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);
  
  //background colors
  randomColorR= random(200,255);
  randomColorG= random(100,180);
  randomColorB= random(100,180);
  
  // text placement
  phraseA_x = windowWidth/2-windowWidth/3;
  phraseA_y = windowHeight/2;
  phraseB_x = windowWidth/2-windowWidth/3;
  phraseB_y = windowHeight/2 +150;
  
  options = {
    	sampleFactor: 0.5,
    	simplifyThreshold: 0
  };
  
  points_A = font.textToPoints(phraseA, phraseA_x, phraseA_y, size, options);
  points_B = font.textToPoints(phraseB, phraseB_x, phraseB_y, size, options);
  
  background(randomColorR, randomColorG, randomColorB);
  textSize(size);
  textFont(font);
}


function draw() {
  
  //color of text
  fill(randomColorR, randomColorG, randomColorB,50);

  //placement of text
  text(phraseA, phraseA_x, phraseA_y);
  text(phraseB, phraseB_x, phraseB_y);
  
  //drawing strings of spittle 
  drawSpittle(points_A);
  drawSpittle(points_B);
}

function drawSpittle(points){
  //drawing the ellipse strings using for loop
  for(let i = 0; i< points.length-1; i++){
    var pt = points[i];
     
     pt.x += noise(i/25, frameCount * 0.005) * 2.0 - 1.0;
     pt.y += noise(i/55, frameCount * 0.005) * 2.0 - 1.0;
     
     fill(noise(i*0.02, frameCount*0.015) + 255,random(0,50));
     ellipse(pt.x, pt.y,1);
   }
}

// function mousePressed() {
//   background(randomColorR, randomColorG, randomColorB);
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowWidth);
// }


// for loop before turned into a function function
   /*
  //drawing the ellipse strings using for loop
  for(let i = 0; i< points_A.length-1; i++){
   var pt = points_A[i];
    
    pt.x += noise(i/25, frameCount * 0.005) * 2.0 - 1.0;
    pt.y += noise(i/55, frameCount * 0.005) * 2.0 - 1.0;
    
    fill(noise(i*0.02, frameCount*0.015) + 255,random(0,100));
    ellipse(pt.x, pt.y,1);
  }
  */