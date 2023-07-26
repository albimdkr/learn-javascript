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
const closeIcon = document.querySelectorAll('.close');
closeIcon.forEach(function(element){
    element.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();//mencegah aksi bawaan misalkan di element a href
    });
});