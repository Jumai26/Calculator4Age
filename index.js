
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');


let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = 1 + currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let eachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let d = currentDay - day;
let m = currentMonth - month;
let y = currentYear - year;
let btn = document.getElementById('btn');


function checkAge() {
if (day.value < 01) {
    alert('Day is incorrect');
} else if (day.value > 31) {
    alert('day is incorrect');
} else if (month.value < 1) {
    alert('month is incorrect');
}else if (month.value > 12) {
    alert('month is incorrect');
}else (year.value > 2023); {
    alert('year is incorrect');
}

if (day > currentDay){
    currentDay = currentDay + eachMonth[currentMonth - 1];
    currentMonth = currentMonth - 1;
}

if(month > currentMonth){
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
} 

let birthCount = d + " / " + m + " / " + y;
  console.log(birthCount);
}

btn.addEventListener('click', checkAge);












