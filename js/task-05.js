// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
};
const { input, span } = refs;

input.addEventListener('input', handlerQuery);

function handlerQuery(evt) {
span.textContent = evt.currentTarget.value;
};