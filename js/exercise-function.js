//FUNCTION 
//EXERCISE : LEVEL 1
//exercise 1
//case 1 : Declare a function fullName and it print out your full name.
function printFullName (){
    var firstName = 'albi';
    var space = ' ';
    var lastName = 'mudakar';
    var fullName = firstName + space + lastName;
    console.log(fullName);
  };
  console.log("case 1 : " + printFullName());
  
  //case 2 : Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
  function fullName (params1, params2){
    var myName = params1 + params2;
    return myName;
  };
  console.log("case 2 : " + fullName('albi', 'mudakar'));
  
  //case 3 : Declare a function addNumbers and it takes two two parameters and it returns sum.
  function addNumber (num1, num2){
    var sum = num1 * num2 ;
    return sum;
  }
  console.log("case 3 : " + addNumber(2, 2));
  
  //case 4 : An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
  function areaOfRectangle (length, width){
    var area = length * width;
    return area;
  };
  console.log("case 4 : " + areaOfRectangle(20, 3))
  
  //case 5 : A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
  function perimeter (length, width){
    var perimeter = 2 * (length + width);
    return perimeter;
  }
  console.log("case 5 : " + perimeter(2, 2));
  
  //case 6 : A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
  function volume (length, width, heigth){
    volume = length * width * heigth;
    return volume;
  };
  console.log("case 6 : " + volume(2, 2, 5));
  
  //case 7 : Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
  function areaOfCircle2 (n, r, r){
    var area = n * r * r;
    return area;
  };
  console.log("case 7 : " + areaOfCircle2(2, 3, 3));
  
//case 8 : Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
//formula : circumreference = 2 * PI * r
function circumOfCircle (r){
    var result;
    var result = 2 * Math.PI * r;
       return result;
  };
  console.log("case 9 : " + circumOfCircle(1));
  
  //case 9 : Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
  function density (mass, volume){
    var density = mass / volume;
    return density;
  };
  console.log("case 9 : " + density(10, 2));

  // case 10 : Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
  function calculatedSpeed (distance, time, speed){
    var resultDistance = speed * time;
    var resultTime = speed / distance;
    var resultSpeed = distance / time;
  
    var resultAll ="result distance : " + resultDistance + " result time : " + resultTime + " result speed : " + resultSpeed;
    return resultAll;
  };
  console.log(calculatedSpeed(48.5, 2, 15));

  //case 11 : Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
  function weight (mass, gravity){
    resultWeight = mass * gravity;
    return resultWeight;
  };
  console.log("case 11 : " + weight(20, 5.4));

  // case 12 : Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
  function convertCelsiusToFahrenHeit (oC){
    var f = (oC * 9/5) + 32;
    return f;
  };
  console.log("case 12 : " + convertCelsiusToFahrenHeit(20) + " Fahrenheit");

  //case 13 : Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// - The same groups apply to both men and women.
// - Underweight: BMI is less than 18.5
// - Normal weight: BMI is 18.5 to 24.9
// - Overweight: BMI is 25 to 29.9
// - Obese: BMI is 30 or more

function bmi(weight, height){
  var bmi = weight / (height * height);
  return bmi;
};
console.log("case 13 : " + bmi(100, 18.5));

//case 14 : Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason (month){
  if (month == 'March'){
    console.log('case 14 : season its Spring');
  }else if  (month == 'December'){	
    console.log('case 14 : season its Winter')
  }else if  (month == 'September'){
		console.log('case 14 : season its Autumn');
  }else if  (month == 'June'){
    console.log('case 14 : season its Summer');
  }else {
    console.log('sorry, you are wrong the type or nothing in list, plase try again.');
  };
 return month;
};
checkSeason('June');

//case 15 : Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(value1, value2, value3){
  var result = Math.max(value1, value2, value3);
  return result;
};
console.log("case 15 : val1 = " + findMax(0, 10, 5));
console.log("case 15 : val2 = " + findMax(0, -10, -2));

//EXERCISE : LEVEL 2