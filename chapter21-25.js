// Assignment # 21-25
// STRING METHODS

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

const firstName = prompt("Enter your first name?");
const lastName = prompt("Enter your last name?");
const fullName = firstName + lastName;

console.log(`Hello ${fullName}! How are you?`);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

const favPhone = prompt("What is your favourite phone number model?");
console.log(
  `Fav phone is ${favPhone} and length of string is ${favPhone.length}`
);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

var word = "Pakistani";
console.log(word.indexOf("n"));

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
var greetings = "hello world";
console.log(greetings.lastIndexOf("l"));

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
console.log(word.charAt(3));

// 6. Repeat Q1 using string concat() method.
console.log(firstName.concat(" " + lastName));

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var cityName = "Hyderabad";
console.log(cityName.replace("Hyder", "Islam"));

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
var message =
  "Ali and Sami are best friends. They play cricket and football together.";
console.log(message.replace(/and/g, "&"));

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

const value = "472";
console.log(value);
console.log(typeof value);
const newValue = parseInt(value);
console.log(newValue);
console.log(typeof newValue);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

const inputValue = prompt("Write a Quote!");
console.log(inputValue.toUpperCase());

// 11. Write a program that takes user input. Convert and
// show the input in title case.

const userInput = prompt("Write an input value");
const letters = userInput.split(" ");
for (let i = 0; i < letters.length; i++) {
  letters[i] =
    letters[i][0].toUpperCase() + letters[i].substring(1).toLowerCase();
}
const titleName = letters.join();
console.log(titleName);

// 12. Write a program that converts the variable num to
// string.
// Remove the dot to display “3536” display in your browser.
var num = 35.36;
var str = num.toString();
var result = str.replace(".", "");
console.log(result);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// const username = prompt("Enter your username:");
// const regex = /[,@.!]/;

// if (regex.test(username)) {
//   alert(
//     "Please enter a valid username without any special characters like @, ., ,, or !"
//   );
// } else {
//   console.log(`Welcome, ${username}!`);
// }
var username = prompt("Enter your username:");
var specialSymbols = ["@", ".", ",", "!"];

for (var i = 0; i < specialSymbols.length; i++) {
  if (username.includes(specialSymbols[i])) {
    alert("Please enter a valid username without special symbols.");
    username = prompt("Enter your username:");
    i = -1; // restart loop from beginning
  }
}

console.log("Your username is: " + username);

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var want = prompt("What do you want?").toLowerCase(); // Convert user input to lowercase for case-insensitive search
var found = false; // Set a flag to keep track of whether the item was found

for (let i = 0; i < A.length; i++) {
  if (A[i] === want) {
    // Compare each element of the array with user input
    console.log(`${want} is available at index ${i} in our bakery.`);
    found = true; // Set the flag to true if the item is found
    break; // Exit the loop once the item is found
  }
}

if (!found) {
  // Check if the item was not found
  console.log(`${want} is not available in our bakery.`);
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

const password = prompt(
  "Enter a password that contains alphabets and numbers and is at least 6 characters long, and does not start with a number:"
);

// Check if password contains both alphabets and numbers
const containsAlphabets = /[a-zA-Z]/.test(password);
const containsNumbers = /[0-9]/.test(password);
if (!containsAlphabets || !containsNumbers) {
  alert("Password should contain both alphabets and numbers");
} else if (password.length < 6) {
  // Check if password is at least 6 characters long
  alert("Password should be at least 6 characters long");
} else if (!isNaN(password[0])) {
  // Check if password starts with a number
  alert("Password should not start with a number");
} else {
  alert("Password is valid!");
}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

const university = "university of karachi";
const spliting = university.split("");
for (let i = 0; i < spliting.length; i++) {
  console.log(spliting[i]);
}

// 17. Write a program to display the last character of a user
// input.
var userEnterValue = prompt("Write what you like!");
var lastCharacter = userEnterValue.charAt(userEnterValue.length - 1);
console.log(lastCharacter);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var str = "The quick brown fox jumps over the lazy dog";
var count = 0;
var split = str.split(" ");
for (let i = 0; i < split.length; i++) {
  if (split[i].toLowerCase() === "the") {
    count++;
  }
}

console.log("The word 'the' occurs " + count + " times in the string.");
