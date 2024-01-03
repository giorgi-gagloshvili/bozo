const bedges = document.querySelectorAll(".bedge");
const bedgesSvg = document.querySelectorAll(".icon");
const dicon = document.querySelectorAll(".dicon");
const modalLayer = document.querySelector(".modal-layer");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close img");
const modalTitle = document.querySelector(".modal-title");
const modalText = document.querySelector(".modal-text");
const modalButton = document.querySelector(".modal-btn");
const cloudsElement = document.querySelectorAll(".clouds");
const modalBox = document.querySelector(".modal-box");
const modalSecondLink = document.querySelector("#modal-second-link");
const modalButtonBox = document.querySelector(".modal-button-box");
const listIcon = document.querySelector("#bozo-list");
// const listIcon = document.querySelector("#bozo-list");

// console.log(window.innerWidth);

for (let i = 0; i < cloudsElement.length; i++) {
  cloudsElement[i].style.width = `${window.innerWidth}px`;
  // cloudsElement[i].firstElementChild.style.width = `${window.innerWidth}px`;
}
const getModal = (collection) => {
  for (let i = 0; i < collection.length; i++) {
    collection[i].addEventListener("click", (e) => {
      modalLayer.classList.add("open-modal");
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
      if (e.target.parentElement.dataset.title === "Bozo Perps") {
        modalButton.style.backgroundColor = e.target.parentElement.dataset.bg;
        modalButton.style.borderColor = e.target.parentElement.dataset.border;
        modalButton.style.color = e.target.parentElement.dataset.color;
      } else {
        modalButton.style.color = "#fff";
      }

      if (e.target.parentElement.dataset.link === "/") {
        modalButton.style.pointerEvents = "none";
      } else {
        modalButton.style.pointerEvents = "auto";
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
};

getModal(bedges);
getModal(bedgesSvg);
getModal(dicon);

closeModal.addEventListener("click", () => {
  modalLayer.classList.remove("open-modal");
});

modalLayer.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-layer")) {
    console.log(e);
    modalLayer.classList.remove("open-modal");
  }
});

function animateIcon(id) {
  var icon = document.getElementById(id);
  if (!icon) return; // Exit if the icon is not found

  var startPos = -10;
  var endPos = 0;
  var duration = 2000; // Duration of the animation in milliseconds

  function animate() {
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = (timestamp - start) / duration;
      var yPos = startPos + (endPos - startPos) * Math.sin(progress * Math.PI);
      icon.setAttribute("y", yPos);

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  animate();
}

document.addEventListener("DOMContentLoaded", function () {
  animateIcon("icon1");
  animateIcon("icon2");
  animateIcon("icon3");
  animateIcon("icon4");
  animateIcon("icon5");
  animateIcon("icon6");
  animateIcon("icon7");
  animateIcon("icon8");
  animateIcon("dicon1");
  animateIcon("dicon2");
  animateIcon("dicon3");
  animateIcon("dicon4");
  animateIcon("dicon5");
  animateIcon("dicon6");
  animateIcon("dicon7");
  animateIcon("dicon8");
  animateIcon("micon1");
  animateIcon("micon2");
  animateIcon("micon3");
  animateIcon("micon4");
  animateIcon("micon5");
  animateIcon("micon6");
  animateIcon("micon7");
  animateIcon("micon8");
});
