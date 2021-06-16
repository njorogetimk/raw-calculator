let operand1 = [];
let operand2 = "";
let operation = "";
let dipslay = "";

const plus = (val1, val2) => val1 + val2;
const multiply = (val1, val2) => val1 * val2;
const minus = (val1, val2) => val1 - val2;
const division = (val1, val2) => val1 / val2;

const reset = () => {
  operand1 = [];
  operand2 = "";
  operation = "";
  dipslay = "";
};

const operations = {
  "+": plus,
  "*": multiply,
  "-": minus,
  "/": division,
};

const digits = document.querySelectorAll(".digits");
digits.forEach((digit) => {
  digit.firstElementChild.addEventListener("click", (e) => {
    operand1.push(e.target.innerHTML);
    if (dipslay.length > 0) {
      dipslay = `${operand2} ${operation} ${operand1.join("")}`;
      answer.innerHTML = dipslay;
    } else {
      answer.innerHTML = operand1.join("");
    }
  });
});

const answer = document.querySelector(".answer").firstElementChild;

const addition = document.querySelector("#plus").firstElementChild;
addition.addEventListener("click", (e) => {
  if (operation.length === 0) {
    operand2 = operand1.join("");
    operand1 = [];
    operation = addition.innerHTML;
    dipslay = `${operand2} ${operation}`;
    answer.innerHTML = dipslay;
  } else if (operation.length > 0 && operand1.length > 0) {
    //Do the previous operation
    const val1 = parseFloat(operand2);
    const val2 = parseFloat(operand1.join(""));
    const tempAnswer = operations[operation](val1, val2);
    operand2 = tempAnswer;
    operand1 = [];
    operation = addition.innerHTML;
    dipslay = `${operand2} ${operation}`;
    answer.innerHTML = dipslay;
  } else {
    operation = addition.innerHTML;
    dipslay = `${operand2} ${operation}`;
    answer.innerHTML = dipslay;
  }
});

const subtraction = document.querySelector("#minus").firstElementChild;
subtraction.addEventListener("click", (e) => {
  if (operation.length === 0) {
    operand2 = operand1.join("");
    operand1 = [];
    operation = subtraction.innerHTML;
    dipslay = `${operand2} ${operation}`;
    answer.innerHTML = dipslay;
  } else if (operation.length > 0 && operand1.length > 0) {
    //Do the previous operation
    const val1 = parseFloat(operand2);
    const val2 = parseFloat(operand1.join(""));
    const tempAnswer = operations[operation](val1, val2);
    operand2 = tempAnswer;
    operand1 = [];
    operation = subtraction.innerHTML;
    dipslay = `${operand2} ${operation}`;
    answer.innerHTML = dipslay;
  } else {
    operation = subtraction.innerHTML;
    dipslay = `${operand2} ${operation}`;
    answer.innerHTML = dipslay;
  }
});

const divide = document.querySelector("#divide").firstElementChild;
divide.addEventListener("click", (e) => {
  if (operation.length === 0) {
    operand2 = operand1.join("");
    operand1 = [];
    operation = divide.innerHTML;
    dipslay = `${operand2} ${operation}`;
    answer.innerHTML = dipslay;
  } else if (operation.length > 0 && operand1.length > 0) {
    //Do the previous operation
    const val1 = parseFloat(operand2);
    const val2 = parseFloat(operand1.join(""));
    const tempAnswer = operations[operation](val1, val2);
    operand2 = tempAnswer;
    operand1 = [];
    operation = divide.innerHTML;
    dipslay = `${operand2} ${operation}`;
    answer.innerHTML = dipslay;
  } else {
    operation = divide.innerHTML;
    dipslay = `${operand2} ${operation}`;
    answer.innerHTML = dipslay;
  }
});

const mult = document.querySelector("#multiply").firstElementChild;
mult.addEventListener("click", (e) => {
  if (operation.length === 0) {
    operand2 = operand1.join("");
    operand1 = [];
    operation = mult.innerHTML;
    dipslay = `${operand2} ${operation}`;
    answer.innerHTML = dipslay;
  } else if (operation.length > 0 && operand1.length > 0) {
    //Do the previous operation
    const val1 = parseFloat(operand2);
    const val2 = parseFloat(operand1.join(""));
    const tempAnswer = operations[operation](val1, val2);
    operand2 = tempAnswer;
    operand1 = [];
    operation = mult.innerHTML;
    dipslay = `${operand2} ${operation}`;
    answer.innerHTML = dipslay;
  } else {
    operation = mult.innerHTML;
    dipslay = `${operand2} ${operation}`;
    answer.innerHTML = dipslay;
  }
});

const equals = document.querySelector("#equals").firstElementChild;
equals.addEventListener("click", (e) => {
  if (operand2.length === 0) {
    operand1.length > 0
      ? (answer.innerHTML = operand1.join(""))
      : (answer.innerHTML = 0);
    reset();
  } else if (operand1.length === 0) {
    answer.innerHTML = operand2;
    reset();
  } else {
    const val1 = parseFloat(operand2);
    const val2 = parseFloat(operand1.join(""));
    const tempAnswer = operations[operation](val1, val2);
    answer.innerHTML = tempAnswer;
    reset();
  }
});

const resetKey = document.querySelector("#reset").firstElementChild;
resetKey.addEventListener("click", (e) => {
  reset();
  answer.innerHTML = 0;
});

const delKey = document.querySelector("#del").firstElementChild;
delKey.addEventListener("click", (e) => {
  if (operand1.length === 1) {
    operand1.pop();
    operand1.push(0);
    dipslay = `${operand2} ${operation} ${operand1}`;
    answer.innerHTML = dipslay;
  } else if (operand1.length > 1) {
    operand1.pop();
    dipslay = `${operand2} ${operation} ${operand1.join("")}`;
    answer.innerHTML = dipslay;
  }
});
