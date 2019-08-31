//generate random color
function random_text_color(){
    let max = 150;
    let min = 100;

    let r_max = 255;
    let r_min = 200;

    let r = Math.floor(Math.random()*(r_max - r_min)+ r_min);
    let g = Math.floor(Math.random()*(max -min) + min);
    let b = Math.floor(Math.random()*(max -min) + min);
    let text_color = "rgb(" + r + "," + g + "," + b+")"; 

    console.log(text_color);

    document.getElementById('poem-title').style.color = text_color;
}


function poem_open(){
    document.getElementById('poem-container').style.display = "block";
    document.getElementById('hamburger').style.visibility = "hidden";

    random_text_color();
}

function poem_close(){
    document.getElementById('poem-container').style.display = "none";
    document.getElementById('hamburger').style.visibility = "visible";
}