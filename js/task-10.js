const boxesNumberEl = document.querySelector("#controls").firstElementChild;
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const mainBoxEl = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateClick);
destroyBtn.addEventListener("click", onDestroyClick);

function onCreateClick() {
  createBoxes(Number(boxesNumberEl.value));
}

function createBoxes(amount) {
  for (let i = 0, p = 30; i < amount, p < 30 + amount * 10; i += 1, p += 10) {
    const newBoxEl = document.createElement("div");
    newBoxEl.style.width = `${p}px`;
    newBoxEl.style.height = `${p}px`;
    newBoxEl.style.backgroundColor = getRandomHexColor();
    mainBoxEl.appendChild(newBoxEl);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onDestroyClick() {
  mainBoxEl.innerHTML = "";
  boxesNumberEl.value = "";
}
