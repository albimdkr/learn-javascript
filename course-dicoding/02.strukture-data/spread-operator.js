// ...

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);

/* output
Seafood Salad Nugget Soup
*/

const favoritesBefore = ["Seafood", "Salad", "Nugget", "Soup"];
const othersBefore = ["Cake", "Pie", "Donut"];

const allFavoritesBefore = [favoritesBefore, othersBefore];

console.log(allFavoritesBefore);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

const favoritesAfter = ["Seafood", "Salad", "Nugget", "Soup"];
const othersAfter = ["Cake", "Pie", "Donut"];

const allFavoritesAfter = [...favorites, ...others];

console.log(allFavoritesAfter);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

// OBJECT LITERALS
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/