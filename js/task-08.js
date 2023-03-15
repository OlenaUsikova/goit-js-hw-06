const formEl = document.querySelector("form");
const emailInputEl = document.querySelector("email");
const passwordInputEl = document.querySelector("password");
const submitBtnEl = document.querySelector("submit");


formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;

      if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
      };
      const formData = {email: email.value, password: password.value,};
      console.log(formData);
      event.currentTarget.reset()
}