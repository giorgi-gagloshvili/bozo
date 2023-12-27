const bedges = document.querySelectorAll(".bedge");
const modal = document.querySelector(".modal-layer");
const closeModal = document.querySelector(".modal-close img");
const modalTitle = document.querySelector(".modal-title");
const modalText = document.querySelector(".modal-text");
const modalButton = document.querySelector(".modal-btn");
const cloudsElement = document.querySelectorAll(".clouds");
const modalBox = document.querySelector(".modal-box");
const modalSecondLink = document.querySelector("#modal-second-link");
const modalButtonBox = document.querySelector(".modal-button-box");

console.log(window.innerWidth);

for (let i = 0; i < cloudsElement.length; i++) {
  cloudsElement[i].style.width = `${window.innerWidth}px`;
  // cloudsElement[i].firstElementChild.style.width = `${window.innerWidth}px`;
}
for (let i = 0; i < bedges.length; i++) {
  bedges[i].addEventListener("click", (e) => {
    modal.classList.add("open-modal");
    // console.log(e.target.parentElement);
    modalTitle.innerHTML = e.target.parentElement.dataset.title;
    modalText.innerHTML = e.target.parentElement.dataset.text;
    if (e.target.parentElement.dataset.link) {
      modalButton.style.backgroundColor = e.target.parentElement.dataset.bg;
      modalButton.style.display = "block";
      modalButton.innerHTML = e.target.parentElement.dataset.btntext;
      modalButton.href = e.target.parentElement.dataset.link;
    } else {
      modalButton.style.display = "none";
    }

    if (e.target.parentElement.dataset.market) {
      modalButtonBox.style.display = "flex";
    } else {
      modalButtonBox.style.display = "none";
    }

    console.log(e.target.parentElement.dataset.secondlink);
    if (e.target.parentElement.dataset.secondlink) {
      modalBox.classList.add("open-modal");
      modalSecondLink.href = e.target.parentElement.dataset.secondlink;
    } else {
      modalBox.classList.remove("open-modal");
    }
  });
}

closeModal.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
