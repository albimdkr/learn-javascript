//CLASSES
//Defining a classes
// Must Camel Case
//Class instatiation
class Myperson {

};
const myPerson = new Myperson(); //object instance
console.log(myPerson);


//Class Constructor
class Myperson1 {
    constructor (firstName, lastName){ // constructor with params
        console.log(this); //check the output from here
        this.firstName = firstName; //properti class
        this.lastName = lastName; //properti class
    };
};
const myPerson1 = new Myperson1(); //object instnace
console.log(myPerson1); //undifined
//after instantiate the class
class Myperson2 {
    constructor (firstName, lastName){
        console.log(this); //check the output from here
        this.firstName = firstName;
        this.lastName = lastName;
    };
};
const myPerson2 = new Myperson2('Albi', 'Mudakar');
console.log(myPerson2);// output : { firstName: "Albi", lastName: "Mudakar" }

//create more person
class OtherPerson {
    constructor (firstName, lastName){
        console.log(this);//check output
        this.firstName = firstName;
        this.lastName = lastName;
    };
};
const person1 = new OtherPerson('Albi','Mudakar');
const person2 = new OtherPerson('Jack', 'Krauser');
const person3 = new OtherPerson('Leon', 'Kenedy');
console.log(person1);
console.log(person2);
console.log(person3);

//create detail person
class DetailPerson {
    constructor(firstName, lastName, age, status){
        console.log(this);
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.status = status;
    };
};
const detaiPerson = new DetailPerson('Albi', 'Mudakar', 240, 'Student');
console.log(DetailPerson);

//Default values with constructor
class DefaultPerson {
    constructor (
        firstName = 'Albi',
        lastName = 'Mudakar',
        age = 250, 
        country = 'Indonesians',
        city = 'Bandung'
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
    };
};
const callPerson1 = new DefaultPerson();//take the default values
const callPerson2 = new DefaultPerson('Leon', 'Kennedy', 28, 'USA', 'Washington DC');
console.table(callPerson1);
console.table(callPerson2);

//Class Methods
class GetPerson {
    constructor (firstName,lastName, age, country, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    };
    getFullName(){//method
        const fullName = this.firstName + ' ' +this.lastName;
        return fullName;
    };
};
const getPeron1 = new GetPerson('Albi', 'Mudakar', 50, 'Indonesian', 'Bandung');
const getPerson2 = new GetPerson('Ada', 'Wong', 29, 'Japan', 'Tokyo');
console.log(getPeron1.getFullName());
console.log(getPerson2.getFullName());

//car
class Car {
    constructor (carName, carSpeed){
        this.name = carName;
        this.speed = carSpeed;
    };
    testDrive(){ 
        console.log(this.name + " speed is " + this.speed + " km/h ");
    };
};
//test tesla
const tesla = new Car("Tesla", 322);
tesla.testDrive();
//test bmw
const bmw = new Car("bmw", 250);
bmw.testDrive();

//Internet Speed
class Internet {
    constructor (nameISP, bandwidthISP){
        this.name = nameISP;
        this.bandwidth = bandwidthISP; 
    };
    pingSpeed(bandwidth){
        this.bandwidth = bandwidth;
        console.log(this.name +" Speed is "+ this.bandwidth + " Mbps");
    };
};
//indihome
const indiHome = new Internet("IndiHome",30);
indiHome.pingSpeed();
//Megavision
const megavision = new Internet("Megavision", 20);
megavision.pingSpeed();
//Biznet
const biznet = new Internet("Biznet", 20);
biznet.pingSpeed();

//Properties with initial value
class ManyPerson {
    constructor (firstName, lastName, age, country, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    };
    getFullName(){ //this name posisition is prototype
        const fullName = this.firstName + ' ' +this.lastName;
        return fullName;
    };
};

const manyPerson1 = new ManyPerson('Albi','Mudakar',20,'Indonesian','Bandung');
console.log(manyPerson1.score);
console.log(manyPerson1.skills);

//Getter Method
//The get method allow us to access value from the object. 
class GetterPerson {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    };
    getFullName(){ //this name posisition is prototype
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    };
    get getScore(){ //this name posisition is prototype
        return this.score;
    };
    get getSkills(){ //this name posisition is prototype
        return this.skills;
    };
};
const getterPerson1 = new GetterPerson('Leon', 'Kenedy', '25', 'USA', 'Washington');
console.log(getterPerson1.getFullName())
console.log(getterPerson1.getScore);
console.log(getterPerson1.getSkills);

//Setter Method
class SetterPerson {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    };
    getFullName(){ //this name posisition is prototype 
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    };
    get getScore(){ //this name posisition is prototype
        return this.score;
    };
    get getSkills(){ //this name posisition is prototype
        return this.skills;
    };

    set setScore(score){
        this.score+=score;
    };
    set setSkill(skill){ //this name posisition is prototype
        this.skills.push(skill);
    };
};
const setterPerson1 = new SetterPerson('Albi','Mudakar',20,'Indonesian','Bandung');
//add value with setter method
setterPerson1.setScore = 1;
setterPerson1.setSkill = 'HTML';
setterPerson1.setSkill = 'CSS';
setterPerson1.setSkill = 'JavaScript';
//call
console.log(setterPerson1.getFullName());
console.log(setterPerson1.score);
console.log(setterPerson1.skills);

//with regular method called getPeronInfo()
class RegularMethodPerson {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    };
    getFullName(){
        const fullName = this.firstName + ' ' +this.lastName;
        return fullName;
    };
    get getScore(){
        return this.score;
    };
    get getSkills(){
        return this.skills;
    };
    set setScore(score){
        this.score += score;
    };
    set setSkill(skill){
        this.skills.push(skill);
    };
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''
    
        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
      }
};
const regularMethodPerson1 = new RegularMethodPerson('Albi', 'Mudakar', 20, 'Indonesian', 'Bandung');
regularMethodPerson1.setScore = 100;
regularMethodPerson1.setSkill = 'Node.JS';
regularMethodPerson1.setSkill = 'Express';
regularMethodPerson1.setSkill = 'MongoDB';

console.log(regularMethodPerson1.getScore);
console.log(regularMethodPerson1.getSkills);
console.log(regularMethodPerson1);

//Static Method
class MyPerson2 {
    constructor (firstName, lastName, age, country, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    };
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    };
    get getScore(){
        return this.score;
    };
    get getSkills(){
        return this.skills;
    };
    set setScore(score){
        this.score+=score;
    };
    set setSkill(skill){
        this.skills.push(skill);
    };

    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
    
        let formattedSkills = skills ? `He knows ${skills}` : ''
    
        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
      };

      static favoriteSkill(){
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'];
        const index = Math.floor(Math.random() * skills.length);
        return skills[index];
      };

      static showDateTime(){
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        if (hours < 10){
            hours = '0' + hours;
        }
        if (minutes < 10){
            minutes = '0' + minutes;
        }

        let dateMonthYear = date + '.' + month + '.' + year;
        let time = hours + ':' + minutes;
        let fullTime = dateMonthYear + ' ' + time;
        return fullTime;
      };
};
console.log(MyPerson2.favoriteSkill());
console.log(MyPerson2.showDateTime());

// Class Inheritance
// Using inheritance we can access all the properties and the methods of the parent class.
// Inheritance 1 : from class SetterPerson
class Student extends SetterPerson {
    saySomething(){
        console.log('I am child of the person class');
    };
};
const student1 = new Student('Albi', 'Mudakar', 20, 'Indonesian', 'Bandung');
console.log(student1);
console.log(student1.saySomething());
console.log(student1.getFullName());

//Inheritance 2 : From class Internet
// class Internet {
//     constructor (nameISP, bandwidthISP){
//         this.name = nameISP;
//         this.bandwidth = bandwidthISP; 
//     };
//     pingSpeed(){
//         console.info(this.name +" Speed is "+ this.bandwidth + " Mbps");
//     };
// };
// in the below, inherit from class internet
class Provider extends Internet {
    show(){
        if (this.bandwidth < 20){
            console.warn(`${this.name} Is low ${this.bandwidth} Mbps in the here`);
        } else {
            console.info(`${this.name} is fast cause ${this.bandwidth} Greater`);
        };
        
    };
};
let provider = new Provider("MyRepublic");
provider.pingSpeed(10); //set value in here
provider.show();

//Overriding Methods
// can customize the parent methods, can add addtional properties to child class
// need use the constructor function the child class to, inside constructor call super() function
class Student1 extends SetterPerson {
    constructor(firstName,lastName, age, country, city, gender){
        super(firstName, lastName, age, country, city, gender) //get from paren class
        this.gender = gender;
    };
    saySomething(){
        console.log('Hello, I am a child of the person class');
    };
};
const s1 = new Student1 ('Krauser', 'Jack', 34, 'Mamarica', 'NYC', 'Male');
console.log(s1.saySomething());


//Super Method
class Shape {
    paintInShape(){
        console.info("Paint Shape");
    };
}

class Circle extends Shape {
    paint(){ //if this metode delete, circle instance choose the method paint in the shape
        //how to select paint method in parent class Shape: call the super method in this below
        super.paintInShape();
        console.info("Paint Circle");
    };
}
const circle = new Circle();
circle.paint();



//Prototype
// implementasi prototype ketika di object instance nya tidak ada sebuah function yang diiinginkan , maka akan naik menuju prototype function (dalam artian karna ada function yg di inginkan)
function PersonPrototype (firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(name){
        console.log(`Hello ${name} my name is ${this.firstName} `);
    };
}

PersonPrototype.prototype.sayBye = function (){
    console.info("good bye");
}

PersonPrototype.prototype.run = function(){
    console.info(`this ${this.firstName} is running`);
};

const albi = new PersonPrototype('Albi','Nasyabi');
const mudakar = new PersonPrototype('Mudakar','Nasyabi');

console.log(albi);
console.log(mudakar);

// albi.sayBye();
// albi.run();

//Access Modifier
//Public Class (Field:porperty and value)
//character public can access in out the class, the default class javascript is public
class Customer {
    //this field public
    firstName;
    lastName;
    balance = 0;
    
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    };
}
const albiNew = new Customer("Albi", "Mudakar");
console.log(albiNew);