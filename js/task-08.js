const formEl = document.querySelector('form');
const emailInputEl = formEl.querySelector('[name="email"]');
const passwordInputEl = formEl.querySelector(`[name="password"]`);
const submitBtnEl = document.querySelector('submit');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  const formData = {
    email: emailInputEl.value,
    password: passwordInputEl.value,
  };
  console.log(formData);
  event.currentTarget.reset();
}
