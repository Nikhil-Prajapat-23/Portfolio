const navButtons = document.querySelectorAll(".nav-link, .hero-actions button");
const sections = document.querySelectorAll(".page-section");

function showSection(id) {
  sections.forEach((section) => {
    section.classList.toggle("active", section.id === id);
  });

  navButtons.forEach((btn) => {
    if (btn.classList.contains("nav-link")) {
      btn.classList.toggle("active", btn.dataset.target === id);
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    if (target) showSection(target);
  });
});

const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contact-status");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contactStatus.textContent = "Sending...";
  setTimeout(() => {
    contactStatus.textContent =
      "Thanks for reaching out! I’ll get back to you soon.";
    contactForm.reset();
  }, 700);
});

const askForm = document.getElementById("askForm");
const askStatus = document.getElementById("ask-status");
const askAnonymous = document.getElementById("ask-anonymous");
const askNameInput = document.getElementById("ask-name");

askForm.addEventListener("submit", (e) => {
  e.preventDefault();
  askStatus.textContent = "Submitting your question...";
  setTimeout(() => {
    askStatus.textContent = "Received. I appreciate your question!";
    askForm.reset();
  }, 700);
});

askAnonymous.addEventListener("change", () => {
  if (askAnonymous.checked) {
    askNameInput.value = "";
    askNameInput.disabled = true;
  } else {
    askNameInput.disabled = false;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();