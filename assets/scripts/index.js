const bedges = document.querySelectorAll(".bedge");
const modal = document.querySelector(".modal-layer");
const closeModal = document.querySelector(".modal-close img");
const modalTitle = document.querySelector(".modal-title");
const modalText = document.querySelector(".modal-text");
const modalButton = document.querySelector(".modal-btn");

for (let i = 0; i < bedges.length; i++) {
  bedges[i].addEventListener("click", (e) => {
    modal.classList.add("open-modal");
    console.log(e.target.parentElement);
    modalTitle.innerHTML = e.target.parentElement.dataset.title;
    modalText.innerHTML = e.target.parentElement.dataset.text;
    modalButton.style.backgroundColor = e.target.parentElement.dataset.bg;
  });
}

closeModal.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
