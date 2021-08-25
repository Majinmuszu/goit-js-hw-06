function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const qs = (selector) => document.querySelector(selector);
const log = (something) => console.log(something);

const numOfBoxes = qs('input')
const addBoxes = qs('button[data-create]')
const removeBoxes = qs('button[data-destroy]')
const divOfBoxes = qs('#boxes')
log(addBoxes)
log(removeBoxes)
log(numOfBoxes)

const createBoxes = (amount) => {
  let value = numOfBoxes.value;
  let size = 30;

  for (let i = 1; i <= value; i++) {
    const box = document.createElement('div');
    divOfBoxes.append(box);
    let divBox = qs('#boxes>div');
    log(divBox)
    divBox.style.backgroundColor = 'red' ;
    divBox.style.width = '30px';
    divBox.style.height = '30px';
  };
  
  
  log(boxes);
  log(amount)
};
const destroyBoxes = () => {
  let divBox = qs('#boxes>div');
  divBox.remove();
};
addBoxes.addEventListener('click', createBoxes);
removeBoxes.addEventListener('click', destroyBoxes)