document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: true
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("¡Gracias por contactarte con Look Good!");
    form.reset();
  });
});

