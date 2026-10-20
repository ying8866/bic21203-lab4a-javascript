const inputEl = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const resultP = document.getElementById("result");

function checkInput() {
  const rawVal = inputEl.value.trim();

  if (rawVal === "" || isNaN(Number(rawVal))) {
    resultP.textContent = "Please enter a valid number!";
  } else {
    const num = Number(rawVal);
    if (num < 10) {
      resultP.textContent = "The number is lower than 10";
    } else if (num > 10) {
      resultP.textContent = "The number is higher than 10";
    } else {
      resultP.textContent = "The number is equal to 10";
    }
  }
}

checkBtn.addEventListener("click", checkInput);