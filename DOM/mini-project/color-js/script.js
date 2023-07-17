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

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
sMerah.addEventListener('change', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+',100)';
});

sHijau.addEventListener('change', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+',100)';
 });


