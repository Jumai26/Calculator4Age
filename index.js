let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let btn = document.getElementById('btn');
let currentDay = new Date() //.toLocaleDateString('en-GB');
// let currentYear = currentDay.getYear();
// let currentMonth = currentDay.getMonth();
// let currentDate = currentDay.getDate();
console.log(currentDay.toLocaleDateString('en-GB'));
let inputedDate = new Date(` ${day.value}/${month.value}/${year.value} `);
console.log(inputedDate.toLocaleDateString('en-GB'));



// function checkAge() {
// if (day.value < 01) {
//     alert('Day is incorrect');
// } else if (day.value > 31) {
//     alert('day is incorrect');
// } else if (month.value < 1) {
//     alert('month is incorrect');
// }else if (month.value > 12) {
//     alert('month is incorrect');
// }else if (year.value > 2023) {
//     alert('year is incorrect');
// } else {
//     let inputedDate = new Date(` ${day.value}/${month.value}/${year.value} `); 
//     console.log(inputedDate.toLocaleDateString('en-GB'));
// }
// }


// let realAge = currentDay.getTime() - inputedDate.getTime();
// let realAgeDiff = (realAge / 31536000000).toFixed(0);


// btn.addEventListener('click', validation);

// function validation() {
//  let realAge = currentDate - inputedDate;
//  console.log(realAge);
// }



btn.addEventListener('click', inputedDate);


