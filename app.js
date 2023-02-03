console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1 Declaring Variables
// Declare a variable named firstName using the const keyword, and assign your name as the string value
// Declare a variable named lastName using the let keyword, and assign your name as the string value
// Declare a variable named age using the var keyword, and assign your age as the number value

  const firstName = "Katelyn ";
  let lastName = "Yaeger"
  var myAge = 29;

// Exercise 2: Working with Strings
// Declare a variable named fullName using the let keyword, and assign your firstName plus your lastName as the string value
// Print the value of fullName to the console (to open you browser console in Google Chrome, right-click and press "Inspect" or fn+F12)
// BONUS: Complete step two using a template literal instead of concatenation

let fullName = firstName + lastName;
console.log(fullName);
let greeting = `My name is ${fullName}`;
console.log(greeting);



// Exercise 3:
// Declare a variable named myStory using the let keyword, and assign a string with 3 sentences detailing:
// An introduction using your fullName variable.
// An introduction using your city variable.
// An introduction using your favorite pastime variable.
// Be sure to use variables as the above answers (declare and assign variables if you haven't already)
// Print the result of myStory to the browser console
// Ex:
// let myStory = `\Hello! My name is ${fullName}. I live in ${city}. I enjoy ${passtime} and coding!`;

let myPasstime = "write";
let myCity = "Hoover";
let myStory = `Hello! My name is ${fullName} and I live in ${myCity}. I love to ${myPasstime} in my free time!`;
console.log(myStory);



// ## Exercise 4: Declaring and Assigning Values to Variables
// 1. Declare a variable named `language` using the `let` keyword, and assign it the value `"JavaScript"` (string)
// 2. Declare a variable named `createdYear` using the `let` keyword, and assign it the value `1995` (number)
// 3. Declare a variable named `isCaseSensitive` using the `let` keyword, and assign it the value `true` (boolean)

let language = "JavaScript";
let createdYear = 1995;
let isCaseSensitive = true;

// ## Exercise 5: Declaring and Assigning Values to Variables x2
// 1. Declare a variable named `price` using the `let` keyword, and assign it the value `19.99` (number)
// 2. Declare a variable named `isOnSale` using the `let` keyword, and assign it the value `false` (boolean)
// 3. Declare a variable named `salePercentage` using the `let` keyword, and assign it the value `15` (number)
// 4. Declare a variable named `stock` using the `let` keyword, and assign it the value `0` (number)
// 5. Declare a variable named `inStock` using the `let` keyword, and assign it the value `false` (boolean)
// 6. Declare a variable named `selectedSize` using the `let` keyword, and assign it the value `"M"` (string)

let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = "M";

// ## Exercise 6: Declaring and Assigning Values to Variables x3
// 1. Declare a variable named `title` using the `let` keyword, and assign it the value `"Name of the Wind"` (string)
// 2. Declare a variable named `author` using the `let` keyword, and assign it the value `"Patrick Rothfuss"` (string)
// 3. Declare a variable named `pageCount` using the `let` keyword, and assign it the value `722` (number)
// 4. Declare a variable named `bookmark` using the `let` keyword, and assign it the value `456` (number)
// 5. Declare a variable named `hasRead` using the `let` keyword, and assign it the value `true` (boolean)

let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = 722;
let bookmark = 456;
let hasRead = true;