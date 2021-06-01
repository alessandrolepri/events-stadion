let smallNumber = 50;
let mediumNumber = 40;
let groupNumber = 35;
let total = document.getElementById("total");
let button = document.getElementById("buy");
let numberSelected;
let subTotal;
let confirmed = document.getElementById("confirmed");
let dayMessage = document.getElementById("message");
let errorMessage = document.getElementById("errorMessage");
let chooseDay = document.querySelector('input[name="chooseDay"]');

const attendeesSelected = () => {
  numberSelected = document.getElementById("selectAttendees").value;
  document.getElementById("attendes").innerHTML = numberSelected;
  confirmed.style.display = "block";
  price();
};

const price = () => {
  total.style.display = "block";
  button.style.display = "block";

  subTotal =
    numberSelected <= 3
      ? smallNumber
      : numberSelected <= 6
      ? mediumNumber
      : groupNumber;

  total.innerHTML = "£" + (subTotal * numberSelected).toFixed(2);

  !numberSelected ? resetPrice() : "";
};

const checkDate = () => {
  document.querySelectorAll("input")[2];
};

const resetPrice = () => {
  total.style.display = "none";
  button.style.display = "none";
  confirmed.style.display = "none";
};

const handleDateChange = ({ target: dateField }) => {
  dayMessage.innerHTML = "Day successfully selected!";
  errorMessage.innerHTML = "This date is not available";

  const {
      dataset: { unallowed = "[]" },
      value,
    } = dateField,
    unallowedDates = JSON.parse(unallowed),
    valid = !unallowedDates.includes(value);

  if (!valid) {
    dateField.value = "";
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "This date is not available";
    dayMessage.style.display = "none";
  } else {
    dayMessage.style.display = "block";
    errorMessage.style.display = "none";
  }

  dateField.classList.toggle("invalid", !valid);

  setTimeout(function () {
    dayMessage.style.display = "none";
    errorMessage.style.display = "none";
  }, 5000);
};

chooseDay.addEventListener("change", handleDateChange);
