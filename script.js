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
  let calcVal = 0;

  let firstNumber = Number(argArray[0]);
  let secondNumber = Number(argArray[1]);

  if (calcScreen.textContent.includes("+")) {calcVal = operate(firstNumber,secondNumber, "addition")}
  else if (calcScreen.textContent.includes("-")) {calcVal = operate(firstNumber,secondNumber, "subtraction")}
  else if (calcScreen.textContent.includes("*")) {calcVal = operate(firstNumber,secondNumber, "multiplication")}
  else if (calcScreen.textContent.includes("÷")) {calcVal = operate(firstNumber,secondNumber, "division")}

  calcScreen.textContent = calcVal.toString();
  return calcVal
}

//Event Listeners to get the text to appear on the screen

//NumberPad
for (let i=1; i <= 9; i++) {
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

    if (calcScreen.textContent.includes("+") || calcScreen.textContent.includes("-") || calcScreen.textContent.includes("*") || calcScreen.textContent.includes("÷")) {
      if (calcScreen.textContent.split(/[\+\-\*÷]/).length === 2) {
        storedValue = preOperateLogic();
        calcScreen.textContent += operatorGroup.children[j].textContent;
      }
      else {
        error = true;
        calcScreen.textContent = "No more than one operator pls!";
        storedValue = 0;
      }
    }
    else if (!calcScreen.textContent) {
      error = true;
      calcScreen.textContent = "Can't operate like this!";
      storedValue = 0;
    }
    else if (calcScreen.textContent === "Can't operate like this!" || calcScreen.textContent === "No more than one operator pls!") {
      error = true;
      calcScreen.textContent = "Please Enter a number, like a normal person.";
      storedValue = 0;
    }
    else {calcScreen.textContent += operatorGroup.children[j].textContent;}
   

    

    //need to add some logic which checks to see if certain characters already exist/don't exist yet -- so basically... 

    //if two numbers are already set up with an operator in the middle, then compute, replace the first value with the result, and then continue
    //If there are NO numbers in the first place and I try to jump straight to an operator, then throw em an error!
    //If I try to enter an operator twice in a row, then throw em an error!

    //else (if the calculator is being used properly), go ahead and append the text to the screen
    
    // calcScreen.textContent += operatorGroup.children[j].textContent;
  });
};

backspaceButton.addEventListener('click', ()=>{
  calcScreen.textContent = calcScreen.textContent.substring(0, calcScreen.textContent.length - 1)
});


computeButton.addEventListener('click', () => {
  storedValue = preOperateLogic()
})