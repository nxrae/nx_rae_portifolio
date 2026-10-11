
document.addEventListener("DOMContentLoaded", () => {
  // MENU DE NAVEGAÇÃO ☰
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    });

    // Fecha o menu ao selecionar uma seção
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  // JANELA DE CONTATO 💌
  const contactModal = document.getElementById("contactModal");
  const closeButton = document.querySelector(".modal-close");

  function openContactModal() {
    if (!contactModal) return;

    contactModal.classList.add("active");
    contactModal.setAttribute("aria-hidden", "false");
  }

  function closeContactModal() {
    if (!contactModal) return;

    contactModal.classList.remove("active");
    contactModal.setAttribute("aria-hidden", "true");
  }

  // Permite chamar a função pelo onclick do HTML
  window.toggleContactModal = function () {
    if (!contactModal) return;

    const isOpen = contactModal.classList.contains("active");

    if (isOpen) {
      closeContactModal();
    } else {
      openContactModal();
    }
  };

  if (closeButton) {
    closeButton.addEventListener("click", closeContactModal);
  }

  if (contactModal) {
    contactModal.addEventListener("click", (event) => {
      if (event.target === contactModal) {
        closeContactModal();
      }
    });
  }

  // Fecha a janela com a tecla ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeContactModal();

      if (navLinks && menuButton) {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
      }
    }
  });

  // NAVEGAÇÃO SUAVE ENTRE AS SEÇÕES
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      const target = document.querySelector(href);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        history.replaceState(null, "", href);
      }
    });
  });

  // INSTAGRAM 📸
  // Os links existentes para o Instagram recebem o endereço correto.
  document.querySelectorAll("a").forEach((link) => {
    const label = (
      (link.getAttribute("aria-label") || "") +
      " " +
      (link.innerText || "") +
      " " +
      (link.getAttribute("title") || "")
    ).toLowerCase();

    if (label.includes("instagram")) {
      link.href = "https://www.instagram.com/nx_raae/";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
});
