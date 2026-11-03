document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  };

  toggle.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(opened));
    toggle.setAttribute("aria-label", opened ? "Fechar menu" : "Abrir menu");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
});

// FORMULÁRIO DE CONTATO — DEMONSTRAÇÃO
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const feedback = document.querySelector("#form-feedback");

  feedback.textContent = "";
  feedback.style.display = "none";

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#contact-name").value.trim();

    feedback.textContent =
      `Obrigado, ${name}! Sua mensagem foi preenchida com sucesso. Esta é apenas uma demonstração: nenhum dado foi enviado à clínica.`;

    feedback.style.display = "block";
    feedback.style.color = "#b69a61";

    contactForm.reset();

    setTimeout(() => {
      feedback.textContent = "";
      feedback.style.display = "none";
    }, 7000);
  });
}

// MÁSCARA AUTOMÁTICA DE TELEFONE
const phoneInput = document.querySelector("#contact-phone");

if (phoneInput) {
  phoneInput.addEventListener("input", function () {
    let numbers = this.value.replace(/\D/g, "").slice(0, 11);

    if (numbers.length > 10) {
      this.value = numbers.replace(
        /^(\d{2})(\d{5})(\d{0,4}).*/,
        "($1) $2-$3"
      );
    } else if (numbers.length > 6) {
      this.value = numbers.replace(
        /^(\d{2})(\d{4})(\d{0,4}).*/,
        "($1) $2-$3"
      );
    } else if (numbers.length > 2) {
      this.value = numbers.replace(
        /^(\d{2})(\d{0,5}).*/,
        "($1) $2"
      );
    } else if (numbers.length > 0) {
      this.value = `(${numbers}`;
    }
  });
}