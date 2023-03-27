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
//console.log(countriess);

countriess.delete('Swedia');
console.log(countriess);
