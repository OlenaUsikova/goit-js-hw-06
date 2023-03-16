const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement]');
const incrementBtn = document.querySelector('button[data-action="increment]');
const counterValue = {
  value: 0,
};

function decrement() {
  counterValue.value -= 1;
  valueEl.textContent = counterValue.value;
}

function increment() {
  counterValue.value += 1;
  valueEl.textContent = counterValue.value;
}

decrementBtn.addEventListener('click', decrement);

incrementBtn.addEventListener('click', increment);
