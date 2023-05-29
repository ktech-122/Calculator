const display = document.querySelector('#input')
const numbers = document.querySelectorAll('.keys > button')
const operators = document.querySelectorAll('.operator')
const result = document.querySelector('#result')
const clear = document.getElementById('clear')
let buttonInput = '';


const buttonHandler = (e) => {
    buttonInput = e.target.value;
    display.innerHTML += buttonInput;
};

numbers.forEach((number) => {
    number.addEventListener('click', buttonHandler);
});

operators.forEach((operator) => {
    operator.addEventListener('click', buttonHandler);
});

result.addEventListener('click', () => {
    try {

        display.innerHTML = eval(display.innerHTML);
    } catch (error) {
        display.innerHTML = 'Error'
    }
});

clear.addEventListener('click', function (e) {
    display.innerHTML = '';
})