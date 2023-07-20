//case 1 > btnClick change backgroundColor
const btn = document.querySelector('section button');
btn.onclick = function (){
    document.body.classList.toggle('biru-muda');
};


//case 2 > btn Random backgroundColor
const btnRandom = document.createElement('button');
const btnValue = document.createTextNode('Random Color');
const form = document.querySelector('input[name=formRgb]').value;

btnRandom.appendChild(btnValue);
btnRandom.setAttribute('type', 'button');
btn.after(btnRandom);

btnRandom.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    const rgb = 'rgb('+r+','+g+','+b+')';
    document.getElementById('result').value = rgb; //set to form
    document.body.style.backgroundColor = rgb;
});


//case 3 > with input type change backgroundColor
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    const rgb = 'rgb('+r+','+g+','+b+')';
    document.body.style.backgroundColor = rgb;
    document.getElementById('result').value = rgb; //set to form

});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    const rgb = 'rgb('+r+','+g+','+b+')';
    document.body.style.backgroundColor = rgb;
    document.getElementById('result').value = rgb;//set to form
 });

 sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    const rgb = 'rgb('+r+','+g+','+b+')';
    document.body.style.backgroundColor = rgb;
    document.getElementById('result').value = rgb;//set to form
 });


//Generate number rgb to form
// const form = document.querySelector('input[name=formRgb]');
// form.oninput = function (){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     form.document.createTextNode = 'rgb('+r+','+g+','+b+')';
// }
