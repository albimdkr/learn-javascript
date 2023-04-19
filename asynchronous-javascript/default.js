//CALLBACK
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
const pictures = ["1.jpg","2.jpg","3.jpg"];

//01. login syarat nya (username)
function login(username){ //awal, generate token dari login
    console.log('Processing validation data...')

    //anggaplah ketika login selalu ada jeda waktu delay request ke server anggaplah setTimeout 200ms
    setTimeout(() => { //1. undifined
        return {token, username};
    }, 200)
    // return {token, username}
}

//02. getUser sarannya (token) di ambil dari func login
function getUser(token){ //kedua, terus dapet apiKey dari getUser
    if (token) return {apiKey : "xkey123"};
}

//03. getPicture syaratnya (apiKey) yang didapat dari func getUser ketika berhasil di eksekusi 
function getPictures (apiKey){//ketiga, terus dapatin picturenya dari getPictures
    if (apiKey) return pictures
}


const user = login('albi_nasyabi');
console.log(user); //1. undifined

// const user = login("albi_nasyabi"); //input username = user
// console.log(user.token);
// const apiKey = getUser(user.token);
// console.log(apiKey);

// const getUserPictures = getPictures(apiKey);
// console.log(getUserPictures);