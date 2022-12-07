const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", decreaseValue);
incrementBtn.addEventListener("click", encreaseValue);

function decreaseValue() {
    valueEl.textContent = counterValue -= 1;
}

function encreaseValue() {
    valueEl.textContent = counterValue += 1;
}
