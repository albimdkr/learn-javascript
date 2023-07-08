//DOM (Document Object Mode)
// Merepresentasikan suatu object
// DOM Tree


//1.DOM SELECTION
//document.getElementById() : memilih berdasarkan ID (spesifik-recommend)
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.innerHTML = 'ALBI MUDAKAR'; //mengubah text



//document.getElementByTagName() : mengmablikan HTMLCollection > Array (zero-based-recommend)
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'orange';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';



//document.getElementByClassName() : mengambalikan suatu HTMLCollection 
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'diubah dalam DOM className';



//document.querySelector() : CSS familiar > element (spesifik)
// const p4 = document.querySelector('#b p');
// p4.style.backgroundColor = 'gray';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.color = 'red';



//document.querySelectorAll() > element (zero-based)
//const p = document.querySelectorAll('p');
// p[0].style.backgroundColor = 'green';
// for(let i = 0; i < p.length;i++){
//     p[i].style.backgroundColor = 'blue';
// };



//NodeRoot
// const idb = document.getElementById('b');
// const p4 = idb.querySelector('p');
// p4.style.backgroundColor = 'orange';


//=============================================


//2.DOM MANIPULATION
//MANIPULATION ELEMENT
//method : innerHTML
//const a = document.getElementById('a');
//a.innerHTML = '<div>Hello World!</div>';



//method : style
//const judul = document.querySelector('#judul');
//judul.style.backgroundColor = 'green';



//method : set|get|removeAttribute()
//judul.setAttribute('name', 'albi');

//method : classList add()|remove()|toggle()|item()|contains()|replace()
//element.add()
//const p1 = document.getElementsByClassName('p1')[0];
//p1.classList.add('icon');

//element.remove()
//p1.classList.remove('icon');

//element.toggle() > true | false
//p1.classList.toggle('icon');
//document.body.classList.toggle('biru-muda'); //turn on

//element.item() > indentify class (zero-based)
//p1.classList.item(0)

//element.contains() > true | false > memastikan
//p1.classList.contains('p1'); //true

//element.replaced() > menggatikan class
//p1.classList.replace('satu', 'dua');


//=============================================

//MANIPULATION NODE
//document.createElement()
// const pBaru = document.createElement('p');
// //document.createTextNode()
// const teksPBaru = document.createTextNode('Paragraf Baru');

// //simpan
// //node.appendChild()
// pBaru.appendChild(teksPBaru);

// //sinpan pBaru di akhir section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// //buat wadah
// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');

// //simpan isi ke wadah
// liBaru.appendChild(teksLiBaru);

//atur isi ke tempatnya > perhatikan parent dan item sebelum nya
// const ul = document.querySelector('section#b ul'); //parent
// const li2 = ul.querySelector('li:nth-child(2)'); //item sebelumnya

//set isi ke dalam content
//node.insertBefore()
// ul.insertBefore(liBaru, li2);//2 paramater


//parentNode.removeChild()
// const link = document.getElementsByTagName('a')[0]; //karna dia satu satu nya
// sectionA.removeChild(link);

//parentNode.replaceChild()
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru!');

// h2Baru.appendChild(teksH2Baru);
// sectionB.replaceChild(h2Baru, p4);

//rekap yang telah di manipulation
// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';


//=============================================


//DOM EVENT (KEJADIAN)
//doc : https://developer.mozilla.org/en-US/docs/Web/Events
//by attribut, inline html
const p3 = document.querySelector('.p3');
function ubahWarnaP3(){
    p3.style.backgroundColor = 'lightblue';
}

//bymethod > event handler
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;
function ubahWarnaP2(){
    p2.style.backgroundColor = 'lightblue';
}

//bymethod : addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function (){
    const ul = document.querySelector('section#b ul');
    const liBaru =  document.createElement('li');
    const teksLiBaru = document.createTextNode('Item Baru');

    liBaru.appendChild(teksLiBaru);

    ul.appendChild(liBaru);
    // for(let i = 0; i < ul.length; i++){
    //     ul[i].style.backgroundColor = 'ligthgreen';
    // }
});  
