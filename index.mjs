document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const navbar = document.getElementById("navbar");

  btn.addEventListener("click", () => {
    navbar.classList.toggle("show");
    btn.textContent = navbar.classList.contains("show") ? "✖" : "☰";
  });
});

window.showMatchMessage = () => alert("Matching with a pet...");
window.contactUs = () => alert("Contacting...");
window.help = () => alert("How can we help?");
