//WINDOW METHOD
//Window alert()
function callAlert(){
    var strAlert = "Hello, I'm Alert Method";
    alert(strAlert);
}

//Window prompt()
function callPrompt(){
    var strEnter = prompt('Enter Your Name');
    document.getElementById("promptMethod").innerHTML ="Your name is : " + strEnter;
}

//window condirm()
function callConfirm(){
    var strConfirm = 'Are You Sure To Delete ?';
    confirm(strConfirm);
}