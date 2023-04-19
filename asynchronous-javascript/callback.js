//CALLBACK
//Study Case Login Asynchrounus
const token = ~~[Math.random() * 12345678];
const pictures = ["1.jpg","2.jpg","3.jpg"];

function login(username, callback){ //supaya bisa dapat value dari sini, simpan paramater callback
    console.log('Processing validation data...')

    setTimeout(() => { 
        callback ({token, username});//setup value callback
    }, 200)
}

function getUser(token){ 
    if (token) return {apiKey : "xkey123"};
}


function getPictures (apiKey){
    if (apiKey) return pictures
}


login('albi_nasyabi', function(){//access parameter callback dengan buat function
    console.log('getting data!');
});