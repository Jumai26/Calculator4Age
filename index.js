const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const sendBtn = document.getElementById("btn")
const errorMessage = document.getElementById("error-message");
errorMessage.innerText = "";


const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = 1 + currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const todayDate = `${currentYear}-${currentMonth}-${currentDay}`;

const ageDays = document.getElementById('ageday');
const ageMonths = document.getElementById('agemonth');
const ageYears = document.getElementById('ageyear');

function checkAge() {
  if (dayInput.value == "" && monthInput.value == "" && yearInput.value == "") {
    errorMessage.innerText = "No input made";
  } else if (dayInput.value < 1) {
    errorMessage.innerText = "Day is incorrect";
  } else if (dayInput.value > 29 && monthInput.value == 2) {
    errorMessage.innerText = "Day or Month is incorrect";
  } else if (dayInput.value > 31 ) {
    errorMessage.innerText = "day is incorrect";
  } else if (monthInput.value < 1 || monthInput.value > 12) {
    errorMessage.innerText = "month is incorrect";
  } else if (yearInput.value > currentYear) {
    errorMessage.innerText = "year is incorrect";
  } else {
    errorMessage.innerHTML = "";
    const inputDate = convertStringToDate(`${yearInput.value }-${month.value}-${day.value}`);
    const age = calculateAge(inputDate, currentDate);
    console.log(age);


  }
};

function convertStringToDate(yourDate) {
  const [year, month, date] = yourDate.split('-'); // Split the dateString into an array of year, month, and date
  const convertedDate = new Date(year, month - 1, date);   // Create a new Date object
  return convertedDate;
};

function calculateAge(inputDate, currentDate) {
  let years = currentDate.getFullYear() - inputDate.getFullYear();
  let months = currentDate.getMonth() - inputDate.getMonth();
  let days = currentDate.getDate() - inputDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += (months < 0 ? 12 : 1);
  }
  if (days < 0) {
      const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
      days += prevMonthLastDay;
      months--;
  }

  localStorage.setItem("years-data", years);
  localStorage.setItem("months-data", months);
  localStorage.setItem("days-data", days);

  return { years, months, days };
}

const fixAge = () => {
  ageYears.innerText = localStorage.getItem("years-data");
  ageMonths.innerText = localStorage.getItem("months-data");
  ageDays.innerText = localStorage.getItem("days-data");
}

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  checkAge();
  fixAge();
});
