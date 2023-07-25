//Traversal
const container = document.getElementsByClassName('container')[0];
const closeIcon1 = document.getElementsByTagName('span')[2];


closeIcon1.addEventListener('click', function(){
    const card = document.getElementsByClassName('card')[0];
    container.removeChild(card);
});


