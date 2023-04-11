//CLASSES
//Defining a classes
// Must Camel Case
//Class instatiation
class Myperson {

};
const myPerson = new Myperson();
console.log(myPerson);


//Class Constructor
class Myperson1 {
    constructor (firstName, lastName){
        console.log(this); //check the output from here
        this.firstName = firstName;
        this.lastName = lastName;
    };
};
const myPerson1 = new Myperson1();
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