const btnExc = document.querySelector(".btn-exc");
const openModal = document.querySelector(".modal-open");
const btnShare = document.querySelector(".btn-share");
const closeModal = document.querySelector(".close-modal");
const modalSection = document.querySelector(".modal");

function handleResult() {
  const wannabeInp = document.querySelector(".wannabe-inp");
  const timeInp = document.querySelector(".time-inp");
  const wannabeValue = wannabeInp.value;
  const timeValue = parseInt(timeInp.value);
  const result = document.querySelector(".cont-result");
  const loadingImg = document.querySelector(".result-loading");

  if (wannabeValue === "") {
    alert("입력해 주세요.");
    return;
  } else if (timeValue === "") {
    alert("입력해 주세요.");
    return;
  } else if (timeValue > 24) {
    alert("하루는 24시간입니다.");
    return;
  } else if (timeValue > 16) {
    alert("사람이 아니무니다.");
    return;
  } else if (timeValue <= 0) {
    alert("'1'이상의 숫자를 입력해 주세요.");
    return;
  }

  loadingImg.style.display = "block";

  setTimeout(() => {
    const wannabeResult = document.querySelector(".wannabe-value");
    const timeResult = document.querySelector(".time-value");
    loadingImg.style.display = "none";
    result.style.display = "flex";
    wannabeResult.innerHTML = wannabeValue;
    timeResult.innerHTML = parseInt(10000 / timeValue);
  }, 1200);
}

function displayModal() {
  modalSection.style.display = "none";
}

function hiddenModal() {
  modalSection.style.display = "none";
}

function copyUrlToClipboard() {
  let url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("url이 복사되었습니다.");
    })
    .catch((error) => {
      alert("url이 복사되지 않았습니다.");
      console.log(error);
    });
}

btnExc.addEventListener("click", handleResult);
openModal.addEventListener("click", displayModal);
closeModal.addEventListener("click", hiddenModal);
btnShare.addEventListener("click", copyUrlToClipboard);

window.onclick = function (event) {
  if (event.target == modalSection) {
    hiddenModal();
  }
};
