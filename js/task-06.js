const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  inputEl.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");

  if (
    inputEl.value.length === Number(inputEl.dataset.length) &&
    inputEl.classList.contains("invalid")
  ) {
    inputEl.classList.replace("invalid", "valid");
  }
}

