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

console.log(currentDate);
console.log(currentDay);
console.log(currentMonth);
console.log(currentYear);
console.log(todayDate);

function checkAge() {
  if (dayInput.value < 1) {
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
      months += (months < 0 ? 12 : 0);
  }
  if (days < 0) {
      const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
      days += prevMonthLastDay;
      months--;
  }

  return { years, months, days };
}

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  checkAge();
});
