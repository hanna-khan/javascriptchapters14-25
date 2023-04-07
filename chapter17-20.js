// Assignment # 17-20
// Arrays and loop

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
let multiDimensionalArray = [[], [], []];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// 3. Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
var num = prompt("Which table you want to generate?");
var length = prompt("Enter Length?");
console.log(`Multiplication table 0f ${num} length ${length}`);
for (let i = 1; i <= length; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  console.log(`Element at index ${i} is ${fruits[i]}`);
}
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
for (let i = 1; i <= 15; i++) {
  console.log(i);
}
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
for (let i = 15; i >= 1; i--) {
  console.log(i);
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
for (let i = 0; i < 20; i += 2) {
  console.log(i);
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
for (let i = 1; i < 20; i += 2) {
  console.log(i);
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
for (let i = 2; i <= 20; i += 2) {
  console.log(`${i}k`);
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
const A = ["cake", "apple pie", "cookie", "chips", "patties"];
const askUser = prompt(
  "Welcome to donuteria bakery, what do you want to order?"
);
let found = false;

for (let i = 0; i < A.length; i++) {
  if (askUser === A[i]) {
    console.log(`${askUser} is available at index ${i} in our bakery`);
    found = true;
    break;
  }
}

if (!found) {
  console.log(`${askUser} is not available in our bakery`);
}

// 8. Write a program to identify the largest number in the
// given array.
const largerArray = [24, 53, 78, 91, 12];
let largestNumber = largerArray[0];
for (let i = 1; i < largerArray.length; i++) {
  if (largerArray[i] > largestNumber) {
    largestNumber = largerArray[i];
  }
}
console.log(`The largest number in the array is: ${largestNumber}`);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
const smallerArray = [24, 53, 78, 91, 12];
let smallestNumber = smallerArray[0];
for (let i = 0; i < smallerArray.length; i++) {
  if (smallestNumber > smallerArray[i]) {
    smallestNumber = smallerArray[i];
  }
}
console.log(`The smallest number in the array is: ${smallestNumber}`);


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
for (let i = 1; i <= 100; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
