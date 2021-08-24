const qs = (selector) => document.querySelector(selector);
const log = (something) => console.log(something);

const range = qs("#font-size-control");
const text = qs("#text");

const changeFontSize = () => {
  text.style.fontSize = `${range.value}px`;
};

range.addEventListener("input", changeFontSize);
