const openModal = document.querySelector(".modal-open");
const modal = document.querySelector(".cont-modal");
const closeModal = document.querySelector(".close-modal");


function displayModal() {
    modal.style.display = "flex";
}

function hiddenModal() {
    modal.style.display = "none";
}


openModal.addEventListener("click", displayModal);
closeModal.addEventListener("click", hiddenModal);