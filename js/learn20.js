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
console.log(myPerson1);