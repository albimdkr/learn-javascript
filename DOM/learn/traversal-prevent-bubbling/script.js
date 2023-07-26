//TRAVERSAL
//Penulusuran, Searcing, galeungan sawah:v by DOM tree

//DOM STANDAR, by default choose 1
// const container = document.getElementsByClassName('container')[0];
// const card = document.getElementsByClassName('card')[0];
// const closeIcon1 = document.getElementsByTagName('span')[2];

// closeIcon1.addEventListener('click', function(){
//     container.removeChild(card);
// });


//DOM TRAVERSAL
// const closeIcon = document.querySelectorAll('.close');
// for (let i = 0; closeIcon.length; i++){
//     closeIcon[i].addEventListener('click', function(e){
//         // closeIcon[i].parentElement.style.display = 'none'; opsi 1
//         // e.target.parentElement.style.display = 'none'; opsi 2
//     });
// };

// DOM TRAVERSAL METHOD
// parentNode > node

// parentElement > element 
const namaParentElement = document.querySelector('.nama');
console.log(namaParentElement.parentElement); //mengambil bapak
// const namaParentElement = document.querySelector('.nama');
// console.log(namaParentElement.parentElement.parentElement); //mengambil kakek

// nextSibling > node 
const catchSiblingNameNode = document.querySelector('.nama');
console.log(catchSiblingNameNode.nextSibling); //mengambil saudara kandung (kebawah), maka akan membaca node nya

// nextElementSibling > element
const catchSiblingNameElement = document.querySelector('.nama');
console.log(catchSiblingNameElement.nextElementSibling); //mengambil saudara kandung (kebawah), degan lansung menagmabil element nya

// previousSibling > node 
const catchPreviousSibling = document.querySelector('.nama');
console.log(catchPreviousSibling.previousSibling); //mengambil saudara kandung menggunakan node (sebelumnya), maka akan dibacanya node

// previousElementSibling > element
const catchPreviousElementSibling = document.querySelector('.nama');
console.log(catchPreviousElementSibling.previousElementSibling); //mengambil saudara kandung menggunakan node (sebelumnya), maka akan dibacanya node

//Efficiency Code using ForEach
// const closeIcon = document.querySelectorAll('.close');
// closeIcon.forEach(function(element){
//     element.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
           //PREVENT DEFAULT
//         e.preventDefault();//(preventDefault)mencegah aksi bawaan misalkan di element a href
           //EVENT BUBBLING
//         e.stopPropagation();//(eventBubbling)agar menghentaikan bubble yang berada di fungsi cards bawah
//     });
// });

//(FOR CASE EVENT BUBBLING) agar paham bagaiaman event bubbling bekerja
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok');
//     });
// });
//hal di atas akan tidak berjalan dengan baik apabila 
//terdapat suatu penambahan dalam element card nya, maka event click close tidak akan berjalan
//dengan baik apabila terdapat card yang baru.
//solusinya adalah dibawah

//Efficiency Code For Event Click in case adding new card
//untuk solution nya adalah menggunakan event di element kakek nya ialah .container
const container = document.querySelector('.container');
container.addEventListener('click', function(e){
    if (e.target.className == 'close'){ //gunakan e.target agar javascript tau target element mana yang user click
        e.target.parentElement.style.display = 'none';
        e.preventDefault(); //untuk jaga-jaga ketika click suatu link
    }
});
//dengan menggunakan event didalam container tersebut, maka javascript tidak peduli kalau terdapat perubahan dalam suatu element nya

