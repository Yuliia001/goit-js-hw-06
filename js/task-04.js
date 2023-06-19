// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
/* <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
    </div> */

let counterValue = 0;
const refs = {
    decrementBtn: document.querySelector('button[data-action = "decrement"]'),
    span: document.querySelector('#value'),
    incrementBtn: document.querySelector('button[data-action = "increment"]')
}
const { decrementBtn, span, incrementBtn } = refs;

decrementBtn.addEventListener('click', onClickDown);
function onClickDown() {
    counterValue -= 1;
    span.textContent = counterValue;

}
incrementBtn.addEventListener('click', onClickUp);
function onClickUp() {
    counterValue += 1;
    span.textContent = counterValue;

}