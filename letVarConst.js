// let and const are block scoped , by scope i mean the curley braces {} . once u define a variable in the block u cant use it outside

let husbandName = 'kamran';

if( husbandName == 'kamran')
{   
    console.log(husbandName);
    var wifeName = 'mosadiq';
};


console.log(wifeName);


// let factor = 5 ;
// for(let i=0 ; i<=10;i++){
//     let result = factor*i;
//     console.log(`${factor} X ${i} = ${result}`);
// }


//map always return a new array of size that array on which the map method has been apllied..
let numbers = [2,3,6,4,1]; //here the length is 5 , so the array return my the map will have 5 length..
let modifiedArray = numbers.map((value,index)=>{
return(value*5);
}
);
console.log(modifiedArray);
console.log(numbers,'numbers array after map');




//forEach doesnt return any array or value , u can however modify the existing array
numbers.forEach((value,index)=>{
numbers[index] = value*5;
})
console.log('this is from forEach loop',numbers);


// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.
//min-max number
let mynumbers = [-25,-30];
function MinMax (arr){
minNumb = Math.min(...arr);
maxNumb = Math.max(...arr);
return [minNumb,maxNumb];
}
let myarray = MinMax(mynumbers);
console.log(myarray);