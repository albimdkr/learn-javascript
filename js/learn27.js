//DOM
//Getting Element By Tagname
var space = "================";


const allTitles = document.getElementsByTagName('h1');

console.log(allTitles);
console.log(allTitles.length);

for (let i = 0; i< allTitles.length; i++) {
    console.log(allTitles[i]);
}

console.log(space);

//Getting element by ClassName
const allTitles1 = document.getElementsByClassName('title');
console.log(allTitles1)//HTMLCollections
console.log(allTitles1.length); //4

for (let i = 0; i < allTitles1.length; i++) {
    console.log(allTitles1[i]); //print each elements in HTMLColections
}

console.log(space);

//Getting Elements By Id
let firstTitle = document.getElementById('first-title');
console.log(firstTitle);