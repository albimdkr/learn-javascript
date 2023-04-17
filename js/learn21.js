////ERROR HANDLING
//Throw Error
// give the information error to program, when prograaming its running and if the program have error, the program will throw information error to console program
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