let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let btn = document.getElementById('btn');
let currentDate = new Date();
console.log(currentDate);
// let currentDay = currentDate.getDate();
// let currentMonth = 1 + currentDate.getMonth();
// let currentYear = currentDate.getFullYear();
// let inputedDate = ` ${day}/${month}/${year} `;


function checkAge() {
if (day.value < 01) {
    alert('Day is incorrect');
} else if (day.value > 31) {
    alert('day is incorrect');
} else if (month.value < 1) {
    alert('month is incorrect');
}else if (month.value > 12) {
    alert('month is incorrect');
}else if (year.value > 2023) {
    alert('year is incorrect');
} else {
    let inputedDate = day.value + "/ " + month.value + "/ " + year.value ; 
    console.log(inputedDate);
}
}

btn.addEventListener('click', checkAge());






// let realAge = currentDay.getTime() - inputedDate.getTime();
// let realAgeDiff = (realAge / 31536000000).toFixed(0);


// btn.addEventListener('click', validation);

// function validation() {
//  let realAge = currentDate - inputedDate;
//  console.log(realAge);
// }






