//METHOD TIME JAVASCRIPT
//Full Time
const timeNow = new Date();
document.getElementById("methodTime-1").innerHTML = "Full Time : " + timeNow + " (Refresh)";

//Get Years
const yearNow = new Date();
const gettingYear = (yearNow.getFullYear());
document.getElementById("methodTime-2").innerHTML = "Get Years : " + gettingYear + " (Refresh)";

//Get Month
const monthNow = new Date();
const gettingMonth = (monthNow.getMonth()); //month in javascript 0-11
document.getElementById("methodTime-3").innerHTML = "Get Month : " + gettingMonth + " (Refresh)";

//Get Date
const dateNow = new Date();
const gettingDate = (dateNow.getDate());
document.getElementById("methodTime-4").innerHTML = "Get Date : " + gettingDate + " (Refresh)";

//Get Day 
const dayNow = new Date();
const gettingDay = (dayNow.getDay());
document.getElementById("methodTime-5").innerHTML = "Get Day : " + gettingDay + " (Refresh)";

//Get  Hours
const hoursNow = new Date();
const gettingHours = (hoursNow.getHours());
document.getElementById("methodTime-6").innerHTML = "Get Hours : " + gettingHours + " (Refresh)";

//Get Minute 
const minuteNow = new Date();
const gettingMinute = (minuteNow.getMinutes());
document.getElementById("methodTime-7").innerHTML = "Get Minutes : " + gettingMinute + " (Refresh)";

//Get Seconds
const secondsNow = new Date();
const gettingSeconds = (secondsNow.getSeconds());
document.getElementById("methodTime-8").innerHTML = "Get Seconds : " + gettingSeconds + " (Refresh)";

//Get Times, This method give time in milliseconds starting from January 1, 1970.
//use getTime()
const timesNow1 = new Date();
const gettingTime = (timesNow1.getTime());
document.getElementById("methodTime-9").innerHTML = "Get Time : " + gettingTime + " (Refresh)";

//use Date.now()
const timesNow2 = Date.now();
//console.log(timesNow2);//this is the number of seconds passed from January 1, 1970 to January 4
const timeInSeconds = new Date().getTime();
const cekTimes = (timesNow2 == timeInSeconds);//to cek TRUE or FALSE
document.getElementById("methodTime-10").innerHTML = "Getting Times Method 2 : " + cekTimes;

//Let's Merge all method in one line
const now = new Date();
const minutes = now.getMinutes();
const hours = now.getHours();
const day = now.getDay(); //0-6
const month = now.getMonth(); //0-11
const years = now.getFullYear();
const date = now.getDate();

//Print all
const printAll = (`${hours}:${minutes} - ${day}/${month}/${years}/${date}`);
document.getElementById("print-all").innerHTML = "Merge all method : " + printAll;





