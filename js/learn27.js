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

console.log(space)

allTitles2.forEach(title => console.log(title));
//const allTitles2 = document.querySelectorAll('.title')//thesame goes for select using class

console.log(space)

//Adding attribute
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'

//Adding attribute using setAttribute
const setTitles =  document.querySelectorAll('h1');
setTitles[3].setAttribute('class', 'title');
setTitles[3].setAttribute('id', 'fourth-title');

//Adding attribute without setAttribute
titles[3].className = 'title'
titles[3].id = 'fourth-title'

//Adding class Using classList
//another way to setting an attribute
titles[3].classList.add('title', 'header-title')

//Removing class using remove
//similar to adding can also remove attr
titles[3].classList.remove('title', 'header-title')

//Adding Text to HTML element
const titles3 = document.querySelectorAll('h1')
titles3[3].textContent = 'fourth Title'

//Adding text Content using innerHTML
const titles4 = document.querySelectorAll('h1')
titles4[3].textContent = 'Fourth Title'

//innerHTML
const lists = `
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Ongoing</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>`
const ul = document.querySelector('ul')
ul.innerHTML = lists


