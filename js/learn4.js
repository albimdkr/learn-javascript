        //01. type string
        var first = "hallo ";
        var last = "world ";
        document.getElementById("string").innerHTML = "String : " + first + last;

        //02. type number
        let length = 20;
        let weight = 10;
        document.getElementById("number").innerHTML = "Number : " + "lenght = " + length + " weigth = " + weight;

        //03. type boolean
        var x = 10;
        var y = 20;
        var hasilBoolean = x < y;
        document.getElementById("boolean").innerHTML = "10 < 20 = " + hasilBoolean;

        //04. type object
        const nameMyCat = {firstName : "me", lastName : "ong"};
        document.getElementById("object").innerHTML = "my cat name in object : " + nameMyCat;

        //05. array
        const myCars = ["Pazero", "Jeep", "Alphard"];
        myCars[2] = "BMW"; //to changes alphard to BMW
        myCars.push("Tesla"); //to add value in array
        document.getElementById("array").innerHTML = "my car in array : " + myCars;