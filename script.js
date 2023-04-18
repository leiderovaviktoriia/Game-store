const btnOpenModal = document.querySelector(`#button_modal`);
const btnCloseModal = document.querySelector(`.close-modal`);
const overlay = document.querySelector(`.overlay`);
const modalWindow = document.querySelector(`.modal`);

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
