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
