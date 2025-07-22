// A simple function to show interaction on button click
function showThankYou() {
  const message = document.createElement("p");
  message.textContent = "Thank you for reading!";
  message.style.color = "#1e88e5";
  message.style.fontWeight = "bold";
  document.querySelector("main").appendChild(message);
}
