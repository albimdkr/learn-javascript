//SETS AND MAPS
//creating set an empty
const companies = new Set();
document.getElementById("set-1").innerHTML = "an empty array : console.log()";
console.log(companies);

//creating set from array
var languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
];
const setOfLanguanges1 = new Set (languages);
console.log(setOfLanguanges1);
document.getElementById("set-2").innerHTML = "creating set from array : console.log()";

//Set is an iterable object and we can iterate through each elements.
var languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
];
const setOfLanguanges2 = new Set(languages);
for (const language of setOfLanguanges2){
    console.log(language);
};
document.getElementById("set-3").innerHTML = "Iterate Set each element : console.log()";

//Adding an element to a set
const companies2 = new Set(); // create an empty
console.log(companies2.size); //0
companies2.add('Google'); //add element to the set
companies2.add('Amazon');
companies2.add('OpenAI');
companies2.add('spotify');
console.log(companies2.size); // an element 4
console.log(companies2);
document.getElementById("set-4").innerHTML = "Adding an element to a set : console.log()";

//We can also use loop to add element to a set.
setOfCompanies = new Set()
for (const company of companies2) {
  setOfCompanies.add(company)
}

//Deleting an element a set
//We can delete an element from a set using a delete method.
console.log(companies2.delete('Google'))
console.log(companies2.size) // 4 elements left in the set
console.log("after delete");
console.log(companies2);
document.getElementById("set-5").innerHTML = "Delete method sets : console.log()";

//Checking an element in sets
//The has method can help to know if a certain element exists in a set.
console.log(companies2.has('Apple')); //checking in array companies 2 an apple ? : false
console.log(companies2.has('spotify')); //checking in array companies 2 an spotify ? : true
document.getElementById("set-6").innerHTML = "Checking method sets : console.log()";

//Clearing the set
//It removes all the elements from a set.
companies2.clear();
console.log(companies2);
document.getElementById("set-6").innerHTML = "Clear method sets : console.log()";

//EXAMPLE USE SET
//example case 1 : 
console.log("example use sets");
var languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
];
const langSet = new Set(languages);
console.log(langSet);
console.log(langSet.size);//4

const counts = []
const count = {}

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l) // l not 1 or i
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts);

//example case 2 : For instance to count unique item in an array.
var numbers = [5, 3, 2, 5, 5, 9, 4, 5];
var setOfNumbers = new Set(numbers);
console.log(setOfNumbers);

//Union Of Sets
//To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)
var a = [1,2,3,4,5];
var b = [3,4,5,6];
var c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);
console.log(C); //output : set(6) [ 1, 2, 3, 4, 5, 6 ]

//Intersection of sets
//To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B)
var a2 = [1, 2, 3, 4, 5];
var b2 = [3, 4, 5, 6];

let A2 = new Set(a2);
let B2 = new Set(b2);

let c2 = a2.filter((num) => B2.has(num));
let C2 = new Set(c2);
console.log(C2); //output : set(3) [3,4,5]

//Difference Of Sets
//to find an the difference between two sets can be achivied using filter. Lets find the different of set A and set B (A\B)
var a3 = [1,2,3,4,5];
var b3 = [3,4,5,6];

let A3 = new Set(a3);
let B3 = new Set(b3);

let c3 = a3.filter((num) => !B3.has(num));
let C3 = new Set(c3);
console.log(C3); //output : set [1,2]

//MAP














