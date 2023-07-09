        //MATH NUMBER
        //PI
        const PI = Math.PI;
        document.getElementById("PI").innerHTML ="PI : " + PI;

        //round, 3 to round values to the nearest number
        document.getElementById("round").innerHTML = "round : " + (Math.round(PI));

        //floor, rounding down
        document.getElementById("floor").innerHTML = "floor : " + (Math.floor(PI));

        //ceil, rounding up
        document.getElementById("ceil").innerHTML = "ceil : " + (Math.ceil(PI));

        //min, -5, returns the minimum value
        document.getElementById("min").innerHTML = "min : " + (Math.min(-5, 3, 20, 4, 5, 10));

        //max, 20, returns the maximum value
        document.getElementById("max").innerHTML = "min : " + (Math.max(-5, 3, 20, 4, 5, 10));

        //random number
        const randomNumber = Math.random();
        document.getElementById("random").innerHTML = "Random Number : " + randomNumber+ " (refresh)";

        //random number 0-10
        const num = Math.floor((Math.random () * 11));
        document.getElementById("randNum-0-10").innerHTML = "randNum 1-10 : " + num + " (refresh)";
        
        //Absolute Value
        const absoluteValue = (Math.abs(-10));
        document.getElementById("absoluteValue").innerHTML =  "Absolute value -10 : " + absoluteValue;
        
        //square root
        const squareRoot = (Math.sqrt(100));
        document.getElementById("squareRoot").innerHTML = " Square Root 100 : " + squareRoot;

        //power
        const power = (Math.pow(3, 2));
        document.getElementById("power").innerHTML = " Power 3,2 : " + power;

        //LOGARITHM
        //logarithm-1
        const logarithm1 = (Math.log(2));
        document.getElementById("logarithm-1").innerHTML = "logarithm-1 (2) : " + logarithm1;

        //logarithm-2
        const logarithm2 = (Math.log(10));
        document.getElementById("logarithm-2").innerHTML = "logarithm-2 (10) : " + logarithm2;

        //TRIGONOMETRI
        //sin-1
        const sin1 = (Math.sin(0));
        document.getElementById("sin-1").innerHTML = "sin-1 (0) : " + sin1;
        
        //sin-2
        const sin2 = (Math.sin(60));
        document.getElementById("sin-2").innerHTML = "sin-2 (60) : " + sin2;

        //cos-1
        const cos1 = (Math.cos(0));
        document.getElementById("cos-1").innerHTML = "cos-1 (0) : "  + cos1;

        //cos-2
        const cos2 = (Math.cos(60));
        document.getElementById("cos-2").innerHTML = "cos-2 (60) : " + cos2;

        //RANDOM method()
        let randomNum = Math.random();
        let numBtnZeroAndTen = randomNum * 11;
        document.getElementById("randomMethod").innerHTML = "enter number : " + numBtnZeroAndTen;



