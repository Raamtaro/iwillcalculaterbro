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
  let argArray = calcScreen.textContent.split(/[\+\-\*÷]/);
  let firstNumber = 0;
  if (argArray.length > 2) {
    argArray.shift() //remove any empty space elements in case of a negative number for storedValue
  };
  console.log('this code is being run');
  if (!storedValue) {
    firstNumber += Number(argArray[0])
    console.log('this code is also being run')
  }
  else if (storedValue > 0) {
    firstNumber += storedValue
    console.log('this code is also being run')
  }
  else if (storedValue < -1) {
    firstNumber += Number(argArray[0]) * -1
    console.log('this code is also being run')
  }

  return firstNumber



  // if (calcScreen.textContent.includes("+")) {calcVal = operate(firstNumber,secondNumber, "addition")}
  // else if (calcScreen.textContent.includes("-")) {calcVal = operate(firstNumber,secondNumber, "subtraction")}
  // else if (calcScreen.textContent.includes("*")) {calcVal = operate(firstNumber,secondNumber, "multiplication")}
  // else if (calcScreen.textContent.includes("÷")) {calcVal = operate(firstNumber,secondNumber, "division")}

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

    
    
    // calcScreen.textContent += operatorGroup.children[j].textContent;
  });
};

backspaceButton.addEventListener('click', ()=>{
  calcScreen.textContent = calcScreen.textContent.substring(0, calcScreen.textContent.length - 1)
});


computeButton.addEventListener('click', () => {
  storedValue = preOperateLogic()
})