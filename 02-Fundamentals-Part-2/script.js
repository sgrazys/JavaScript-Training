'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!'); */

// const private = 534;

////////////////////////////////////
//FUNCTIONS

/* function logger() {
  console.log('My name is Saulius');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num); */

////////////////////////////////////
//FUNCTIONS DECLARATION vs. EXPRESSIONS

//FUNCTION DECLARATIOM
function calcAge1(birthYear) {
  return 2037 - birthYear;

}

const age1 = calcAge1(2000);

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(2000);
console.log(age1, age2);