const hamburger = document.getElementById("button");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.textContent = nav.classList.contains("active") ? "✖" : "☰";
});
