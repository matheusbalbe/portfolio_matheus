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

// const text = "Matheus Balbe";
// const heroH1name = document.getElementById("heroH1name");
// let index = 0;

// function typeEffect() {
//   if (index <= text.length) {
//     heroH1name.textContent =
//       text.substring(0, index) + (index < text.length ? "|" : ""); // Add the blinking cursor
//     index++;
//     setTimeout(typeEffect, 100); // Adjust speed by changing the timeout value
//   } else {
//     heroH1name.textContent = text; // Remove the cursor after typing is complete
//   }
// }

// typeEffect();

// seção de projetos

// Obtendo todos os cards de projeto
const cards = document.querySelectorAll(".projetos-card");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-btn");

// Função para abrir o modal
// // Função para abrir o modal
// function openModal(modalId) {
//   document.getElementById(modalId).style.display = "block";
// }

// // Função para fechar o modal
// function closeModal(modalId) {
//   document.getElementById(modalId).style.display = "none";
// }

// Fecha o modal quando o fundo escuro é clicado
window.onclick = function(event) {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function(modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

// Variável para rastrear inicialização dos carrosséis
const initializedCarousels = new Set();

// Função para inicializar todos os carrosséis nos modais
function initCarousels() {
  const modals = document.querySelectorAll('.modal');
  
  modals.forEach(modal => {
    const modalId = modal.id;
    // Verificar se esse carrossel já foi inicializado
    if (initializedCarousels.has(modalId)) {
      return;
    }
    
    const prevBtn = modal.querySelector('.prev-btn');
    const nextBtn = modal.querySelector('.next-btn');
    const images = modal.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    
    // Ocultar todas as imagens exceto a primeira
    for (let i = 1; i < images.length; i++) {
      images[i].style.display = 'none';
    }
    
    // Adicionar event listeners para os botões
    if (prevBtn && nextBtn && images.length > 0) {
      prevBtn.addEventListener('click', () => {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].style.display = 'block';
      });
      
// Funções para abrir e fechar modais
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'flex';
  
  // Garantir que o carrossel seja exibido corretamente
  const images = modal.querySelectorAll('.carousel-image');
  if (images.length > 0) {
    // Esconder todas as imagens
    images.forEach(img => img.style.display = 'none');
    // Mostrar a primeira imagem
    images[0].style.display = 'block';
  }
  
  // Inicializar carrossel quando o modal for aberto
  initCarousels();
}
      // Marcar este carrossel como inicializado
      initializedCarousels.add(modalId);
    }
  });
}

// Funções para abrir e fechar modais
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
  // Inicializar carrossel quando o modal for aberto
  initCarousels();
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Menu toggle para mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }
  
  // Inicializar carrosséis quando a página carregar
  initCarousels();
});