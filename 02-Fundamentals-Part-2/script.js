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
//FUNCTIONS DECLARATION, EXPRESSIONS, ARROW FUNCTION

/* //FUNCTION DECLARATIOM
function calcAge1(birthYear) {
  return 2037 - birthYear;

}

const age1 = calcAge1(2000);

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(2000);
console.log(age1, age2); */


/* //ARROW FUNCTION
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`
}

console.log(yearsUntilRetirement(2000, 'Saulius'));
console.log(yearsUntilRetirement(1986, 'Algis')); */

//FUNCTION CALLING OTHER FUNCTIONS
/* function cutFruitPieces(fruit) {
  return fruit * 3
}


function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} piecies of orange.`;
  return juice;
}

console.log(fruitProcessor(5, 10)); */

// REVIEWING FUNCTIONS

const calcAge = function (yearOfBirth) {
  return 2037 - yearOfBirth;
}

const yearsUntilRetirement = function (birthYear, firstName) {

  const age = calcAge(birthYear)
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement
  } else {
    console.log(`${firstName} has already retired! 🥳`);
    return - 1
  }
}

console.log(yearsUntilRetirement(1991, 'Marlon'));
console.log(yearsUntilRetirement(1950, 'All'));