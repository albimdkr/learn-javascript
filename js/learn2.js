     // SYNTAX
     document.getElementById("syntax").innerHTML = "say hallo to the world";

     //VARIABLE, data store or have plan to changes value
     //declare
     var x = 2; //assigment
     var y = 3;
     z = x + y; //joined for calculation
     document.getElementById("var").innerHTML = "var : " + " the result x + y = " + z; //call var z for result

     //LET, cannot be redecalre or declarasi before use and then have block scope
     //correct
     let a = "hello"; //declare
     let b = "albi";
     document.getElementById("let").innerHTML = "let : " + " say " + a + " for " + b;
     //incorrect
     //let name = albi;
     //name = albi;

     //CONST, value not changed, use when declare array, obj, function, RegEx
     const myCars = ["Pazero", "Jeep", "Alphard"];
     myCars[2] = "BMW"; //to changes alphard to BMW
     myCars.push("Tesla"); //to add value in array
     document.getElementById("const").innerHTML = "const : " + myCars;

     try {
       const myCat = "meong"; //must declared before used
       document.getElementById("const1").innerHTML = "const : " + " My Cat Name : " + myCat; //call for use the variable const myCat
       document.getElementById("const1").style.backgroundColor = "green";
       document.getElementById("const1").style.color = "white";
       document.getElementById("const1").style.textAlign = "center";
     } catch (err) {
       // error handling
       document.getElementById("const1").innerHTML = err;
       document.getElementById("const1").style.backgroundColor = "red";
       document.getElementById("const1").style.color = "white";
       document.getElementById("const1").style.textAlign = "center";
     }