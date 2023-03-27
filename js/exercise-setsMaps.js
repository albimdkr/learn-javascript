//case 1 : creat an empty set 
var sets = new Set()
console.log(sets);

//case 2 : Create a set containing 0 to 10 using loop
var num = [0,1,2,3,4,5,6,7,8,9,10];
setOfnum = new Set();
for (var numbers of num){
  setOfnum.add(numbers);
};

//case 3 : Remove an element from a set
var countriess = new Set();
console.log(countriess.size);
countriess.add('Swedia');
countriess.add('England');
countriess.delete('Swedia');
console.log(countriess);

//case 4 : clear a set
var countriess = new Set();
console.log(countriess.size);
countriess.add('Swedia');
countriess.add('England');
countriess.clear();
console.log(countriess);

//case 5 : create a set of 5 string elements from array
var languages = [
  'English',
  'Finnish',
  'Indonesian',
  'English',
  'French',
  'Indonesian',
  'Spanish',
  'English',
  'French',
]
var newArr = new Set(languages);
console.log(newArr);

// case 6 : Create a map of countries and number of characters of a country
var countriesMap = new Map();
countriesMap.set('Indonesian','Jakarta');
countriesMap.set('Thailand', 'Bangkok');
console.log(countriesMap);
console.log(countriesMap.size);

//EXERCISE 2
//case 1 : Find a intersection b
var a1 = [1,2,3,4,5];
var b1 = [3,4,5,6];
var c1 = [...a1, ...b1];
var A1 = new Set(a1);
var B1 = new Set(b1);
var C1 = new Set(c1);
console.log(C1);

//case 2 : Find a intersection b
var a2 = [1,2,3,4,5,6];
var b2 = [4,5,6,7,8,9,10];
var A2 = new Set(a2);
var B2 = new Set(b2);
var c2 = a2.filter((num) => B2.has(num));
var C2 = new Set(c2);
console.log(C2);

//case 3 : Find a with b
//case 3 : find a and b
var a3 = [1,2,3,4,5];
var b3 = [3,4,5,6];
var A3 = new Set(a3);
var B3 = new Set(b3);
var c3 = a3.filter((num) => !B3.has(num));
var C3 = new Set(c3);
console.log(C3)


