
function togglePoem() {
    let x = document.getElementById("poem-div");
    if (x.style.display !== 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}


function hover(element) {
    element.setAttribute('src', 'assets/diamond.svg');
}

function unhover(element) {
    element.setAttribute('src', 'assets/diamond-outline.svg');
}