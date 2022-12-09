const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert("Please fill in all the fields!");
  }

  let userData = {
    email: email.value,
    password: password.value,
  };

  if (email.value.length > 0 && password.value.length > 0) {
    console.log(userData);
    alert("Successfully!");
  }

  event.currentTarget.reset();
}
