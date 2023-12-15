 //************** Problem No. 01***************
// #Declare 3 variables using var, let and const and assign value to variable Number, String, Boolean.
var num1 = 878;
console.log(num1);

let str = 'Hello World';
console.log(str);

const bool = true;
console.log(bool);

// *********Problem No. 02 ****************
// 3 Declare 5 variables using let keyword and conver variable name snake_case to camelCase. NB: No need to assign value to variable.

let acerageTemperatureIndegrees;
let numberOfElementsInArray;
let userInputForCalculatorOperation;
let acerageTemperatureIndegreesa;
let totalSalesAmountInCurrentQuarter;
let lengthOfSideOfSquare;

// *********Problem No. 03 **************
// # Solve these problems of variable names.

const myName = 'My name is Tanjed';
const num2 = 200;
const boll1 = false;
const str1 = 'String';
const num3 = 45.792;
console.log(myName);
console.log(num2);
console.log(boll1);
console.log(str1);
console.log(num3);

// *********Problem No. 04 *************
//How many data types are there in JavaScript?
//Ans: 9 ways

// # Write all the Datatypes using single-line and multi-line comments.

// data type in javascritp
// # primitive data type

// * numbar
// * string
// * boolean
// * null
// * undefiend
// * symbol

// # not primitive data type / object data type

// * array
// * object
// * function

// *********Problem No. 05 ***************

// # Declare 5 Primitive data using the const keyword.
// Numbers:
const num4 = 16;
// Strings:
const color1 = 'Yellow';
// Booleans
const x = true;
// undefined
const z = undefined;
// null
const y = null;

// *********Problem No. 06 *************
//How many ways to declare a Number data type?
//Ans:3 ways

const numb = 54;
console.log(numb);

const numb1 = Number(97.67);
console.log(numb1);

// *********Problem No. 07 *************
// How many ways to declare a String data type?
// Ans:4 ways

let carName = 'BMW';
console.log(carName);

let stri = 'bangladesh hello';
console.log(stri);

let countryName1 = `bangladesh`;
console.log(countryName1);

let countryName2 = String('bangladeshi');
console.log(countryName2);




//  problems solve

// const num1 = 6854856465352878668167;
// console.log(num1.toString().length); // 21

// const num2 = "541963";
// console.log(parseInt(num2)); // 541963
// console.log(Number(num2)); // 541963
// console.log(parseFloat(num2)); // 541963

// const num3 = 20.2698537845;
// console.log(num3.toFixed(2)); // 20.27

// const num4 = "Hello. I am Tanjed Hasan"
// console.log(num4.length) // 24

// const text1 = 'My name is Tanjed Hasan. \'I am from Bangladesh\'. Where are you from';
// console.log(text1) // My name is Tanjed Hasan. 'I am from Bangladesh'. Where are you from

const num5 = 100;

if (num5 >= 80) {
  console.log('A+');
} else if (num5 >= 70) {
  console.log('A');
} else if (num5 >= 60) {
  console.log('A-');
} else if (num5 >= 50) {
  console.log('B');
} else if (num5 >= 40) {
  console.log('C');
} else if (num5 >= 33) {
  console.log('D');
} else {
  console.log('F');
}

// Password Check:
const pass = "password123";

if (pass === "password123") {
  console.log("Welcome.")
} else {
  console.log("Incorrect password.")
}

// Simple Calculator:
const num6 = 30;
const num7 = 20;
const operator1 = "/";

if (operator1 === "+") {
  console.log("Total = " + (num1 + num2))
} else if (operator1 === "-") {
  console.log("Total = " + (num1 - num2))
} else if (operator1 === "*") {
  console.log("Total = " + num1 * num2)
} else if (operator1 === "/") {
  console.log("Total = " + num1 / num2)
}

let num8 = 30;
let num9 = 20;
const operator2 = "/";

const sum = num1 + num2;
const sub = num1 - num2;
const mlt = num1 * num2;
const div = num1 / num2;

if (operator2 === "+") {
  console.log("Total = " + sum)
} else if (operator2 === "-") {
  console.log("Total = " + sub)
} else if (operator2 === "*") {
  console.log("Total = " + mlt)
} else if (operator2 === "*") {
  console.log("Total = " + div)
}

// Color Check:
const colo2 = "blue";

if (color2 === "blue") {
  console.log("Good choice")
} else if (color2 === "green") {
  console.log("Good choice")
} else {
  console.log( "That's an interesting choice.")
}

// Largest Number:
const number1 = 20;
const number2 = 30;
const number3 = 40;

if (number1 > number2 && number1 > number3) {
  console.log("Largest number is ", + number1);
} else if (number2 > number1 && number2 > number3) {
  console.log("Largest number is ", + number2);
} else if (number3 > number1 && number3 > number2) {
  console.log("Largest number is ", + number3);
}


// switch prectice

const num = 0;

switch (num) {
  case 1: {
    console.log("One")
    break;
  }
  case 2: {
    console.log("Two")
    break;
  }
  case 3: {
    console.log("Three")
    break;
  }
  case 4: {
    console.log("Four")
    break;
  }
  case 5: {
    console.log("Five")
    break;
  }
  default: {
    console.log("Nota a valid number....!")
  }
}


// Color Check 1:
const color3 = "blue";

if (color3 === "blue") {
  console.log("Good choice")
} else if (color3 === "green") {
  console.log("Good choice")
} else {
  console.log( "That's an interesting choice.")
}

const color2 = "fgh";

if (color2 === "blue" || color2 === "green") {
  console.log("Good choice")
} else {
  console.log( "That's an interesting choice.")
}


// find color
// Color Check 2:

const color4 = "red";

 switch (color4) {
   case "Black": {
     console.log("Good choice")
     break;
   }
   case "White": {
     console.log("Good choice")
     break;
   }
   default: {
     console.log("That's an interesting choice.")
   }
 }


// find color
const color5 = "Black";

 switch (color5) {
   case "Black": 
   case "White": {
     console.log("Good choice")
     break;
   }
   default: {
     console.log("That's an interesting choice.")
   }
}


// Find Month:

 const date1 = new Date();

 const month1 = date1.getMonth();

 switch (month1) {
  case 0: {
    console.log("January");
    break;
  }
  case 1: {
    console.log("February");
    break;
  }
  case 2: {
    console.log("March");
    break;
  }
  case 3: {
    console.log("April");
    break;
  }
  case 4: {
    console.log("May");
    break;
  }
  case 5: {
    console.log("June");
    break;
  }
  case 6: {
    console.log("July");
    break;
  }
  case 7: {
    console.log("August");
    break;
  }
  case 8: {
    console.log("September");
    break;
  }
  case 9: {
    console.log("October");
    break;
  }
  case 10: {
    console.log("November");
    break;
  }
  case 11: {
    console.log("December");
    break;
  }
 }


// Find day
const date2 = new Date();
const day =date2.getDay();

switch (day) {
  case 0: {
    console.log("Sunday")
    break;
  }
  case 1: {
    console.log("Monday")
    break;
  }
  case 2: {
    console.log("tuesday")
    break;
  }
  case 3: {
    console.log("Wednesday")
    break;
  }
  case 4: {
    console.log("Tursday")
    break;
  }
  case 5: {
    console.log("Friday")
    break;
  }
  case 6: {
    console.log("Saturday")
    break;
  }
}


// find Vowel
const letter = "u";

switch (letter) {
  case "a":
  console.log("a is Vowel");
  break;
  case "e":
  console.log("e is Vowel");
  break;
  case "i":
  console.log("i is Vowel");
  break;
  case "o":
  console.log("o is Vowel");
  break;
  case "u": 
  console.log("u is Vowel");
  break;
  default : {
  console.log("letter is consonant")
  }
}

// ``
// find operator result
const number4 = 40;
const number5 = 30;
const operator = "."

let result;

switch (operator) {
  case "+": {
    result = number4 + number5
    console.log(`${number4} + ${number5} = ${result}`);
    break;
  }
  case "-": {
    result = number4 - number5
    console.log(`${number4} - ${number5} = ${result}`);
    break;
  }
  case "*": {
    result = number4 * number5
    console.log(`${number4} * ${number5} = ${result}`);
    break;
  }
  case "/": {
    result = number4 / number5
    console.log(`${number4} / ${number5} = ${result}`);
    break;
  }
  default: {
    console.log("Invalid Operator")
  }
}




// ``
