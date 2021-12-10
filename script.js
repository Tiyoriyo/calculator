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

let ans = 0;
let currentNumber = '0';
let number1;
let number2;
let currentOperator = '';
let equalCheck = false;

digit.textContent = ans;

AC.addEventListener('click', () => {
    ans = 0;
    currentNumber = '0';
    number1 = '';
    number2 = '';
    currentOperator = '';
    equalCheck = false;
    digit.textContent = ans;
})

equal.addEventListener('click', () => {
    if (number1 && !number2 && !currentOperator && currentNumber) {
        number1 = currentNumber;
        currentNumber = '';
        digit.textContent = number1;
    } else if (!number1 && !number2 && !currentNumber) {
        return;
    } else if (!number2 && equalCheck == true) {
        currentOperator = '';
        digit.textContent = ans;
    } else if (!number1 && !number2 && currentNumber && !currentOperator) {
        number1 = currentNumber;
        currentNumber = '';
        digit.textContent = number1;
    } else if (!number1) {
        number1 = currentNumber;
        digit.textContent = number1;
        currentNumber = '';
    } else {
        number2 = currentNumber;
        currentNumber = '';
        ans = operate(currentOperator, number1, number2);
        currentOperator = ''
        number2 = ''
        number1 = ans;
        equalCheck = true;
        digit.textContent = number1;  
    }
});

btnMultiply.addEventListener('click', () => {
    if (!number1) {
        currentOperator = '*';
        number1 = currentNumber;
        currentNumber = '';
    } else if (number1 && !number2 && equalCheck == true) {
        equalCheck = false;
        currentOperator = '*'
    } else if (number1 && !number2 && currentNumber && currentOperator != '*') {
        equalCheck = false;
        number2 = currentNumber;
        currentNumber = '';
        ans = operate(currentOperator, number1, number2);
        number2 = ''
        number1 = ans;
        currentOperator = '*'
        digit.textContent = number1; 
    } else if (!number2 && !currentNumber) {
        currentOperator = '*';
    } else if (number1 && !number2 && currentNumber) {
        equalCheck = false;
        number2 = currentNumber
        currentNumber = '';
        ans = operate(currentOperator, number1, number2);
        number2 = ''
        number1 = ans;
        digit.textContent = number1; 
    }
});

btnPlus.addEventListener('click', () => {
    if (!number1) {
        currentOperator = '+';
        number1 = currentNumber;
        currentNumber = '';
    } else if (number1 && !number2 && equalCheck == true) {
        equalCheck = false;
        currentOperator = '+'
    } else if (number1 && !number2 && currentNumber && currentOperator != '+') {
        equalCheck = false;
        number2 = currentNumber;
        currentNumber = '';
        ans = operate(currentOperator, number1, number2);
        number2 = ''
        number1 = ans;
        currentOperator = '+'
        digit.textContent = number1; 
    } else if (!number2 && !currentNumber) {
        currentOperator = '+';
    } else if (number1 && !number2 && currentNumber) {
        equalCheck = false;
        number2 = currentNumber
        currentNumber = '';
        ans = operate(currentOperator, number1, number2);
        number2 = ''
        number1 = ans;
        digit.textContent = number1; 
    }
});


btnMinus.addEventListener('click', () => {
    if (!number1) {
        currentOperator = '-';
        number1 = currentNumber;
        currentNumber = '';
    } else if (number1 && !number2 && equalCheck == true) {
        equalCheck = false;
        currentOperator = '-'
    } else if (number1 && !number2 && currentNumber && currentOperator != '-') {
        equalCheck = false;
        number2 = currentNumber;
        currentNumber = '';
        ans = operate(currentOperator, number1, number2);
        number2 = ''
        number1 = ans;
        currentOperator = '-'
        digit.textContent = number1; 
    } else if (!number2 && !currentNumber) {
        currentOperator = '-';
    } else if (number1 && !number2 && currentNumber) {
        equalCheck = false;
        number2 = currentNumber
        currentNumber = '';
        ans = operate(currentOperator, number1, number2);
        number2 = ''
        number1 = ans;
        digit.textContent = number1; 
    }
});

btnDivide.addEventListener('click', () => {
    if (!number1) {
        currentOperator = '/';
        number1 = currentNumber;
        currentNumber = '';
    } else if (number1 && !number2 && equalCheck == true) {
        equalCheck = false;
        currentOperator = '/'
    } else if (number1 && !number2 && currentNumber && currentOperator != '/') {
        equalCheck = false;
        number2 = currentNumber;
        currentNumber = '';
        ans = operate(currentOperator, number1, number2);
        number2 = ''
        number1 = ans;
        currentOperator = '/'
        digit.textContent = number1; 
    } else if (!number2 && !currentNumber) {
        currentOperator = '/'
    } else if (number1 && !number2 && currentNumber) {
        equalCheck = false;
        number2 = currentNumber
        currentNumber = '';
        ans = operate(currentOperator, number1, number2);
        number2 = ''
        number1 = ans;
        digit.textContent = number1; 
    }
});

one.addEventListener('click', function() {
    addNumber(1);
});

two.addEventListener('click', function() {
    addNumber(2);
});

three.addEventListener('click', function() {
    addNumber(3);
});

four.addEventListener('click', function() {
    addNumber(4);
});

five.addEventListener('click', function() {
    addNumber(5);
});

six.addEventListener('click', function() {
    addNumber(6);
});

seven.addEventListener('click', function() {
    addNumber(7);
});

eight.addEventListener('click', function() {
    addNumber(8);
});

nine.addEventListener('click', function() {
    addNumber(9);
});

zero.addEventListener('click', () => {
    if (currentNumber.indexOf('.') > -1 || currentNumber > 0) {
        currentNumber += '0';
        digit.textContent = currentNumber;
    } else if (currentNumber == '') {
        currentNumber += '0';
        digit.textContent = currentNumber;
    } else {
        return;
    }
});

decimal.addEventListener('click', () => {
    if (currentNumber.includes('.')) {
        return;
    } else {
        currentNumber += '.';
        digit.textContent = currentNumber;
    }
});

function addNumber(a) {
    if (currentNumber.indexOf('.') > -1 || currentNumber > 0) {
        currentNumber += a;
        digit.textContent = currentNumber;
    } else if (currentNumber == 0){
        currentNumber = '';
        currentNumber += a;
        digit.textContent = currentNumber;
    };
};

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}

function operate(operator, a, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    }
}