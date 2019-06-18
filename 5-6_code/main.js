 //interactive option: to draw a line! 


function setup(){
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    //createCanvas(windowWidth, windowHeight);
}

// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight);
// }


function draw(){
    stroke(0);
    strokeWeight(0.5);
    if(mouseIsPressed === true){
        line (pmouseX, pmouseY, mouseX, mouseY);
    }
}

function keyPressed(){
    clear();
}

