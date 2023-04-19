const btnOpenModal = document.querySelector(`#button_modal`);
const btnCloseModal = document.querySelector(`.close-modal`);
const overlay = document.querySelector(`.overlay`);
const modalWindow = document.querySelector(`.modal`);


const btnChooseTeam = document.querySelector(`#button_team`);
const btnCloseTeam = document.querySelector(`.closeing-modal`);
const modalWindowTeam = document.querySelector(`.modaling`);
const overlayTeam = document.querySelector(`.overlaying`);

btnOpenModal.addEventListener("click", function () {
  console.log("click");
  overlay.classList.toggle("hidden");
  modalWindow.classList.toggle("hidden");
});

btnCloseModal.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  modalWindow.classList.toggle("hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  modalWindow.classList.toggle("hidden");
});




btnChooseTeam.addEventListener("click", function () {
  console.log("click");
  overlayTeam.classList.toggle("hidden");
  modalWindowTeam.classList.toggle("hidden");
});

btnCloseTeam.addEventListener("click", function () {
  overlayTeam.classList.toggle("hidden");
  modalWindowTeam.classList.toggle("hidden");
});

overlayTeam.addEventListener("click", function () {
  overlayTeam.classList.toggle("hidden");
  modalWindowTeam.classList.toggle("hidden");
});
