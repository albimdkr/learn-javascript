// Property
/*
roperti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class. Contohnya, jika Anda membuat class Car, 
properti adalah informasi yang sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chasissNumber. Contoh lain, jika Anda membuat class Mail, 
secara umum propertinya adalah sender, receiver, subject, dan body.
*/

/* Nilai dari properti biasanya diambil dari dari argumen constructor agar nilainya 
dapat bervariasi setiap kali membuat instance. */

class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = chassisNumber;
    }
   }
    
   const car1 = new Car('BMW', 'red', 200, 'b-1');
   const car2 = new Car('Audi', 'blue', 220, 'a-1');
   const car3 = new Car('BMW', 'black', 250, 'b-2');
   
   console.log(car1);
   console.log(car2);
   console.log(car3);
    
   /* Output:
   Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'b-1' }
   Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'a-1' }
   Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'b-2' }
   */

/*adakalanya nilai properti juga bisa didefinisikan di dalam class itu sendiri.*/
class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      // Set a random chassis number
      this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }
  }
   
  const car4 = new Car('BMW', 'red', 200);
  const car5 = new Car('Audi', 'blue', 220);
  const car6 = new Car('BMW', 'black', 250);
   
  console.log(car4);
  console.log(car5);
  console.log(car6);
   
  /* Output:
  Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-558' }
  Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'Audi-215' }
  Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'BMW-799' }
  */

  // Properti Getter dan Setter
  /*Secara standar, properti di dalam sebuah instance class bersifat mutable atau dapat diubah nilainya. 
  Meskipun kita sudah menetapkan nilai chassisNumber oleh sistem, 
  nyatanya nilai tersebut dapat diubah dengan mudah ketika objek mobil telah dibuat.*/

  /*Sagaimana cara memproteksi agar nilai dari properti chassisNumber tidak dapat diubah? Nah, ketika kita berhadapan dengan kasus seperti ini, kita bisa memanfaatkan properti getter dan setter.
    Sebelum memecahkan masalah di atas, ketahuilah bahwa ada dua tipe properti, yaitu data property dan accessor property.
  */
    class User {
        constructor(firstName, lastName) {
         this.firstName = firstName;
         this.lastName = lastName;
       }
       
        get fullName() {
          return `${this.firstName} ${this.lastName}`;
        }
       
        set fullName(fullName) {
          const [firstName, lastName] = fullName.split(' ');
          this.firstName = firstName;
          this.lastName = lastName;
        }
      }
       
      const user = new User('John', 'Doe');
      console.log(user);
      console.log(user.fullName);
       
      user.fullName = 'Fulan Fulanah';
      console.log(user);
      console.log(user.fullName);
       
      /* Output:
      User { firstName: 'John', lastName: 'Doe' }
      John Doe
      User { firstName: 'Fulan', lastName: 'Fulanah' }
      Fulan Fulanah
      */
  /*Catatan penting yang perlu Anda ketahui mengenai getter setter adalah:
    - method getter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti;
    - method setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator.
   */
    
// Method
  /* 
  Method adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance Class tersebut. Method biasanya mengindikasikan hal yang dapat dilakukan oleh sebuah class. Bila kita berbicara tentang class Car, method yang ada bisa drive(), reverse(), dan turn(). 
  Jika pada class Mail, method bisa berupa send(), sendLater(), saveAsDraft().
  */
class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }
   
    get chassisNumber() {
      return this._chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
   
    // Methods
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn(direction) {
      console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }
  }
   
  class Mail {
    constructor(sender, receiver, subject, body) {
      this.sender = sender;
      this.receiver = receiver;
      this.subject = subject;
      this.body = body;
    }
   
    // Methods
    send() {
      console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
    }
   
    sendLater(delay) {
      console.log(`Sending after ${delay} ms`);
   
      setTimeout(() => {
        this.send();
      }, delay);
    }
   
    saveAsDraft() {
      console.log('Saving mail as draft');
    }
  }

  //instance
  const car = new Car('BMW', 'red', 200);
  car.drive(); //panggil method
  car.turn('left');
  car.reverse();
  

//Member Visibility
/* Member visibility bisa disebut juga sebagai hak akses pada sebuah properti dan method di dalam class.  
  Mneyelasikan nya dengan symbol #
*/
class Car {
    #chassisNumber = null;
   
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.#chassisNumber = this.#generateChassisNumber();
   }
   
    get chassisNumber() {
      return this.#chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
   
    // Methods
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn(direction) {
      console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }
   
    #generateChassisNumber() {
      return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }

  /* Khusus untuk properti yang sifatnya private, Anda harus mendeklarasikan propertinya di enclosing class seperti ini. */
  class Car {
    #chassisNumber = null; // enclosing class
   
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.#chassisNumber = this.#generateChassisNumber();
    }
   
   // ... kode lainnya.
  }