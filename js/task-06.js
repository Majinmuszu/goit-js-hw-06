const qs = (selector) => document.querySelector(selector);
const log = (something) => console.log(something);

const input = qs('#validation-input');
const validate = () => {
    if(input.value.length>=6) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
};
input.addEventListener('blur', validate);