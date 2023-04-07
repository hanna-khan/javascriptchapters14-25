// Assignment # 13-15
//ARRAYS

// 1. Declare an empty array using JS literal notation to store
// student names in future.

var studentName = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var studentName = {};
// 3. Declare and initialize a strings array.
var stringArray = ["Afza", "Malaika", "Hania"];

// 4. Declare and initialize a numbers array.
var numberArray = [1, 2, 3, 4, 5, 6];
// 5. Declare and initialize a boolean array.
var booleanArray = [true, false];
// 6. Declare and initialize a mixed array.
var mixedArray = [1, 2, "Hania", true, null];
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var availableEducation = [
  "SSC",
  "HSC",
  "BSC",
  "BS",
  "BCOM",
  "MS",
  "M. PHIL",
  "PhD",
];
document.write(availableEducation);
// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display  the scores & percentages of students like:

var students = ["Afza", "Hania", "Malaika"];
var scores = [405, 400, 442];
var totalMarks = 500;
var percent1 = (scores[0] / totalMarks) * 100;
var percent2 = (scores[1] / totalMarks) * 100;
var percent3 = (scores[2] / totalMarks) * 100;
document.write(
  `${students[0]} has scored ${scores[0]} scores and got a percenatge of ${percent1} <br>`
);
document.write(
  `${students[1]} has scored ${scores[1]} scores and got a percenatge of ${percent2} <br>`
);
document.write(
  `${students[2]} has scored ${scores[2]} scores and got a percenatge of ${percent3}`
);

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// Initialize array with color names
let colors = ["red", "green", "blue"];

// Display array in browser
document.write("<h3>Initial Colors:</h3>");
document.write(colors + "<br>");

// Ask user to add color to beginning of array
let newColor = prompt("Enter color to add to beginning of array:");
colors.unshift(newColor);

// Display updated array in browser
document.write("<h3>After adding color to beginning:</h3>");
document.write(colors + "<br>");

// Ask user to add color to end of array
newColor = prompt("Enter color to add to end of array:");
colors.push(newColor);

// Display updated array in browser
document.write("<h3>After adding color to end:</h3>");
document.write(colors + "<br>");

// Add two more colors to beginning of array
colors.unshift("purple", "yellow");

// Display updated array in browser
document.write("<h3>After adding two colors to beginning:</h3>");
document.write(colors + "<br>");

// Delete first color in array
colors.shift();

// Display updated array in browser
document.write("<h3>After deleting first color:</h3>");
document.write(colors + "<br>");

// Delete last color in array
colors.pop();

// Display updated array in browser
document.write("<h3>After deleting last color:</h3>");
document.write(colors + "<br>");

// Ask user to add color at specific index
let index = parseInt(prompt("Enter index at which to add color:"));
newColor = prompt("Enter color to add:");
colors.splice(index, 0, newColor);

// Display updated array in browser
document.write("<h3>After adding color at specific index:</h3>");
document.write(colors + "<br>");

// Ask user to delete color(s) at specific index
index = parseInt(prompt("Enter index at which to delete color(s):"));
let numColors = parseInt(prompt("Enter number of colors to delete:"));
colors.splice(index, numColors);

// Display updated array in browser
document.write("<h3>After deleting color(s) at specific index:</h3>");
document.write(colors + "<br>");

// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.
var studentScores = [12, 55, 23, 89, 11, 13, 56, 90, 10, 44];
document.write(`${studentScores.sort()} <br>`);

// // 11. Write a program to initialize an array with city names Copy 3 array elements from cities array to selectedCities

var cityNames = ["Karachi", "Lahore", "Islamabad", "Multan"];
document.write(`${cityNames.slice(0, 2)}`);

// // 12. Write a program to create a single string from the
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // (Use array’s join method)
document.write("<br>" + "<br>" + "Question 12" + "<br>" + "<br>");

var arr = ["This ", "is ", "my ", "cat"];
document.write("my original array = " + arr + "<br>");
document.write("after join method = " + arr.join(""));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
document.write("<br>" + "<br>" + "Question 13" + "<br>" + "<br>");
var fifoArray = ["first", "second", "third"];

// fifoArray.push("first element");
// fifoArray.push("second element");
// fifoArray.push("third element");

document.write(fifoArray + "<br>");
document.write(fifoArray.shift() + "<br>");
document.write(fifoArray + "<br>");

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-
// First Out)
document.write("<br>" + "<br>" + "Question 14" + "<br>" + "<br>");
const newArr = ["hania ", "malaika ", "afza "];
// newArr.push("hania");
// newArr.push("malaika");
// newArr.push("afza");
document.write("my array =  " + newArr + "<br>");
document.write(newArr.pop() + "<br>");
document.write(newArr + "<br>");

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
document.write("<br>" + "<br>" + "Question 15" + "<br>" + "<br>");

var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
