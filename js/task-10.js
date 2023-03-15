function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input")
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesCollection = document.querySelector('#boxes');

const expectedNumber = inputNumber.value;


function createBoxes(amount){
  amount = inputNumber.value;
if(amount > 0){
  for(let i = 0; i <= amount; i += 1){
  let divEl = boxesCollection.createElement('div');
    divEl.style.width = `${20 + 10 * i}px`;
    divEl.style.height = `${20 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesCollection.append(divEl);
    console.log(boxesCollection)
  }
}}

createBtn.addEventListener('click', createBoxes);

function destroyBoxes(){
      boxesCollection.innerHTML = '';
  };

destroyBtn.addEventListener('click', destroyBoxes);
