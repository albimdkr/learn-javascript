// const years = document.getElementsById('year');
// const dateTimeElement = document.getElementById('datetime')
// const challengeElement = document.getElementById('challenge');

function changeYearColor(){
    const yearElement = document.getElementById('year');
    const color = ['red', 'blue', 'green', 'orange'];
    let index = 0;

    setInterval(() => {
        yearElement.style.color = colors[index % colors.length];
        index++;
    }, 1000);
}

function changeDateTimeBackground(){
    const dateTimeElement = document.getElementById('date-time');
    const colors = ['purple', 'pink', 'cyan', 'magenta'];
    let index = 0;

    setInterval(() => {
        dateTimeElement.style.backgroundColor = colors[index % colors.length];
        index++;
    }, 1000);
}


changeYearColor();
changeDateTimeBackground();

