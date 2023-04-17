////ERROR HANDLING
//Throw Error
// give the information error to program, when prograaming its running and if the program have error, the program will throw information error to console program
var space = "================";
class MathUtil1 {
    static sum(...numbers) {

        //give the throw error condition
        if (numbers.length === 0){
            throw new Error('Nilai harus lebih dari 0!');
        };

        let total = 0;
        for (const number of numbers){
            total += number;
        }
        return total;
    };
}

// console.info(MathUtil1.sum());
// console.info('err'); //this error, the browser will stop program in below

const result1 = MathUtil1.sum(1); //success cause 0 > 1
console.info('Result1 : ' + result1);

console.log(space);

//Try Catch
class MathUtil2 {
    static sum(...numbers) {

        //give the throw error condition
        if (numbers.length === 0){
            throw new Error('Nilai harus lebih dari 0!');
        };

        let total = 0;
        for (const number of numbers){
            total += number;
        }
        return total;
    };
}

try {
    console.info(MathUtil2.sum());
    console.info(Albi)
} catch (error){ 
    console.info(`Terjadi error : ${error.message}`); //if give information message error use : message and will be fetch value from throw error message
} finally { //finally : this program will be give information, want in any condition the program runs or succeeds, it will still be executed
    console.info('The program has finish!');
}
console.info('Albi')

console.log(space);

//Try Finally : use for certain cases
class Counter {

    #counter = 1;

    next(){
        try{
            return this.#counter;
        } finally {
            this.#counter++;
        }
    };
}
const counter = new Counter();
console.info(counter.next()); //1
console.info(counter.next()); //2
console.info(counter.next()); //3

console.log(space);

//Manual Class Error
// can customize Error class : db error, api error, validation error, etc
class validationError extends Error {
    constructor(message, field){
        super(message);
        this.field = field;
    }
}

class MathUtil3 {
    static sum(...numbers) {

        //give the throw error condition
        if (numbers.length === 0){
            throw new validationError ('Nilai harus lebih dari 0!', 'numbers'); //add information field, is numbers
        };

        let total = 0;
        for (const number of numbers){
            total += number;
        }
        return total;
    };
}

try {
    console.info(MathUtil3.sum());
    console.info(adul)
} catch (error){
    if (error instanceof validationError){
        console.error(`Terjadi error di field ${error.field} dengan erronya adalah : ${error.message}`);
    } else {
        console.error(`Terjadi error : ${error.message}`);
    }
} finally { //finally : this program will be give information, want in any condition the program runs or succeeds, it will still be executed
    console.info('The program has finish!');
}
console.info('adul');