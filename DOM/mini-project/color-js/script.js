//case 1 > btnClick change backgroundColor
const btn = document.querySelector('section#a button');
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
// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru = document.querySelector('input[name=sBiru]');
// const resultColor = document.getElementById('result-color');
// sMerah.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     const rgb = 'rgb('+r+','+g+','+b+')';
//     document.body.style.backgroundColor = rgb;
//     document.getElementById('result').value = rgb; //set to form

// });

// sHijau.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     const rgb = 'rgb('+r+','+g+','+b+')';
//     document.body.style.backgroundColor = rgb;
//     document.getElementById('result').value = rgb;//set to form
//  });

//  sBiru.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     const rgb = 'rgb('+r+','+g+','+b+')';
//     document.body.style.backgroundColor = rgb;
//     document.getElementById('result').value = rgb;//set to form
//  });

// Effeciency code
const range = document.querySelector('input');
for (let i = 0; i < range.length; i++){
    range[i].addEventListener('input', function(){
        const r = range[0].value;
        const g = range[1].value;
        const b = range[2].value;
        const rgb = `rgb(${r},${g},${b})`;
        document.body.style.backgroundColor = rgb;
        document.getElementById('result').value = rgb;
    });
}

//changing color by mouse
document.body.addEventListener('mousemove', function(e){
    //search cordinate
    //console.log(e.clientX);

    //size browser : windows
    //console.log(window.innerWidth);

    //generate rgb : 1 / lebar 289 * 255 
    //x=red
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);

    //y=green
    const yPos = Math.round((e.clientY / window.innerWidth) * 255);
    
    //100=blue

    //set
    const rgb = `rgb(${xPos}, ${yPos}, 100)`;
    document.body.style.backgroundColor = rgb;

});