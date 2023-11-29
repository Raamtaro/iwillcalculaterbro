const calcScreen = document.querySelector(".screen")

const operatorGroup = document.querySelector(".operators")

const computeButton = document.querySelector(".compute")

let result = 0;



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

//Event Listeners to get the text to appear on the screen

//NumberPad
for (let i=1; i <= 9; i++) {
  let numberButton = document.querySelector(".number" + i.toString());
  numberButton.addEventListener('click', () => {
    calcScreen.textContent += numberButton.textContent;
  });
};


//Operators
for (let j=0; j < operatorGroup.children.length; j++) {
  operatorGroup.children[j].addEventListener('click', () => {

    //need to add some logic which checks to see if certain characters already exist/don't exist yet -- so basically... 

    //if two numbers are already set up with an operator in the middle, then compute, replace the first value with the result, and then continue
    //If there are NO numbers in the first place and I try to jump straight to an operator, then throw em an error!
    //If I try to enter an operator twice in a row, then throw em an error!

    //else (if the calculator is being used properly), go ahead and append the text to the screen
    
    calcScreen.textContent += operatorGroup.children[j].textContent;
  });
};


//Event Listener to make the delete button... delete, lol
function backspace() {
  calcScreen.textContent = calcScreen.textContent.substring(0, calcScreen.textContent.length - 1)
};

