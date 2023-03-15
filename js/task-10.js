function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input")
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesCollection = document.querySelector('#boxes');

let standartSize = 20;

function createBoxes(amount){
if(amount > 0){
  for(let i = 1; i <= amount; i += 1){
  let divEl = document.createElement('div');
   standartSize += 10;
    divEl.style.width = `${standartSize}px`;
    divEl.style.height = `${standartSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesCollection.append(divEl);
     }
}}

createBtn.addEventListener('click', () => {createBoxes(inputNumber.value)});

function destroyBoxes(){
      boxesCollection.innerHTML = '';
      // inputNumber.value = ''; 
      standartSize = 20;
  };

destroyBtn.addEventListener('click', destroyBoxes);
