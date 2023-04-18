//JSON
//Converting JSON to JavaScript Object
var space = "===============";

//JSON.parse()
//JSON.parse(json[, reviver])

const usersText = `{
"users" : [
    {
        "firstName" : "Albi",
        "lastName" : "Mudakar",
        "age" : 250,
        "email" : "albi@alb.com"
    },
    {
        "firstName" : "Jack",
        "lastName" : "Krauser",
        "age" : 30,
        "email" : "jack@jck.com"
    },
    {
        "firstName" : "Ada",
        "lastName" : "Wong",
        "age" : 22,
        "email" : "adawg@umbrl.com"
    }
]
}`
const userObj = JSON.parse (usersText, undefined, 4);
console.log(userObj);

//Using a reviver function with JSON.parse()
const userObj1 = JSON.parse(usersText, (key, value) => {
    let newValue = 
        typeof value == 'string' && key != 'email' ? value.toUpperCase():value;
    return newValue;
});
console.log(userObj1);


//Converting Object to JSON
// JSON.stringify(obj, replacer, space)
const users = {
    Albi: {
        email : 'albi@alb.com',
        skills : ['HTML', 'CSS', 'JavaScript'],
        age : 20,
        isLoggedIn : false,
        points : 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'Redux',
          'MongoDB',
          'Express',
          'React',
          'Node'
        ],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
      Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
      },
      Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
      Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      Paul: {
        email: 'paul@paul.com',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'MongoDB',
          'Express',
          'React',
          'Node'
        ],
        age: 20,
        isLoggedIn: false,
        points: 40
      }
}
const txt = JSON.stringify(users, undefined, 4);
console.table(txt);

//Using a filter Array with JSON.stringify
const users1 = {
    firstName : 'Albi',
    lastName : 'Mudakar',
    country : 'Japan',
    city : 'Tokyo',
    email : 'Albi@alb.com',
    skills : ['HTML', 'CSS', 'javaScript', 'NodeJS', 'Java'],
    age : 250,
    isLoggedIn : false,
    points : 30
}
const txtFilter = JSON.stringify(users1,['firstName', 'lastName', 'country', 'city', 'age'], 4);
console.log(txtFilter);




