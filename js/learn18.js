//Regular Expressions
//Creating a pattern with RegEx Contructor
//without flag
let pattern = 'love';
let regEx = new RegExp(pattern);
console.log(regEx);

//Declaring regular expression with global flag and case insensitive flag.
let pattern2 = 'love';
let flag = 'gi';
let regEx2 = new RegExp(pattern, flag);
console.log(regEx2);

// Declaring the regex pattern using RegEx object. Writing the pattern and the flag inside the RegExp Contructor
let regEx3 = new RegExp('love', 'gi');
console.log(regEx3);

// Creating A Pattern Without RegExp Constructor
///let regEx4 = /love/gi;
//The above regular expression is the same as the one which we created with RegExp constructor
let regEx4 = new RegExp('love', 'gi');
console.log(regEx4);

