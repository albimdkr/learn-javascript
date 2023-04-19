//PROMISE
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
            failed("sorry, no api Key!")
        } else {
            setTimeout(() => {
                success ({pic : pictures})
            }, 1500) 
        }
    });
}

const user = login("albi_nasyabi");
user.then((response) => {
    // console.log('lalalalala', x)
    // console.log('token : '+ response)
    const {token} = response;
    getUser(token).then ((response) => {
        const {apiKey} = response;
        console.log(apiKey);
    }).catch((err) => {console.log(err)})
    getPictures(apiKey).then ((response) => {
        const {pictures} = response;
        console.log(pic);
    }).catch((err) => {console.log(err)})
}).catch((err) => {console.log(err)})
// console.log(user); akan pending