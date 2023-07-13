//case 1
const btn = document.querySelector('section button');
btn.onclick = function (){
    document.body.classList.toggle('biru-muda');
};


//case 2
const btnRandom = document.createElement('button');
const btnValue = document.createTextNode('Random Color');

btnRandom.appendChild(btnValue);
btnRandom.setAttribute('type', 'button');
btn.after(btnRandom);

btnRandom.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +',100,100)';
});



