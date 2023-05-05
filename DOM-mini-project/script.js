// const years = document.getElementsById('year');
// const dateTimeElement = document.getElementById('datetime')
// const challengeElement = document.getElementById('challenge');

function changeColor(){
    const yearElement = document.getElementById('year');
    const color = ['red', 'blue', 'green', 'orange'];
    let index = 0;

    setInterval(() => {
        yearElement.style.color = colors[index % colors.length];
        index++;
    }, 1000);
}

