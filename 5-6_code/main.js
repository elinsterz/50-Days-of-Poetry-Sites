 //interactive option: to draw a line! 


function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    canvas.parent('sketch-holder');
    createCanvas(windowWidth, windowHeight);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}


function draw(){
    
    stroke(0);
    if(mouseIsPressed === true){
        line (pmouseX, pmouseY, mouseX, mouseY);
    }
    

}
