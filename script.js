const calcScreen = document.querySelector(".screen");
const operatorGroup = document.querySelector(".operators");
const computeButton = document.querySelector(".compute");
const backspaceButton = document.querySelector(".backspace");
const allClear = document.querySelector(".clearConsole")
let storedValue = 0;
let error = false;


const add = function(a, b) {
	return a + b
};


const subtract = function(a, b) {
  return a - b
};


const multiply = function(a, b) {
  return a * b
};


const divide = function(a, b) {
    return a / b
};


function operate(a, b, operator) {
//This is VERY rough code for now
  let result = 0;
    
  if (operator === 'addition') result = add(a,b)
  else if (operator === 'subtraction') result = subtract(a,b)
  else if (operator === 'multiplication') result = multiply(a,b)
  else if (operator === 'division') result = divide(a,b)

  return result
};

const preOperateLogic = function() {
  let calcVal = 0;
  let argArray = calcScreen.textContent.split(/[\+\-\*÷]/);
  let firstNumber = 0;
  
  if (argArray.length > 2) {argArray.shift()};

  let secondNumber = Number(argArray[1]); 
  
  if (!storedValue) {firstNumber = Number(argArray[0])}
  else if (storedValue > 0) {firstNumber = storedValue}
  else if (storedValue < -1) {firstNumber = Number(argArray[0]) * -1}

  let rawArray = calcScreen.textContent.split('');
  if (rawArray[0] === '-') rawArray.shift(); 


  if (rawArray.includes("+")) {calcVal = operate(firstNumber, secondNumber, "addition")}
  else if (rawArray.includes("-")) {calcVal = operate(firstNumber,secondNumber, "subtraction")}
  else if (rawArray.includes("*")) {calcVal = operate(firstNumber,secondNumber, "multiplication")}
  else if (rawArray.includes("÷")) {calcVal = operate(firstNumber,secondNumber, "division")}

  

  calcScreen.textContent = calcVal.toString();
  return calcVal
}

//Event Listeners to get the text to appear on the screen

//NumberPad
for (let i=0; i <= 9; i++) {
  let numberButton = document.querySelector(".number" + i.toString());
  numberButton.addEventListener('click', () => {
    if (error){
      calcScreen.textContent = "";
      error = false;
    }
    calcScreen.textContent += numberButton.textContent;
  });
};


//Operators
for (let j=0; j < operatorGroup.children.length; j++) {
  operatorGroup.children[j].addEventListener('click', () => {
    //First thing to do is to split the calcScreen.textContent by ''
    let rawArray = calcScreen.textContent.split('');
    if (rawArray[0] === '-') rawArray.shift();
    //start the if/else if logic --
    //1st: check to see if rawArray[rawArray.length - 1] is either +, -, ÷ or *
    if (rawArray[rawArray.length - 1] === "+" || rawArray[rawArray.length - 1] === "-" || rawArray[rawArray.length - 1] === "*" || rawArray[rawArray.length - 1] === "÷") {
      //change error to true, and change the textContent to an error message, set storedValue to 0
      error = true;
      calcScreen.textContent = "Error, no more than one operator in a row. Please enter a number to start over.";
      storedValue = 0;
    }
    
    
    calcScreen.textContent += operatorGroup.children[j].textContent;
  });
};

backspaceButton.addEventListener('click', ()=>{
  calcScreen.textContent = calcScreen.textContent.substring(0, calcScreen.textContent.length - 1)
});


computeButton.addEventListener('click', () => {
  storedValue = preOperateLogic()
})