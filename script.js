const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(numberSet) {
  return numberSet.reduce((total, iteration) => total + iteration, 0)
};

const multiply = function(numberSet) {
  return numberSet.reduce((total, iteration) => total * iteration, 1)
};

const division = function(a, b) {
    return a / b
}

const power = function(base, exponent) {
  return base**exponent
};

const factorial = function(base) {
	let basedArray = [];
  if (base === 0) return 1
  else {
    for (i = base; i >= 1; i--) {
      basedArray.push(i)
    };
  };
  return basedArray.reduce((product, iteration) => product * iteration, 1)

};

