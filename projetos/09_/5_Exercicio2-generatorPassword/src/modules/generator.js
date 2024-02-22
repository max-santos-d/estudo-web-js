import passwordGenerator from './passwordGenerator.js';

const display = document.querySelector('.display');
const quantity = document.querySelector('.quantity');
const number = document.querySelector('.number');
const uppercase = document.querySelector('.uppercase');
const lowercase = document.querySelector('.lowercase');
const symbols = document.querySelector('.symbols');
const button = document.querySelector('.generate');

export default function generator() {
    button.addEventListener('click', event => {
        event.preventDefault();

        const password = passwordGenerator(
            quantity.value,
            number.checked,
            uppercase.checked,
            lowercase.checked,
            symbols.checked
        );
    
        display.value = password;
    });
};
