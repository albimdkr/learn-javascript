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