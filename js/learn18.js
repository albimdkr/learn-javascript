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
//match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
const str1 = 'I Love JavaScript';
const pattern6 = /love/;
const result2 = str1.match(pattern6);
console.log(result2); //["love", index: 2, input: "I love JavaScript", groups: undefined]

const str2 = 'I Love JavaScript';
const pattern7 = /love/g;
const result3 = str2.match(pattern7);
console.log(result3);

//search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
const str3 = 'I Love JavaScript';
const pattern8 = /love/g;
const result4 = str3.search(pattern8);
console.log(result4);

// Replacing a substring
// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language';
matchReplaced = txt.replace(/Python|python/, 'JavaScript');
console.log(matchReplaced);

const txtRandom = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txtRandom.replace(/%/g, '');
console.log(matches);

//Square Bracket
// const pattern = '[Aa]pple' // this square bracket means either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
// const matches = txt.match(pattern)
// console.log(matches)  

//Escape character(\) in RegExp
// const pattern = /\d/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)
// console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

//One or more times(+)
// const pattern = /\d+/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)
// console.log(matches)  // ["12", "2020"], this is not what we want

//Period(.)
// const pattern = /[a]./g  // this square bracket means a and . means any character except new line
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)
// console.log(matches)  // ["an", "an", "an", "a ", "ar"]

//Zero or more times(*)
// const pattern = /[a].*/g  //. any character, + any character one or more times 
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)
// console.log(matches)  // ['and banana are fruits']

//Zero or one times(?)
// const txt = 'I am not sure if there is a convention how to write the word e-mail.\
// Some people write it email others may write it as Email or E-mail.'
// const pattern = /[Ee]-?mail/g  // ? means optional
// matches = txt.match(pattern)
// console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]

//Quantifier in RegExp
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\\b\w{4}\b/g  //  exactly four character words
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made', '2019']

//Cart ^
//Starts with
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /^This/ // ^ means starts with
// const matches = txt.match(pattern)
// console.log(matches)  // ['This']
//Negation
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
// const matches = txt.match(pattern)
// console.log(matches)  // ["6", "2019"]

//Exact match
// let pattern = /^[A-Z][a-z]{3,12}$/;
// let name = 'Asabeneh';
// let result = pattern.test(name)
// console.log(result) // true