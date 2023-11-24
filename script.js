const calcScreen = document.querySelector(".screen")

const operatorGroup = document.querySelector(".operators")

const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
};

const multiply = function(a, b) {
  return a * b
}

const divide = function(a, b) {
    return a / b
}

function operate(a, b, operator) {
//This is VERY rough code for now
    let result = 0;
    
    if (operator === 'addition') result = add(a,b)
    else if (operator === 'subtraction') result = subtract(a,b)
    else if (operator === 'multiplication') result = multiply(a,b)
    else if (operator === 'division') result = divide(a,b)

    return result
}

//Event Listeners to get the text to appear on the screen

//NumberPad
for (let i=1; i <= 9; i++) {
  let numberButton = document.querySelector(".number" + i.toString());
  numberButton.addEventListener('click', () => {
    calcScreen.textContent += numberButton.textContent;
  });
};

for (let j=0; j < operatorGroup.children.length; j++) {
  operatorGroup.children[j].addEventListener('click', () => {
    calcScreen.textContent += operatorGroup.children[j].textContent
  })
}




















//EXTRA FEATURES TO WORK IN A BIT LATER
// const power = function(base, exponent) {
//   return base**exponent
// };

// const factorial = function(base) {
// 	let basedArray = [];
//   if (base === 0) return 1
//   else {
//     for (i = base; i >= 1; i--) {
//       basedArray.push(i)
//     };
//   };
//   return basedArray.reduce((product, iteration) => product * iteration, 1)

// };

// const sum = function(numberSet) {
//   return numberSet.reduce((total, iteration) => total + iteration, 0)
// };

// const multiplySet = function(numberSet) {
//   return numberSet.reduce((total, iteration) => total * iteration, 1)
// };