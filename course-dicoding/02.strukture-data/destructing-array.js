const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
 
/* output:
Seafood
Salad
Nugget
Soup
*/

// Default Values
const favorites1 = ["Seafood"];
 
const [myFood, herFood = "Salad"] = favorites1
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
Salad
*/