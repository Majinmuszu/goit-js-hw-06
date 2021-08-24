const qs = (selector) => document.querySelector(selector);
const log = (something) => console.log(something);

const form = qs('.login-form');
const inputEmail = qs('input[name="email"]');
const inputPassword = qs('input[name="password"]');
const btnSubmit = qs('button')
const formValidation = (e) => {
    e.preventDefault();
    const {email, password} = e.currentTarget;

    if(inputEmail.value === "" || inputPassword.value === "") {
        alert('Wypełnij wszystkie pola formularza, mordeczko XD');
    } else {
        log(`Email: ${email.value}, Password: ${password.value}`)
        e.currentTarget.reset();
    };
}
form.addEventListener('submit', formValidation);