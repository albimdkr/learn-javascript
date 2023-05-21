const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
  };
  
  function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
  }
  
  introduce(user);
  
  /* output
  kren is Kylo Ren
  */

  function exponentsFormula(baseNumber, exponent) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
  }
  
  exponentsFormula(2);
  
  /* output
  2^undefined = NaN
  */

  function exponentsFormula(baseNumber, exponent = 2) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
  }
  
  exponentsFormula(3);
  
  /* output
  3^2 = 9
  */

 // Rest Parameter (spread op)
 function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5));

  

 