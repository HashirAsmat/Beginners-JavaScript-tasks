//Scenario: Removing an Element from an Array 

//press (ctrl + alt + n -> to run js code )


let studentAge = [20,18,21,22,23,19,24];

//i want to remove the age that is 22 
//first i need to locate where the 22 resides with in the array 
//console.log(studentAge);


function indexFinder(num,array){
    for(let i = 0 ; i < array.length ; i++){
        if(num === array[i]){
            return i;
        }
    }
    }
     const index = indexFinder(19,studentAge);

for(let i = index ; i < studentAge.length - 1 ; i++ ){
    studentAge[i] = studentAge[i+1]
}

studentAge.length = studentAge.length - 1;

// console.log(studentAge);



//finding maximum
let even = [2,4,6,8,20,12,18];
let max = even[0] ;
for(let i = 0 ; i < even.length ; i++){
if(even[i] > max){
    max = even[i];
}
}


//shift the array
//Input: [1, 2, 3, 4, 5]
//Output: [5, 1, 2, 3, 4]

let arrayToShift = [1, 2, 3, 4, 5];
let lastElement = arrayToShift[arrayToShift.length - 1];
let lastIndex = arrayToShift.length - 1;
//console.log(lastIndex);
 for(let i = lastIndex ;  i > 0 ; i--){

    arrayToShift[i] = arrayToShift[i-1];

   // console.log(`arrayToShift at iteration ${i} is ${arrayToShift} `);
   
}
    arrayToShift[0] = lastElement;
//console.log(arrayToShift);



//Reverse an array [1,2,3,4,5] -> [5,4,3,2,1] using two variables that points to the start and end of the array.

let arrToRev = [1,2,3,4,5];

const arrLength = arrToRev.length;
let startPointer = 0;
let endPointer = arrLength-1;

while(startPointer < endPointer){     
     let temp = arrToRev[endPointer];
     arrToRev[endPointer] = arrToRev[startPointer];
     arrToRev[startPointer] = temp;
     startPointer++;
     endPointer--;
}
// console.log(arrToRev);



//array to sum
let arrToSum = [2,4,6,8,10];
let totalSum = 0;
for(let i=0; i< arrToSum.length; i++){
    totalSum+=arrToSum[i];
}
//console.log(totalSum);



//even and odd finder 
let myNumbers = [1,2,3,4,5,6,7,8,9,10];
let category = {}; 
for(let i=0;i<myNumbers.length;i++){
    if(myNumbers[i]%2=== 0){
        if(!category.even) category.even = [];
        category.even.push(myNumbers[i])
        
    }
    else{
    if(!category.odd) category.odd = [];
    category.odd.push(myNumbers[i])
    }
}
//console.log(category);




//Problem 4: Check if Array has Two Numbers that Sum to Target Value 
//Input: [1, 2, 3, 4, 6], target = 10

let arr = [1, 2, 3, 4, 6];
const target = 10;

for(let i = 0 ; i<arr.length ; i++){

    for(let j = i+1;j<arr.length;j++){
    if(target === (arr[i]+arr[j])){
      //  console.log(true,`: the values are ${arr[i]} and ${arr[j]}`);
    }
    }
}


//Problem 5: Remove Duplicates from a Sorted Array
// Input: [1, 1, 2, 3, 3, 4, 5, 5]
// Output: [1, 2, 3, 4, 5]



function duplicateRemoval (array){
let newArray = [];
newArray.push(array[0]);
for(let i = 1 ; i<array.length ; i++){
  if(newArray.includes(array[i])) continue;
    newArray.push(array[i]);
    }
   return newArray;
}

const myNewArray = duplicateRemoval([1, 1, 2, 3, 3, 4, 5, 5]);

//console.log(myNewArray);


//Problem 6: Move Zeros to End
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

let inputArr = [0, 1, 0, 3, 12];
let desireNumber = 0;
let nonDesireIndex = 0;

// 1- first shift all the number that are not desired number to the start of the array
for(let i=0;i<inputArr.length;i++){

    if(inputArr[i] !== desireNumber){
        inputArr[nonDesireIndex] = inputArr[i];
        nonDesireIndex++;
    }
}

// 2- then for the reamining slot of the array , place all the desire number 
for(let i=nonDesireIndex;i<inputArr.length;i++){
    inputArr[i]=desireNumber;
}

console.log(inputArr);




