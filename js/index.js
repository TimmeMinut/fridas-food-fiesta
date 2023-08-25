// Hamburger
hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  navLinks.classList.toggle("active");
});


// Aside / Nyhetsbrev
function toggleForm() {
  const newsletterForm = document.querySelector("form");
  newsletterForm.classList.toggle("show");
}











