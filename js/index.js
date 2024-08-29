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

// Hover effect
document.querySelectorAll('.child').forEach(child => {
  child.addEventListener('mouseover', () => {
    child.parentElement.classList.add('hovered');
  });

  child.addEventListener('mouseout', () => {
    child.parentElement.classList.remove('hovered');
  });
});









