//for pearl

function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(255,205,205);

  let locX = mouseX/2;
  let locY = mouseY/2;

  ambientLight(190);
  directionalLight(255, 0, 0, 20, 0, -1);
  pointLight(255, 0, 255, locX, locY, 400);


  ambientMaterial(255,255,0);
  fill(255,255,255);
  sphere(100, 640);
}



//for gradient
var c1, c2;

function setup() {
  createCanvas(600, 600);
  // Define colors
  c1 = color(255, 204, 0);
  c2 = color(255);
  setGradient(c1, c2);
}

function draw() {
  //ellipse(mouseX, mouseY, 30, 30);
}

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}