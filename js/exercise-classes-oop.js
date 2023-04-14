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

var myCat = new Animals('Meong', 5, 'orange', 4 );
console.log(myCat.getName());
console.log(myCat.getAge());
console.log(myCat.getColor());
console.log(myCat.getLegs());