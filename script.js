document.addEventListener('DOMContentLoaded', () => {
// 1. Menu Mobile Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
​if (menuToggle && navLinks) {
menuToggle.addEventListener('click', () => {
const isOpen = navLinks.classList.toggle('open');
menuToggle.setAttribute('aria-expanded', isOpen);
});
​// Fecha o menu ao clicar em qualquer link de navegação
navLinks.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
navLinks.classList.remove('open');
menuToggle.setAttribute('aria-expanded', 'false');
});
});
}
​// 2. Modal de Contato
const contactTriggers = document.querySelectorAll('[data-contact]');
const contactModal = document.getElementById('contactModal');
const modalClose = contactModal ? contactModal.querySelector('.modal-close') : null;
​if (contactModal) {
contactTriggers.forEach(trigger => {
trigger.addEventListener('click', (e) => {
e.preventDefault();
contactModal.classList.add('open');
if (navLinks) navLinks.classList.remove('open');
});
});
​if (modalClose) {
modalClose.addEventListener('click', () => {
contactModal.classList.remove('open');
});
}
​// Fecha ao clicar fora do modal (no fundo escuro)
contactModal.addEventListener('click', (e) => {
if (e.target === contactModal) {
contactModal.classList.remove('open');
}
});
​// Fecha pressionando a tecla ESC
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && contactModal.classList.contains('open')) {
contactModal.classList.remove('open');
}
});
}
​// 3. Configuração do link do Instagram
const instagramLinks = document.querySelectorAll('a[aria-label="Instagram"]');
instagramLinks.forEach(link => {
link.href = 'https://www.instagram.com/nx_raae?dlrf=ODhoN3htYWxjNmVx';
link.target = '_blank';
link.rel = 'noopener';
});
});
