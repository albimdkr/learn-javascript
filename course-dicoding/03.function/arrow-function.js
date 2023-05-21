const sayName = name => {
    console.log(`Nama saya ${name}`)
  }
  
  sayName("Leia");
  
  /* output
  Nama saya Leia
   */

const sayName1 = name => console.log(`Nama saya ${name}`);
sayName1("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

/* output
Nama saya Leia
Selamat pagi semuanya!
 */


const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */