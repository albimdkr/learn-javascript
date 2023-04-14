//EXERCISE CLASSES OOP
// Level 1
// case 01 : Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animals {
  constructor(name, age, color, legs){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  };
 	getName(){
    var name = this.name;
    return name;
  };
  getAge(){
    var age = this.age;
    return age;
  };
  getColor(){
    var color = this.color;
    return color;
  };
  getLegs(){
    var legs = this.legs;
    return legs;
  }
};

//case 02 : Create a Dog and Cat child class from the Animal Class.
// this case im using Inhetince from class Animals
class Dog extends Animals{
  thisIsDog(){
    console.log('Uk Uk Uk');
  };
};
var myDog = new Dog('Garvin', 3, 'white', 4);
console.log(myDog.thisIsDog());
console.log(myDog.getName());
console.log(myDog.getAge());
console.log(myDog.getColor());
console.log(myDog.getLegs())

class Cat extends Animals {
  	thisIsCat(){
      console.log(`${this.name} : Meong Meong Meong`)
    };
};
var myCat = new Cat('Rio', 4, 'Gray', 4);
console.log(myCat.thisIsCat());
console.log(myCat.getName());
console.log(myCat.getAge());
console.log(myCat.getColor());
console.log(myCat.getLegs());

