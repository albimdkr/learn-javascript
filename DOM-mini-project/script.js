function time(){
    const now = new Date();
    const minute = now.getMinutes();
    const hours = now.getHours();
    const second = now.getSeconds();

    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    
    //const printAll = (`${hours}:${minutes} - ${day}/${month}/${years}/${date}`);
    const printAll = (`May, ${date} ${year} ${hours}:${minute}:${second}`);
    document.getElementById('date-time').innerHTML = printAll;
}


function changeYearColor(){
    const yearElement = document.getElementById('year');
    const color = ['red', 'blue', 'green', 'orange'];
    let index = 0;

    setInterval(() => {
        yearElement.style.color = color[index % color.length];
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

time();
changeYearColor();
changeDateTimeBackground();

