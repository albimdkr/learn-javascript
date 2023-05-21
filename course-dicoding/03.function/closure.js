function init() {
    const name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
      
    function greet() {      // Inner function, merupakan contoh closure
      console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }
  
    greet();
  }
  
  init();
  
  /* output
  Halo, Obi Wan
   */

  function init() {
    const name = 'Obi Wan';
  
    function greet() {
      console.log(`Halo, ${name}`);
    }
  
    return greet;
  }
  
  const myFunction = init();
  myFunction();
  
  /* output
  Halo, Obi Wan
   */

  let counter = 0;

const add = () => {
  return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());

/* output
1
2
24
 */

const add1 = () => {
    let counter = 0;
      return () => {
        return ++counter;
    };
  }
  
  const addCounter = add1();
  
  console.log(addCounter());
  console.log(addCounter());
  console.log(addCounter());
  
  /* output
  1
  2
  3
   */