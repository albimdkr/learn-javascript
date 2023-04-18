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









