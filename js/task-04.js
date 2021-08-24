const qs = (selector) => document.querySelector(selector);
const log = (something) => console.log(something);

let counterValue = 0;
const incrBtn = qs('button[data-action="increment"]');
const decrBtn = qs('button[data-action="decrement"]');
const counter = qs("#value");

const increaseCounterValue = () => {
    counterValue = counterValue +1;
    counter.textContent = counterValue;
};
const decreaseCounterValue = () => {
    counterValue = counterValue -1;
    counter.textContent = counterValue;
};
incrBtn.addEventListener("click", increaseCounterValue);
decrBtn.addEventListener("click", decreaseCounterValue);