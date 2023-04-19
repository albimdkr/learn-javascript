//PROMISE - ASYNC AWAIT
//Note 
// Resolve = success
// Reject = failed 


//Study Case Login Asynchrounus
const token = ~~[Math.random() * 12345678];
const pictures = ["1.jpg","2.jpg","3.jpg"];

function login(username){ 
    console.log('Processing validation data...')
    return new Promise((success, failed ) => {
        setTimeout(() => { 
            if (username != "albi_nasyabi") failed ("sorry wrong data");
            success({token});
        }, 200)
    });
}

function getUser(token){
    console.log('Processing apiKey now...')
    return new Promise ((success, failed) => {
        if (!token){
            failed("sorry, no token, cannot access")
        } else {
            setTimeout(()=> {
                success ({apiKey : "xkey123"});
            }, 500)
        }
    });
}

function getPictures (apiKey){ //
    console.log('Processing pictures now...')
    return new Promise((success, failed) => {
        if (!apiKey){
            failed("sorry, no apiKey!")
        } else {
            setTimeout(() => {
                success ({pic : pictures})
            }, 1500) 
        }
    });
}

async function userShow(){
    try {
        const {token} = await login("albi_nasyabi"); //beri keywoard await
        const {apiKey} = await getUser(token);
        const {pic} = await getPictures(apiKey);
    
        //tampilkan
        console.log(`
        your token : ${token}
        your apiKey : ${apiKey}
        request user picture :  ${pic}
        `);
    }catch(err) {
        console.log(err);
    }
}
userShow();
