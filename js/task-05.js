const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onNameEnter);

function onNameEnter() {
  !nameInput.value
    ? (nameOutput.textContent = "Anonymous")
    : (nameOutput.textContent = nameInput.value);
}
