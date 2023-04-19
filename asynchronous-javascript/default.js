//Synchronous 
// function satu(){
//     console.log("satu");
// }

// function dua(){
//     console.log('function 2 akan on the way...')
//     setTimeout(() => {
//         console.log("dua");
//     }, 3000);
// }

// function tiga(){
//     console.log("tiga");
// }

// satu()
// dua();
// tiga();

//Study Case Login Asynchrounus
const token = ~~[Math.random() * 12345678];

function login(username){
    return {token, username}
}

function getUser(){

}

const user = login("albi_nasyabi");
console.log(user);