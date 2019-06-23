//for pearl

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '1');

   // Move the canvas so it’s inside our <div id="sketch-holder">.
   canvas.parent('sketch-holder');
}

function draw() {
  clear();

  let pointOneX = mouseX+200;
  let pointOneY = mouseY+200;

  let pointTwoX = mouseX - width/2;
  let pointTwoY = mouseY - height/2;


  ambientLight(90);
  directionalLight(255, 150, 100, -1, -2, -1);
  directionalLight(200,150,220, 0, 1, -1);
  //directionalLight(0,10,0, 0, 0, -1);
  // pointLight(255, 0, 229, 50, -1, 0, 100);
  pointLight(255, 210, 229, pointTwoX, pointTwoY, 200);


  specularMaterial(255,235,248);
  //fill(255,200,0);
  sphere(300, 900);
  // rotateY(millis() / 1000);
}

