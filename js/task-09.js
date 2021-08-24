function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const qs = (selector) => document.querySelector(selector);
const log = (something) => console.log(something);

const btn = qs('.change-color');
const color = qs('.color');
const body = qs('body')

const changeColor = () => {
  const randomColor = getRandomHexColor();
  color.textContent = randomColor;
  body.style.backgroundColor = randomColor;
  btn.style.backgroundColor = randomColor;
  //button color change added for fun and better look IMO :)
}
btn.addEventListener('click', changeColor);