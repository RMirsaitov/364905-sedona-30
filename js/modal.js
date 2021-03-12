const modalButton = document.querySelector(".search__button");
const modal = document.querySelector(".modal");
const modalArrivalDate = document.querySelector(".arrival-date");
const modalDepartureDate = document.querySelector(".departure-date");
const modalQuantityAdults = document.querySelector(".quantity-adults");
const modalQuantityKids = document.querySelector(".quantity-kids");
const modalForm = document.querySelector(".modal__form");

let isStorageSupport = true;
let storageAdults = "";
let storageKids = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageKids = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

modalButton.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.remove("modal-error");
  modal.classList.toggle("modal-show");
  if (storageAdults) {
    modalQuantityAdults.value = storageAdults;
  }
  if (storageKids) {
    modalQuantityKids.value = storageKids;
    modalArrivalDate.focus();
  } else {
    modalArrivalDate.focus();
  }
});

modalForm.addEventListener("submit", function (event) {
  if (
    !modalArrivalDate.value ||
    !modalDepartureDate.value ||
    !modalQuantityAdults ||
    !modalQuantityKids
  ) {
    event.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", modalQuantityAdults.value);
      localStorage.setItem("kids", modalQuantityKids.value);
    }
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      event.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});
