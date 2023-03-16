function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnSwitch = document.querySelector('button');
const outputEl = document.querySelector('.color');


btnSwitch.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  outputEl.textContent = newColor;
});
