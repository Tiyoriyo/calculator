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
let num1;
let num2;
let equalCheck;

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

function logIt() {
    console.log(num1);
    console.log(num2);
    console.log(currentNumber);
    console.log(operator);
}

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

function setOperator(a) {
    if (!num1 && !num2) {
        operator = a;
        num1 = +currentNumber;
        currentNumber = '';
    } else if (num1 && !num2 && !operator && !currentNumber) {
        operator = a;
    } else if (num1 && !num2 && currentNumber && operator) {
        num2 = +currentNumber;
        num1 = operate(operator, num1, num2);
        operator = a;
        num2 = '';
        currentNumber = '';
        digit.textContent = num1;
    } 
};

function equalOperation() {
    num2 = +currentNumber;
    num1 = operate(operator, num1, num2);
    num2 = '';
    operator = '';
    currentNumber = '';
    digit.textContent = num1;
}

AC.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    operator = '';
    currentNumber = '';
    digit.textContent = currentNumber;
});

equal.addEventListener('click', equalOperation);

btnPlus.addEventListener('click', () => {
    setOperator('+');
});

btnMinus.addEventListener('click', () => {
    setOperator('-');
});

btnMultiply.addEventListener('click', () => {
    setOperator('*');
});

btnDivide.addEventListener('click', () => {
    setOperator('/');
});

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

zero.addEventListener('click', () => {
    if (currentNumber == '0') {
        return;
    } else {
        currentNumber += 0;
        digit.textContent = currentNumber; 
    };
});

decimal.addEventListener('click', () => {
    if (currentNumber.indexOf('.') > -1) {
        return;
    } else if (currentNumber == '') {
        currentNumber += '0.';
        digit.textContent = currentNumber;
    } else {
        currentNumber += '.';
        digit.textContent = currentNumber;
    }
});