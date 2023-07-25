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
// parentNode > node  |  parentElement > element  |  nextSibling > node 
// | nextElementSibling > element  |  previousSibling > node  |   previousElementSibling > element
// const closeIcon = document.querySelectorAll('.close');
// for (let i = 0; closeIcon.length; i++){
//     closeIcon[i].addEventListener('click', function(e){
//         // closeIcon[i].parentElement.style.display = 'none'; opsi 1
//         // e.target.parentElement.style.display = 'none'; opsi 2
//     });
// };

//Efficiency Code using ForEach
const closeIcon = document.querySelectorAll('.close');
closeIcon.forEach(function(element){
    element.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    });
});