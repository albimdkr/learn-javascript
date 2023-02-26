//FUNCTION EXERCISE
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
  