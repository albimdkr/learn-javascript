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

console.log(space)

//Getting elements bt using querySelector methods
let firstTitle1 = document.querySelector('h1')
let firstTitle2 = document.querySelector('#first-title')
let firstTitle3 = document.querySelector('.title')

//querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.
const allTitles2 = document.querySelectorAll('h1')
console.log(allTitles2) //4
for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles2[i]);
}

allTitles2.forEach(title => console.log(title));
//const allTitles2 = document.querySelectorAll('.title')//thesame goes for select using class



