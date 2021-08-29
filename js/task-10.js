function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);
const log = (something) => console.log(something);

const input = qs('input');
const create = qs('button[data-create]');
const destroy = qs('button[data-destroy]');
const boxes = qs('#boxes');
const divBoxes = qsa("#boxes div");
const value = input.value;

const createBoxes = () => {
  let size = 20;
  for (let i = 0; i < value; i++) {
    size += 10;
    let randomColor = getRandomHexColor;
    
    const box = document.createElement('div');   

    box.style.backgroundColor = `${randomColor}`;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.margin = "3px";
    box.style.borderRadius = "2px";

    boxes.append(box);
  };
};

const destroyBoxes = () => {
}; 

create.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);