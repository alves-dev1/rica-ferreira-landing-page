// CONFIGURAÇÃO: substitua pelo WhatsApp de atendimento, com DDI + DDD + número.
const WHATSAPP_NUMBER = "5511999999999";

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const whatsappFloat = document.getElementById("whatsappFloat");
whatsappFloat.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, Rica! Gostaria de conversar sobre um projeto audiovisual.")}`;
whatsappFloat.target = "_blank";
whatsappFloat.rel = "noopener noreferrer";

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const tipo = document.getElementById("tipo").value;
  const mensagem = document.getElementById("mensagem").value.trim();
  const text = `Olá, Rica! Meu nome é ${nome}. Tenho interesse em: ${tipo}.\n\nSobre o projeto: ${mensagem}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
});
