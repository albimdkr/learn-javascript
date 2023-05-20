let myArray01 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray01);

/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

let myArray02 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray02[1]);

/* output:
42.5
*/

let myArray03 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray03.length + ".");

/* output:
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

// PUSH()
const myArray0 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.push('JavaScript');
console.log(myArray0);

/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

// POP()
const myArray1 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(myArray1);

/* output
[ Cokelat, 42.5, 22, true ]
*/

// SHIFT UNSHIFT
const myArray2 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray2);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

// DELETE
const myArray3 = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray3);

/* output
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
*/

// HAPUS ELEMENT : SPLICE()
const myArray4 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray4);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/

// MENAMBAHKAN ELEMENT : SPLICE()
const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month);

month.splice(1, 0, 'February');
console.log('after splice: ', month);