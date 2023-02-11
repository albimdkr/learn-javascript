//STRING CONCATENATION
let firstName = 'albi';
let lastName = 'mudakar';
let age = 20;
let hobi = 'learn code';
let space = ' ';
let fullInfo = "name : " + firstName + space + lastName + "<br>" + "age : " + age + "<br>" + "hobbi : " + hobi;
document.getElementById("stringConcatenation-1").innerHTML = fullInfo;

//LONG LITERALS (use backslash (\))
let paragraph = "Lorem ipsum dolor sit amet,\
consectetur adipisicing elit.\
Error illum expedita,\
totam repellendus voluptates veritatis\
fuga voluptatum quis tempora dolorem fugit\
autem id exercitationem delectus,\
aspernatur fugiat,\
enim velit consectetur.";
document.getElementById("longLiteral-1").innerHTML = paragraph;
document.getElementById("longLiteral-1").style.textAlign = "justify" ;

//ESCAPE SEQUENCES STRING
// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")
var quote = 'Anyone who stops learning is old, \n whether at twenty or eighty. \n Anyone who keeps learning stays young. \n The greatest thing in life is to keep your mind young.” \n — Henry Ford';
var day = 'Monday\tTuesday\tWednesday\tThursday\tFriday\tSaturday\tSunday';
document.getElementById("escapeSequencesString-1").innerHTML = "backslash n : " + quote + "<br>" + "backslah t : " + day ;

//TEMPLATE LITERALS, $ and (`{variable}`) : dynamically
//(`${a} and ${b} ${a + b}`)
//example 1
let a = 10;
let b = 30;
document.getElementById("templateLiterals-1").innerHTML = (`Variable a bernilai : ${a} dan variable b bernilai : ${b}`);
//example 2 ES6
let myName = 'albi';
let myHobbi = 'learn code';
let myStatus = 'student';
let myCampus = 'Sekolah TInggi Teknologi Bandung'; 
let personInfo = `Hello I am ${myName} my hobbi is ${myHobbi} and i as ${myStatus} my campus in ${myCampus}.`;
document.getElementById("templateLiterals-2").innerHTML = personInfo;

//STRING METHOD
//lenght
var js = 'JavaScript'
document.getElementById("stringMethod-1").innerHTML = "JavaScript Values is :  "+  js.length;

//access number string
//access from 0, JavaScript | J=0 a=1 v=2 a=3 S=4 c=5 r=6 i=7 p=8 t=9
let str = 'JavaScript';
let printStr = str[4];
document.getElementById("stringMethod-2").innerHTML = "number 4 in word JavaScript is  : " + printStr;

//method toUpperCase()
let strUpperCase = 'javascript';
document.getElementById("stringMethod-3").innerHTML = "UpperCase : " + (strUpperCase.toUpperCase());

//method toLowerCase()
let strLowerCase = 'JAVASCRIPT';
document.getElementById("stringMethod-4").innerHTML = "LowerCase : " + (strLowerCase.toLowerCase());

//method substr()
let strSubstr = 'JavaScript';
document.getElementById("stringMethod-5").innerHTML = "Substr : " + (strSubstr.substr(4, 6));

//method substring()
let strSubstring = 'JavaScript';
document.getElementById("stringMethod-6").innerHTML = "Substring : " + (strSubstring.substring(0, 4));

//method split()
let strSplit = '30 Days Learn JavaScript';
document.getElementById("stringMethod-7").innerHTML = "array : " + (strSplit.split(' '));

//method trim()
let strTrim = '     30 Days Of JavaScript ';
document.getElementById("stringMethod-8").innerHTML = "trim : " + (strTrim.trim(' '));

//method replace()
let strReplace = '30 Days Learn JavaScript';
document.getElementById("stringMethod-9").innerHTML = "replace : " + (strReplace.replace('JavaScript', 'Pyhton'));

//method chartAt()
let strChartAt = '30 Days of javascript';
document.getElementById("stringMethod-10").innerHTML = "chartAt : " + (strChartAt.charAt(0)); //access huruf lewat angka
let lastIndex = strChartAt.length - 1;
document.getElementById("stringMethod-11").innerHTML = "length - chartAt : " + (strChartAt.charAt(lastIndex)); //index terakhir

//method charCodeAt() ASCII NUMBER
let strCharCodeAt = '30 Days Of JavaScript';
document.getElementById("stringMethod-12").innerHTML = "CharCodeAt : " + (strCharCodeAt.charCodeAt(6));


//method indexOf()
let strIndexOf = '30 Days Of JavaScript';
document.getElementById("stringMethod-13").innerHTML = "Index Of O is : " +  (strIndexOf.indexOf('O'));


//method lasIndexOf()
let strLastIndexOf = 'I love JavaScript. If you do not love JavaScript what else can you love.';
document.getElementById("stringMethod-14").innerHTML = "last index of love is : " + (strLastIndexOf.lastIndexOf('love'));

//method concat()
let strConcat = '30';
//document.getElementById("stringMethod-15").innerHTML = (strConcat.concat("Days", "Of", "JavaScript")) does'nt work
//alert(strConcat.concat("Days", "Of", "JavaScript")); its work

//method startsWith, to check fisrt TRUE or FALSE (Boolean)
let strStartsWith = 'Albi Mudakar Nasyabi';
document.getElementById("stringMethod-16").innerHTML =" startsWith : " + "\n Albi : " + (strStartsWith.startsWith("Albi")) + "\n Mudakar : " + (strStartsWith.startsWith("Mudakar")) + "\n Nasyabi : " + (strStartsWith.startsWith("Nasyabi"));

//method endsWith, to check end the word TRUE or FALSE (Boolean)
let strEndsWith = 'Albi Mudakar Nasyabi';
document.getElementById("stringMethod-17").innerHTML ="endsWith : " + "\n Albi : "+ (strEndsWith.endsWith("Albi")) + "\n Mudakar : " + (strEndsWith.endsWith("Mudakar")) + "\n Nasyabi : " + (strEndsWith.endsWith("Nasyabi"));

//method search()
let strSearch = 'I love JavaScript. If you do not love JavaScript what else can you love.';
document.getElementById("stringMethod-18").innerHTML = "Search : " + "love : " + (strSearch.search("love")) + "\n what : " + (strSearch.search("what"));

//method match()
let strMatch = 'I love JavaScript. If you do not love JavaScript what else can you love.';
document.getElementById("stringMethod-19").innerHTML ="match : " + (strMatch.match('love'));
// let pattern = love/gi;
// document.getElementById("stringMethod-20").innerHTML = (strMatch.match(pattern));

//method repeat()
let strRepeat = 'I must be able to master javascript | ';
document.getElementById("stringMethod-21").innerHTML = "repeat (5x): " + (strRepeat.repeat(5));
