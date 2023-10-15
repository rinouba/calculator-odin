// Inputs
const result = document.querySelector("#result");
const btn = document.querySelectorAll(".btn");

let number1;
let number2;
let operator;

//Get Value

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    {
      result.value += e.target.value;
    }
  });
});

// Add Operator
function add(a, operator, b) {
  a = number1;
  b = number2;
  operator = "+";
}

// Subtract Operator
function subtract(a, b) {
  return a - b;
}

// Multiply Operator
function multiply(a, b) {
  return a * b;
}

// divide Operator
function divide(a, b) {
  return a / b;
}

// Operate Funcation

var func = function (string) {
  return new Function("return (" + string + ")")();
};

function operate() {
  result.value = func(result.value);
}

// Clear Result

function clearz() {
  result.value = "";
}
