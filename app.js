const inputContainer = document.querySelector(".form__input");
const formEmail = document.querySelector(".form__email");
const formValidationText = document.querySelector(".form__validation-text");

formEmail.addEventListener("input", (e) => {
  const value = e.target.value;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailRegex.test(value)) {
    inputContainer.classList.add("margin-bottom");
    formValidationText.classList.remove("hide");
  } else {
    inputContainer.classList.remove("margin-bottom");
    formValidationText.classList.add("hide");
  }
});
