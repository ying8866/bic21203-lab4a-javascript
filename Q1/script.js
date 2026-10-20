const messageP = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

function changeMessage() {
  messageP.textContent = "Hello there!";
}

changeBtn.addEventListener("click", changeMessage);