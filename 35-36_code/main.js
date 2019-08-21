function openFunction() {

    let poem = document.getElementById('poem-text');
    let item1 = document.getElementById('item1')

    if (poem.style.display !== 'none') {
        poem.style.display = 'none';
        item1.style.backgroundColor = 'yellow';
    } else {
        poem.style.display = 'block';
        item1.style.backgroundColor = 'white';
    }
}