import "../scss/app.scss";
// const R = require("ramda");
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const isEven = numbersArray.filter((n) => n % 2 === 0);
  for (let i = 0; i <= isEven.length; i++) {
    const element = isEven[i];
    let li = document.createElement("li");
    li.textContent = element;
    ul.appendChild(li);
  }
});
