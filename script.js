const text = "Matheus Balbe";
const heroH1name = document.getElementById("heroH1name");
let index = 0;

function typeEffect() {
if (index <= text.length) {
    heroH1name.textContent = text.substring(0, index) + (index < text.length ? "|" : ""); // Add the blinking cursor
    index++;
    setTimeout(typeEffect, 100); // Adjust speed by changing the timeout value
} else {
    heroH1name.textContent = text; // Remove the cursor after typing is complete
}
}

typeEffect();




// seção de projetos

// Obtendo todos os cards de projeto
const cards = document.querySelectorAll('.projetos-card');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-btn');

// Função para abrir o modal
cards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block'; // Abre o modal
  });
});

// Função para fechar o modal
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none'; // Fecha o modal
  });
});

// Fechar o modal ao clicar fora da caixa de conteúdo
window.addEventListener('click', (event) => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
