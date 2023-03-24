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











