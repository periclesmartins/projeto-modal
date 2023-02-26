// Selecionando o botão que abre o modal pelo ID
const openModalButton = document.querySelector("#open-modal");

// Selecionando o botão que fecha o modal pelo ID
const closeModalButton = document.querySelector("#close-modal");

// Selecionando o modal pelo ID
const modal = document.querySelector("#modal");

// Selecionando a tela de fundo do modal pelo ID
const fade = document.querySelector("#fade");

// Função que alterna as classes "hide" nos elementos modal e fade
const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

// Adicionando evento de clique nos botões e na tela de fundo para chamar a função toggleModal()
[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
