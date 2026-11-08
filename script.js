const button = document.getElementById("clickButton");
const counterText = document.getElementById("counter");
const message = document.getElementById("message");

let clicks = 0;

button.addEventListener("click", () => {
  clicks += 1;
  counterText.textContent = `Clicks: ${clicks}`;
  message.textContent = "You clicked the button!";
});
