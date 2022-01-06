const digit = document.getElementById('digit');
const mClear = document.getElementById('mc');
const mPlus = document.getElementById('m+');
const mMinus = document.getElementById('m-');
const mRecall = document.getElementById('mr');
const AC = document.getElementById('ac');
const plusMinus = document.getElementById('+-');
const btnDivide = document.getElementById('/');
const btnMultiply = document.getElementById('x');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const btnMinus = document.getElementById('-');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const btnPlus = document.getElementById('+');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const equal = document.getElementById('=');
const ansDisp = document.getElementById('ans');

let operator = null;
let currentNumber = '';

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, num1, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2);
    };
};

function addNumber(a) {
    currentNumber += a.id;
    digit.textContent = currentNumber;
};

one.addEventListener('click', () => {
    addNumber(one);
});

two.addEventListener('click', () => {
    addNumber(two);
});

three.addEventListener('click', () => {
    addNumber(three);
});

four.addEventListener('click', () => {
    addNumber(four);
});

five.addEventListener('click', () => {
    addNumber(five);
});

six.addEventListener('click', () => {
    addNumber(six);
});

seven.addEventListener('click', () => {
    addNumber(seven);
});

eight.addEventListener('click', () => {
    addNumber(eight);
});

nine.addEventListener('click', () => {
    addNumber(nine);
});