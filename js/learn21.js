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

console.info(MathUtil1.sum());
console.info('err'); //this error, the browser will stop program in below

const result1 = MathUtil1.sum(1); //success cause 0 > 1
console.info('Result1 : ' + result1);