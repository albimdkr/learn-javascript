//CALLBACK
//Study Case Login Asynchrounus
const token = ~~[Math.random() * 12345678];
const pictures = ["1.jpg","2.jpg","3.jpg"];

function login(username, callback){ //supaya bisa dapat value dari sini, simpan paramater callback
    console.log('Processing validation data...')
    setTimeout(() => { 
        callback ({token, username});//setup value callback, bisa di akses lewat si callback berikan di params console.log response
    }, 200)
}

function getUser(token, callback){ //yang harus dilakukan adalah beri params callback di getUser 
    console.log('Processing apiKey now...')
    if (token) 
    setTimeout(()=> { //misalkan untuk mendapatkan apiKey, perlu waktu 500ms
        callback ({apiKey : "xkey123"});//ubah menjadi callback bukan return
    }, 500)
}


function getPictures (apiKey, callback){ //
    console.log('Processing pictures now...')
    if (apiKey)
    setTimeout(() => {//kataknlah get pictre karna berat jadi butuh waktu 1500ms
        callback ({pic : pictures})
    }, 1500) 
}

//disebut nya function nested(bersarang) callback
const user = login('albi_nasyabi', function(response){//access parameter callback dengan buat function
    const {token} = response;
    //bagaimana lanjut ke getUser? kan token nya sudah punya di dalam response mata method callback
    getUser(token, function(response) {
        const {apiKey} = response;
        getPictures(apiKey, function(response){
            const {pic} = response;
            console.log(pic);
            
        });
    });
});


