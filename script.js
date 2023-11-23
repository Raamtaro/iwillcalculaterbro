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
//This is going to be VERY rough code for now
    let result = 0;

    if (operator === 'addition') result = add(a,b)
    else if (operator === 'subtraction') result = subtract(a,b)
    else if (operator === 'multiplication') result = multiply(a,b)
    else if (operator === 'division') result = divide(a,b)

    return result
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