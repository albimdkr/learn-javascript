//MANIPULATIN DOM
let title = document.createElement('h3')
title.className = 'title';
title.style.fontSize = '24px';
title.textContent = 'Creating HTML Element DOM Day 2';
console.log(title);

//Creating elements
let title1;
for (let i = 0; i < 3; i++){
    title1 = document.createElement('h1');
    title1.className = 'title1';
    title1.style.fontSize = '24px';
    title1.textContent = i;
    console.log(title1);
}

//Appending child to a parent element
let title2;
for (let i = 0; i < 3; i++){
    title2 = document.createElement('h3');
    title2.className = 'title2';
    title2.style.fontSize = '24';
    title2.style.color = 'white';
    title2.textContent = i;
    document.body.appendChild(title2);
}