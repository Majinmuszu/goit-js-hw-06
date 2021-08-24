const qs = (selector) => document.querySelector(selector);
const log = (something) => console.log(something);

const input = qs("#name-input");
const output = qs("#name-output");

const updateName = () => {
  output.textContent = input.value;
};
input.addEventListener("input", updateName);
