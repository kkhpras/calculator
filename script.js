let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';


// Ambil elemen di class calculator-screen
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
  calculatorScreen.value = number;
};


// Ambil elemen di class number
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// Fungsi input number
const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// Ambil elemen button di class operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

// Fungsi operator
const inputOperator = (operator) => {
// untuk menangani masalah ketika tombol operator diklik beberapa kali
  if (calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = '';
}

// Ambil elemen di class equal-sign
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
})

// Fungsi kalkulasi
const calculate = () => {
  let ruslt = '';
  switch(calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;

    case "-":
        result = prevNumber - currentNumber;
        break;

    case "*":
        result = prevNumber * currentNumber;
        break;
    case "/":
        result = prevNumber / currentNumber;
        break;
    default:
        return;
  }
  currentNumber = result
  calculationOperator = '';
}

// Ambil elemen di class .all-clear
const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
})

// Fungsi clearAll
const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
};

// Mengambil element <button> dengan class ".decimal"
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
})

// Fungsi inputDecimal
inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return;
  }
  currentNumber +=dot;
};
