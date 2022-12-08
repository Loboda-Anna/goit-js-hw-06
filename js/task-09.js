const changeColorBtn = document.querySelector(".change-color");
const colorHexEl = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColorBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColorBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorHexEl.textContent = document.body.style.backgroundColor;
}
