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

// const calcAge = function (yearOfBirth) {
//   return 2037 - yearOfBirth;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {

//   const age = calcAge(birthYear)
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement}`);
//     return retirement
//   } else {
//     console.log(`${firstName} has already retired! 🥳`);
//     return - 1
//   }
// }

// console.log(yearsUntilRetirement(1991, 'Marlon'));
// console.log(yearsUntilRetirement(1950, 'All'));

////////////////////////////////////
// ARRAYS (data structure) - INTRODUCTION 

const actor1 = 'Marlon';
const actor2 = 'All';
const actor3 = 'Sandra';

const colleagues = ['Marlon', 'All', 'Sandra'];
console.log(colleagues);

const numbers = new Array(1991, 1986, 2008, 2023);

console.log(colleagues[0]);
console.log(colleagues[2]);

console.log(colleagues.length);
console.log(colleagues[colleagues.length - 1]); //get last element from array

colleagues[2] = 'Salma'; // replace element
console.log(colleagues);

// colleagues = ['Russel', 'Sylvester']   - // negalima colleagues priskirti naujo listo, nes colleagues yra const.

const firstName = 'Marlon'
const marlon = [firstName, 'Brando', 2023 - 1924, 'actor', colleagues];
console.log(marlon);


// Exercise:

const calcAge = function (birthYear) {
  return 2023 - birthYear;
}

const years = [1997, 1976, 1981, 2002, 1995, 2004, 2018, 1986];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);