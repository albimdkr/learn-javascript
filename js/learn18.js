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
// let regEx4 = /love/gi;
// The above regular expression is the same as the one which we created with RegExp constructor
let regEx4 = new RegExp('love', 'gi');
console.log(regEx4);

//RegExpp Object Methods
const str = 'I Love JavaScript';
const pattern5 = /love/;
const result = pattern5.test(str);
console.log(result); //true or false

//Array Containing All Of The Match
// match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
const str1 = 'I Love JavaScript';
const pattern6 = /love/;
const result2 = str1.match(pattern6);
console.log(result2); //["love", index: 2, input: "I love JavaScript", groups: undefined]

const str2 = 'I Love JavaScript';
const pattern7 = /love/g;
const result3 = str2.match(pattern7);
console.log(result3);


// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
const str3 = 'I Love JavaScript';
const pattern8 = /love/g;
const result4 = str3.search(pattern8);
console.log(result4);



