 //interactive option: to draw a line! 


function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    canvas.parent('sketch-holder');
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}


function draw(){
    fill(255,255,0);
    ellipse(20,20,500,500);
    
    stroke(0);
    if(mouseIsPressed === true){
        line (pmouseX, pmouseY, mouseX, mouseY);
    }
    

}
