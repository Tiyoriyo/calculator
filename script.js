const digit = document.getElementById('digit');
const mClear = document.getElementById('mc');
const mPlus = document.getElementById('m+');
const mMinus = document.getElementById('m-');
const mRecall = document.getElementById('mr');
const AC = document.getElementById('ac');
const CE = document.getElementById('ce');
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
let equalCheck = false;
let prevOperator;
let prevCurrentNumber;
let memory = '';
digit.textContent = 0;


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
        updatePrevNumbers();
        equalCheck = true;
        num2 = '';
        currentNumber = '';
        digit.textContent = num1;
    } else if (num1 && !num2 && !currentNumber && operator) {
        operator = a;
    } else if (num1 && !num2 && currentNumber && !operator) {
        operator = a;
        num1 = +currentNumber;
        currentNumber = '';
    }
};

function equalOperation() {
    if (equalCheck === true && num1 && !num2 && currentNumber && operator && !prevCurrentNumber && !prevOperator) {
        updatePrevNumbers();
        num2 = +currentNumber;
        num1 = operate(operator, num1, num2);
        num2 = '';
        operator = '';
        currentNumber = '';
        digit.textContent = num1;
        console.log('ya');
    } else if (equalCheck === true && prevCurrentNumber && prevOperator && !operator && !currentNumber) {
        num2 = prevCurrentNumber;
        operator = prevOperator;
        num1 = operate(operator, num1, num2);
        num2 = '';
        operator = '';
        currentNumber = '';
        digit.textContent = num1;
        console.log('kis');
    } else if (equalCheck === true && prevCurrentNumber && prevOperator && operator && currentNumber) {
        updatePrevNumbers();
        num2 = +currentNumber;
        num1 = operate(operator, num1, num2);
        num2 = '';
        operator = '';
        currentNumber = '';
        digit.textContent = num1;
    } else if (num1 && !num2 && !currentNumber && operator) {
        return;
    } else if (!num1 && !num2 && !currentNumber && operator) {
        return;
    } else {
        console.log('yo');
        num2 = +currentNumber;
        num1 = operate(operator, num1, num2);
        num2 = '';
        operator = '';
        currentNumber = '';
        digit.textContent = num1; 
        equalCheck = true;
    }
}

function updatePrevNumbers() {
    prevOperator = operator;
    prevCurrentNumber = +currentNumber;
}

AC.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    currentNumber = '';
    prevCurrentNumber = '';
    prevOperator = '';
    equalCheck = false;
    digit.textContent = currentNumber;
});

CE.addEventListener('click', () => {
    if (digit.textContent == num1) {
        return;
    } else {
        currentNumber = currentNumber.slice(0, -1);
        digit.textContent = currentNumber;
    }
})

mClear.addEventListener('click', () => {
    memory = '';
});

mPlus.addEventListener('click', () => {
    memory = +memory;
    memory += +num1;
});

mMinus.addEventListener('click', () => {
    memory = +memory;
    memory -= +num1;
});

mRecall.addEventListener('click', () => {
    if (!memory) {
        return;
    } else {
        currentNumber = memory;
        digit.textContent = currentNumber;
    }
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