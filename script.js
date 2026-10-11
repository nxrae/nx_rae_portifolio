document.addEventListener('DOMContentLoaded', () => {
  // Configuração do Instagram nos botões de redes sociais
  const instagramUrl = 'https://www.instagram.com/nx_raae?dlrf=ODhoN3htYWxjNmVx';
  const instaLinks = document.querySelectorAll('a[aria-label="Instagram"]');
  instaLinks.forEach(link => {
    link.href = instagramUrl;
  });

  // Menu Mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('open');
    });

    // Fechar o menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Modal de Contato
  const contactModal = document.getElementById('contactModal');
  const contactTriggers = document.querySelectorAll('[data-contact]');
  const modalClose = document.querySelector('.modal-close');

  function openModal(e) {
    if (e) e.preventDefault();
    if (contactModal) {
      contactModal.classList.add('open');
      contactModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeModal() {
    if (contactModal) {
      contactModal.classList.remove('open');
      contactModal.setAttribute('aria-hidden', 'true');
    }
  }

  contactTriggers.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal && contactModal.classList.contains('open')) {
      closeModal();
    }
  });
});
