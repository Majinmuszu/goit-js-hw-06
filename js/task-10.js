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
  const boxes = [];
  const box = document.createElement('div');
  for (let i = 1; i <= value; i++) {
    boxes.push(i);
  };
  boxes.forEach((e) => {
    divOfBoxes.append(box);

  })
  
  
  log(boxes);
  log(amount)
};
const destroyBoxes = () => {

};
addBoxes.addEventListener('click', createBoxes);
removeBoxes.addEventListener('click', destroyBoxes)