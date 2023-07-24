function getPilihanComputer (){
    const comp = Math.random();

    //ketika terdapat suatu return, maka program tidak akan membaca else if kebawah nya,
    // if( comp < 0.34 ){
    //     comp 'gajah';
    // } else if( comp >= 0.34 && comp < 0.67) {
    //     comp 'orang';
    // } else {
    //     comp 'semut'
    // }
    //maka ubah hanya satu statement saja, sesudah memakai return
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player){
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp = 'orang')? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return ( comp == 'gajah')? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp = 'orang')? 'KALAH!' : 'MENANG!';
}

//add event for ui
//menambahkan img putar untuk computer
function putarComputer(){
    const imgComputer = document.querySelector('.img-computer');
    const img = ['gajah', 'semut', 'orang'];
    
    //setinterval, merupakan fungsi untuk melakukan sesuait secara berulang, selama interval waktu tertentu
    let i = 0;
    const startTime = new Date().getTime(); //pada saat fungsi putarComputer dijalankan, ambil waktu saat itu, nanti 1 detik kemudian akan diberhentikan
    setInterval(function(){
        if ( new Date().getTime() - startTime > 1000){ //jika waktu selisih nya sudah 1 detik, maka berhentikan
            clearInterval;
            return; //supaya keluar dari function
        }
        imgComputer.setAttribute('src', 'img/' + img[i++] + '.png');
        if( i == img.length) i = 0; //agar jika lebih dari 3 gambar, maka kembali lagi ke nilai 0
    },100);
}

//not efficient 
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();

//     //kebetulan nama class nya sama adalah = gajah
//     const pilihanPlayer = pGajah.className;

//     //meentukan hasil
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     //get gambarComputer
//     const imgComputer = document.querySelector('.img-computer');

//     //DOM manipulation : setAttribute
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     //set info
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

//Efficiency Code
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function() {

        //calling function
        const pilihanComputer = getPilihanComputer();

        //pil, untuk mennetukan gambar yang player click saja
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        
        putarComputer();

        //biarkan fungsi putarComputer selesai dulu, baru jalankan dibawah ini
        setTimeout(function(){
            //set img for compoter when player click
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
    });
});

