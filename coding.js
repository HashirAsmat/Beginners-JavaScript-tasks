
// https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/



///////////////////Remove the comments from console.log at the end of each task u will get the desired result/////////////


let A = [1, 2, 3, 4, 5];
let B = A.map((value) => {
   return value * 2;
})


// 1. print even numbers
let C = A.filter((number) => {
   return number % 2 == 0;
})

// console.log(A);
// console.log(B);
// console.log(C);



// 2. Print a table containing multiplication tables
// Let’s start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication tables from 1 through 10?

// Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?

function createMultiplicationTable(maxNum) {
   for (let i = 1; i < maxNum; i++) {
      for (let j = 1; j <= 10; j++) {
         let product = j * i;
         console.log(`${i} * ${j} = ${product}`);
      }
   }
}
// createMultiplicationTable(4);




// 3. Create a length converter function
// Creating a function is a skill that’ll be useful in many settings, and as you progress, you’ll be working on much more complicated functions than this one. But a function that converts units of measure can be pretty handy in multiple professions and industries.

// Let’s start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.


function kilometersToMiles(kilometers) {
   let miles = (kilometers / 1.6);
   return miles;
}
//const Miles = kilometersToMiles(4);
// console.log(`${kilometersToMiles(4)}`);




// 4. Calculate the sum of numbers within an array
// You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution. Have one array with negative and positive numbers and another with integers and decimals.

let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
for (let i = 0; i < Numbers.length; i++) {
   sum += Numbers[i];
}
// console.log(sum);



// 5. two Dimensional Arrays (array with in array) the inner array are considered as a single element for parent array;
let Array2D = [[1, 2, 3], [4, 5, 6], [6, 7, 8]];
let innerArray = Array2D[2];
let innerSum = 0;
for (i = 0; i < innerArray.length; i++) {
   innerSum = innerSum + innerArray[i];
}
// console.log(innerArray);
// console.log(`inner array sum = ${innerSum}`);



//in 2D arrays the parent array can have one and two indexes e.g if Array2D[1] , this refer to the child array which is an element according to the parent array 
//,but if its something like Array2D[0][1], in this case the first index refer to the first element of parent array , i-e first index refer to the child array , 
//but the second index now refer to the index of child array  so the second index is for the child array and the first index is for the parent array ... 

//now at first i will get the first element of parent array i-e the inner array,
const innerArray1st = Array2D[0];
// console.log(innerArray1st);


// we can apply all the functions i-e .map() , .filter() , .length etc  on this obtained inner array bcz it's an array by nature ofcourse it was just extracted from the parent array
//innerArray1st.map((innerElements)=>{console.log(innerElements)});


//now lets access the element of the parent array directly -> first index use to access to the element array then the second index is for element with in element array. e.g

//i want to access 7 number so i will select [2] , the 3rd element resides on 2nd index , and then with in that child array -> the 2nd element resides on index 1 ; so [1] is for child array index;
const innerValue = Array2D[2][1];
// console.log(innerValue);





// 6. Create a function that reverses an array
// This challenge is particularly helpful if you’re planning to become a Data Scientist. Manipulating data is a significant part of the role, and building the foundations now will help you later down the road when you’re working with large databases.
// Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.
let arrlength = Numbers.length;
for (i = arrlength; i > 0; i--) {
   console.log(Numbers[i - 1]);
}





// 7. Sort an array from lowest to highest
// You could create a function for this solution as well, but be sure to try your program with varying lengths and types of arrays. Try one with all integers, another with negative numbers, and another with decimals.
let unsortedArray = [4, 1, 3, 8, 5, 7, 2];
let sorted = unsortedArray.sort();
// console.log(sorted);




// 8. Create a function that filters out negative numbers
// In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”
let integersArray = [1, 2, -3, -5, 6, -4];
let posNumbers = integersArray.filter((number) => {
   if (number >= 0) {
      return number;
   }
})
// console.log(posNumbers);


//Replace method
//The replace method is a built-in JavaScript string method that is used to search for a 
//specified substring (or a regular expression pattern) within a string and replace it with another substring.

//Here's the general syntax of the replace method:
//string.replace(searchValue, replaceValue)

//const originalString = "Hello, world!";
//const newString = originalString.replace("world", "universe");
//console.log(newString); // Output: "Hello, universe!"
//console.log(originalString); // Output: "Hello, world!" (original string remains unchanged)



//9. TASK
// Remove the spaces found in a string
// Yet another way to clean up data is to remove any errors or unnecessary spaces. 
//This function will take in a string and then return it with all spaces removed.
// Think about if you were tasked with cleaning up customer data at your job. 
// You could scale this function to clean up specific fields of data, such as zip codes.

let inputString = 'hello ,   world';
let newInputString = inputString.replace(/\s/g, '');
// console.log(inputString);
// console.log(newInputString);



///10. Taskkk
// Return a Boolean if a number is divisible by 10
// Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. 
//The inputted number should only return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer.

function isDivisibleBy10(number) {
   return number % 10 == 0;
}
console.log(isDivisibleBy10(40));



//11. Tasskkk
// Return the number of vowels in a string
// Create a function that’ll return an integer of the number of vowels found in a string. 
//This is a great way to practice determining the features of a dataset.
// If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. 
//If you feel like an extra challenge, consider returning the number of characters.

let animal = 'elephant';
//console.log(animal[4]) 
// While strings in JavaScript are indeed sequences of characters, they are not considered arrays.
// Arrays and strings have some similarities, such as the ability 
//to access elements by index (e.g., myString[0] and myArray[0]), 
//but they are different data types with different behaviors and methods.

// now lets collect all the vowels in the animal string ,
let vowels = '';
for (let i = 0; i < animal.length; i++) {
   let character = animal[i];
   if ('aeiou'.includes(character) && !vowels.includes(character)) {
      vowels += character;
   }
}
// console.log(vowels, vowels.length); // This will output 'ea' for the word 'elephant'.





//12.  write a javascript program to get the file extension
//the slice work on string and arrays , slice return an Array or String which contain the elements starting from index that has beeen passed to the slice as an argument e.g slice('6');
let evenArray = [2, 4, 6, 8];
// console.log(evenArray.slice(evenArray.indexOf(6)));

let filename = 'index.html';
let getExtension = filename.slice(filename.indexOf('.'));
// console.log(getExtension);




// JavaScript provides several methods that work on both arrays and strings. These methods are part of the JavaScript core language and can be used with both data types. Some of these methods include:

// 1. `length`: As you mentioned, the `length` property can be used to determine the number of elements in an array or the number of characters in a string.

// 2. `slice()`: The `slice()` method can be used to extract a portion of an array or a substring from a string.

// 3. `indexOf()`: This method is used to find the first occurrence of a specified element or substring within an array or string and returns its index.

// 4. `concat()`: The `concat()` method can be used to combine two or more arrays or strings and return a new array or string.

// 5. `join()`: The `join()` method is used to concatenate all elements of an array or characters of a string into a single string, separated by a specified delimiter.

// 6. `split()`: The `split()` method is used to split a string into an array of substrings based on a specified delimiter.

// 7. `charAt()`, `charCodeAt()`, `substring()`, and `substr()`: These string methods can be used to access or manipulate individual characters or substrings within a string.

// These methods are versatile and can be used on both arrays and strings, making JavaScript a flexible and powerful language for working with data.