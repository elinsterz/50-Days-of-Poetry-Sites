let font;
let vehicles = [];

// let bounds;
let splitString;
let myString;
let first;
let second;
let third;
let fourth;

function preload() {
  font = loadFont('style/fonts/apercu_bold.otf');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  //split sentence into smaller strings
  let myString = 'HER,BIRTHDAY AS,ASHES IN,SEAWATER'
  let splitString = split(myString, ',');

  first = splitString[0];
  second = splitString[1];
  third = splitString[2];
  fourth = splitString[3];

  //Create variables for each split string
  let first_points = font.textToPoints(first, 100, 300, 224, {
    sampleFactor: 0.25
  });

  let second_points = font.textToPoints(second, 100, 500, 224, {
    sampleFactor: 0.25
  });

  let third_points = font.textToPoints(third, 100, 700, 224, {
    sampleFactor: 0.25
  });

  let fourth_points = font.textToPoints(fourth, 100, 900, 224, {
    sampleFactor: 0.25
  });


  //drawing each string 
  for (let i = 0; i < first_points.length; i++) {
    let pt = first_points[i];
    let vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }

  for (let i = 0; i < second_points.length; i++) {
    let pt = second_points[i];
    let vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }

  for (let i = 0; i < third_points.length; i++) {
    let pt = third_points[i];
    let vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
 
    for (let i = 0; i < fourth_points.length; i++) {
    let pt = fourth_points[i];
    let vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
  
}


function draw() {

    background(35,177,210);

  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }

}