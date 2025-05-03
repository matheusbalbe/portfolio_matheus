// Função para monitorar a rolagem
window.onscroll = function () {
  const header = document.querySelector("header");
  // Verifica se a rolagem passou de 50px
  if (window.scrollY > 50) {
    header.classList.add("scrolled"); // Adiciona a classe quando rolar
  } else {
    header.classList.remove("scrolled"); // Remove a classe quando voltar ao topo
  }
};

const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// // Pega o checkbox do switch de tema
// const themeSwitch = document.getElementById("theme-switcher");
// const projetosinfo = document.querySelector(".sobre-mim");
// // Verifica se o tema escuro foi armazenado previamente no localStorage
// if (localStorage.getItem("theme") === "dark") {
//   document.body.classList.add("dark-theme");
//   document.body.classList.remove("light-theme");
//   themeSwitch.checked = true; // Marca o switch no modo escuro
// } else {
//   document.body.classList.add("light-theme");
//   document.body.classList.remove("dark-theme");
//   themeSwitch.checked = false; // Desmarca o switch no modo claro
// }

// // Adiciona o evento de mudança no checkbox para alternar entre os temas
// themeSwitch.addEventListener("change", () => {
//   if (themeSwitch.checked) {
//     document.body.classList.add("dark-theme");
//     projetosinfo.classList.add("dark-theme");
//     projetosinfo.classList.remove("light-theme");
//     document.body.classList.remove("light-theme");
//     localStorage.setItem("theme", "dark"); // Salva no localStorage a escolha do tema escuro
//   } else {
//     document.body.classList.add("light-theme");
//     projetosinfo.classList.add("light-theme");
//     projetosinfo.classList.remove("dark-theme");
//     document.body.classList.remove("dark-theme");
//     localStorage.setItem("theme", "light"); // Salva no localStorage a escolha do tema claro
//   }
// });

const text = "Matheus Balbe";
const heroH1name = document.getElementById("heroH1name");
let index = 0;

function typeEffect() {
  if (index <= text.length) {
    heroH1name.textContent =
      text.substring(0, index) + (index < text.length ? "|" : ""); // Add the blinking cursor
    index++;
    setTimeout(typeEffect, 100); // Adjust speed by changing the timeout value
  } else {
    heroH1name.textContent = text; // Remove the cursor after typing is complete
  }
}

typeEffect();

// seção de projetos

// Obtendo todos os cards de projeto
const cards = document.querySelectorAll(".projetos-card");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-btn");

// Função para abrir o modal
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block"; // Abre o modal
  });
});

// Função para fechar o modal
closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none"; // Fecha o modal
  });
});

// Fechar o modal ao clicar fora da caixa de conteúdo
window.addEventListener("click", (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
