var countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
var names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

//EXERCISE 1
//case 1 : Explain the difference between forEach, map, filter, and reduce.
//forEach   : for iterate an elements 
//map       : Iterate an elemetns and modify . callback function elements with index, array params or return a new array
//filter    : to filter ouc item cindition and return a new array
//reduce    : can take callback function, the callback function takes accumlator, current, and optional value as a paramater and return a single value 

// case 2 : Define a callback function before you use it in forEach, map, filter or reduce
//callback as a function in javacript for send as a paramater. function callback has synhcrounous function, cause a function has direct execution to process

//case 3 :  Use forEach to console.log each country in the countries array.
var countries = ['Indonesia', 'Singapura', 'Timor Leste'];
countries.forEach((element) => console.log(element));

//case 4 : Use forEach to console.log each name in the names array.
var names = ['Alex Turner', 'Curt Cobain'];
names.forEach((element) => console.log(element));

//case 5 : Use forEach to console.log each number in the numbers array.
var numbers = [1,2,3,4,5];
numbers.forEach((element) => console.log(element));

//case 6 : Use map to create a new array by changing each country to uppercase in the countries array.
var countries = ['Indonesia', 'Singapura', 'Timor Leste'];
countries.map((element) => console.log(element.toUpperCase())); //method 1
var countriesToUpperCase = countries.map((element) => element.toUpperCase()); //method 2
console.log(countriesToUpperCase);

// case 7 : Use map to create an array of countries length from countries array.
var countries = ['Indonesia', 'Singapura', 'Timor Leste'];
countries.map((element) => console.log(element.length))
//case 8 : Use map to create a new array by changing each number to square in the numbers array
//case 9 : Use map to change to each name to uppercase in the names array
var names = ['articMonkey', 'AlexTurner', 'Nirvana', 'Curt Cobain'];
var namesUp = names.map((element) => element.toUpperCase());
console.log(namesUp)

//case 10 : Use map to map the products array to its corresponding prices
var product = [
  {
    name : 'Gold',
    price : 10,
  },
  {
    name : 'Silver',
    price : 07,
  },
  {
    name : 'Bronze',
    price : 05
  }
];

var correspoding = product.map((element) => {
  return element ['price'] + (element['price']);
});
console.log(correspoding);

//case 11 : Use filter to filter out countries containing land.
var otherCountries = ['England', 'America', 'Switzerland', 'Japan'];
var searchCountries = otherCountries.filter((x) => 
	x.includes('land')
)
console.log(searchCountries);