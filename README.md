# iwillcalculaterbro
TOP Capstone for JS fundamentals


Understand the problem - build a calculator


Functionalities: 

- Make sure that one operation happens at a time -- i.e. 7 + 2 * 9 should come out as 81 

- The operate(a, b, operator) function needs to be able to receive the right numbers and operator

- Should look nice



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



The logic for compute is the next thing that I need to add, I believe. This will unlock the gates to whole new realms and shit


computeButton.addEventListener('click', ()=> {
    //Need to check the screen content ---> https://bobbyhadz.com/blog/javascript-split-string-special-characters#:~:text=To%20split%20a%20string%20by,an%20array%20containing%20the%20results. 

    //The above link provides a quick explanation on regular expressiosn that might come in handy here  ---> myString.split(/[\+\-\*÷]/)

    //if/else if logic calcScreen.textContent.includes() for each of the operators --> store the value and call operate() with the correct args
})