const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);  // Menambahkan user "Jonas"

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(visitsCountMap);
}, 10000)

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/


//const visitsCountMap = new WeakMap();

const { inspect } = require('util');

const visitsCountMap1 = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap1.get(user) || 0;
  visitsCountMap1.set(user, count + 1);
}

let jonas1 = { name: "Jonas" };
countUser(jonas1);  // Menambahkan user "Jonas"

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);

/* output
  WeakMap {  }
*/

// Note

/* 
Seperti halnya WeakMap, WeakSet adalah versi weak reference dari Set. Perbedaan antara WeakSet dan Set antara lain:

    WeakSet tidak bisa menyimpan nilai primitif.
    WeakSet bukan iterable dan hanya memiliki method add(), has(), dan delete().
    WeakSet tidak memiliki properti size.
*/
