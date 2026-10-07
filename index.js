// Reverse the characters in a string.
// Input: "hello" → Output: "olleh"

// let str = "hello";
// let reverse = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
// }

// console.log(reverse);
// Factorial of a Number
// let n = 5;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//     factorial = factorial * i;
// }

// console.log(factorial);


// Check for Palindrome


// let str = "madam";
// let reverse = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
// }

// if (str === reverse) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// Find the Largest Number in an Array
// Return the maximum number in an array.



// let arr = [30, 58, 5, 90, 10];
// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log(largest);


// Sum All Numbers in an Array
// Return the total of all numbers in an array.



// let arr = [30, 58, 5, 90, 10];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }

// console.log(sum);

// Count Vowels in a String
// Count the number of vowels (a, e, i, o, u) in a string.




// let str = "hello world";

// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (
//         str[i] == "a" ||
//         str[i] == "e" ||
//         str[i] == "i" ||
//         str[i] == "o" ||
//         str[i] == "u"
//     ) {
//         count++;
//     }
// }

// console.log(count);

// Generate Fibonacci Sequence
// Return the first n numbers in the Fibonacci sequence.


// let n = 10;

// let a = 0;
// let b = 1;

// for (let i = 0; i < n; i++) {
//     console.log(a);

//     let next = a + b;
//     a = b;
//     b = next;
// }


// Check Even or Odd
// Determine whether a number is even or odd.
// let num = 10;

// if (num % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }


// Capitalize First Letter of Each Word
// Capitalize the first letter of each word in a sentence.

// let str = "hello world javascript";

// let words = str.split(" ");

// let result = "";

// for (let i = 0; i < words.length; i++) {
//     result = result + words[i][0].toUpperCase() + words[i].slice(1) + " ";
// }

// console.log(result);


// Remove Duplicates from an Array
// Return an array with all duplicates removed.

// let arr = [10, 20, 10, 30, 20, 40];

// let result = [];

// for (let i = 0; i < arr.length; i++) {

//     if (!result.includes(arr[i])) {
//         result.push(arr[i]);
//     }

// }

// console.log(result);

// Check if a Number is Prime
// Return true if the number is prime, false otherwise.

// let num = 7;

// let isPrime = true;

// if (num <= 1) {
//     isPrime = false;
// }

// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         isPrime = false;
//         break;
//     }
// }

// console.log(isPrime);

// Convert Celsius to Fahrenheit
// Convert temperature from Celsius to Fahrenheit.

// let celsius = 30;

// let fahrenheit = (celsius * 9 / 5) + 32;

// console.log(fahrenheit);

// Find Longest Word in a Sentence
// Return the longest word in a given sentence.

// let str = "I am learning JavaScript";

// let words = str.split(" ");

// let longest = "";

// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//         longest = words[i];
//     }
// }

// console.log(longest);

// Count Words in a Sentence
// Count the total number of words in a sentence.
// let str = "I am learning JavaScript";

// let words = str.split(" ");

// let count = 0;

// for (let i = 0; i < words.length; i++) {
//     count++;
// }

// console.log(count);

// Replace All Occurrences of a Word in a String
// Replace all instances of one word with another.

// let str = "I like JavaScript. JavaScript is easy.";

// let result = str.replaceAll("JavaScript", "Python");

// console.log(result);

// Find the Second Largest Number in an Array
// Return the second highest number from an array.

// let arr = [30, 58, 5, 90, 10];

// let largest = arr[0];
// let secondLargest = arr[0];

// for (let i = 1; i < arr.length; i++) {

//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     } 
//     else if (arr[i] > secondLargest && arr[i] != largest) {
//         secondLargest = arr[i];
//     }
// }

// console.log(secondLargest);

// Find Common Elements Between Two Arrays
// Return an array of elements common to two arrays.

// let arr1 = [10, 20, 30, 40];
// let arr2 = [20, 30, 50, 60];

// let common = [];

// for (let i = 0; i < arr1.length; i++) {

//     if (arr2.includes(arr1[i])) {
//         common.push(arr1[i]);
//     }

// }

// console.log(common);


// Sort an Array of Numbers
// Sort a given array of numbers in ascending order.

// let arr = [30, 58, 5, 90, 10];

// arr.sort(function(a, b) {
//     return a - b;
// });

// console.log(arr);


// Repeat a String n Times
// Repeat a given string n times.
// Input: "hi", 3 → Output: "hihihi"

// let str = "hi";
// let n = 3;

// let result = "";

// for (let i = 0; i < n; i++) {
//     result = result + str;
// }

// console.log(result);




// Check if All Characters in a String Are Unique
// Return true if all characters in a string are different.

// let str = "abcde";

// let unique = true;

// for (let i = 0; i < str.length; i++) {

//     for (let j = i + 1; j < str.length; j++) {

//         if (str[i] == str[j]) {
//             unique = false;
//             break;
//         }

//     }

//     if (unique == false) {
//         break;
//     }
// }

// console.log(unique);












