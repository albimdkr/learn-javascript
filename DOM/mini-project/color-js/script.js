//case 1 > btnClick change backgroundColor
const btn = document.querySelector('section button');
btn.onclick = function (){
    document.body.classList.toggle('biru-muda');
};


//case 2 > btn Random backgroundColor
const btnRandom = document.createElement('button');
const btnValue = document.createTextNode('Random Color');

btnRandom.appendChild(btnValue);
btnRandom.setAttribute('type', 'button');
btn.after(btnRandom);

btnRandom.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +',100,100)';
});


//case 3 > with input type change backgroundColor
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
const form = document.querySelector('input[name=formRgb]').value;
sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    const rgb = 'rgb('+r+','+g+','+b+')';
    document.getElementById('result').value = rgb;

});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    const rgb = 'rgb('+r+','+g+','+b+')';
    document.getElementById('result').value = rgb;
 });

 sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    const rgb = 'rgb('+r+','+g+','+b+')';
    document.getElementById('result').value = rgb;
 });


//Generate number rgb to form
// const form = document.querySelector('input[name=formRgb]');
// form.oninput = function (){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     form.document.createTextNode = 'rgb('+r+','+g+','+b+')';
// }
