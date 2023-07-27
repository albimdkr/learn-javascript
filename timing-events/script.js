//01. setTimeout()
//program akan menunggu dulu, llau di jalankan 1 kali
//setelah beberapa detik (sesuai yang di set) 
//maka akan di eksekusi
// penerapan : bisanaya suka di terapkan untuk waktu soal

//1.1 function declaration
//setTimeout(tampilkanPesan, 3000);

//1.2 anoymous function
const setTimeOutVar = setTimeout(() => {
    console.log('SetTimeOut Aman');
}, 5000);

const btnStop1 = document.getElementById('btnStop-1');
btnStop1.addEventListener('click', ()=> {
    //untuk menghentikan setTimeOut
    clearTimeout(setTimeOutVar);
    console.warn('Waduh setTimeout nya di stop cuy!');
});

//


//02. setInterval()
//sesuatu dijalankan tunggu beberapa waktu tertentu lalu dijalankan kembali tunggu dan dijalankan lagi
//secara berulang-ulang dengan 
//interval waktu tertentu


const setIntervalVar = setInterval(() => {
    console.log('setInterval OKE');
}, 1000);

const btnStop2 = document.getElementById('btnStop-2');
btnStop2.addEventListener('click', ()=> {
    clearInterval(setIntervalVar);
    console.warn('Waduh setInterval diberhentkan Bos!');
});
