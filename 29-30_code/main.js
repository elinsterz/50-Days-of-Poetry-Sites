function myFunction() {
    let x = document.getElementById("poem-div");
    if(x.style.display !== 'none'){
        x.style.display = 'none';
    } else {
        x.style.display= 'block';
    }
}



/*
function myFunction() {
    let x = document.getElementById("poem-div");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
*/

/*

let view = document.getElementById('view-button');
let poem = document.getElementById('poem-div');
let close = document.getElementById('close-button');

let open = function () {
    poem.style.display = 'block';
    poem.style.display = 'block';
}

let hide = function () {
    poem.style.display = 'none';
    poem.style.display = 'none';
}

view.onclick = open;
close.onclick = hide;

// Write your code here
let textChange = function () {
    view.innerHTML = 'Hello, World!';
}

let textReturn = function () {
    view.innerHTML = 'View';
}

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);

*/