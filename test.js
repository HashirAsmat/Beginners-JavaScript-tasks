let fruits = ['apple', 'banana', 'orange'];

// Adding a single element
fruits.push('grape');
// Now, fruits is ['apple', 'banana', 'orange', 'grape']

// Adding multiple elements
fruits.push('kiwi', 'pear');
// Now, fruits is ['apple', 'banana', 'orange', 'grape', 'kiwi', 'pear']

// The push() method returns the new length of the array

console.log(fruits.length); // Output: 6


let lastFruit = fruits.pop();
// Now, lastFruit is 'orange', and fruits is ['apple', 'banana']

// You can use the popped element as needed
console.log(lastFruit); // Output: 'orange'

let originalObject = {
age:24,
name:"Hashir Asmat",
Gender: "Male",
}
let spreadCopiedObject = {...originalObject , name:"Kamran"}

console.log(spreadCopiedObject);
console.log(originalObject);
//by spread operator happens actually is we open or spread the originalObject attributes like
// age:24,
// name:"Hashir Asmat",
// Gender: "Male",
//  kind of like remove the brackets { } from the attributes and the attribute got spread right!


// now after {...originalObject, name:"Kamran"} , what actually happen is like this 
//{
//age:24,
// name:"Hashir Asmat",
// Gender: "Male",
// name:"Kamran"
//} so you are basically reassigning the value to the name and then you have to close all the attribute with in curley braces {} so enclose it as an object , spread operator actually remove braces from the attribute of object and open it , so in order to reassign it as an another object u need to again enclose them in curley braces...

//example
// let testObJ = {
// age:24,
//  name:"Hashir Asmat",
//  Gender: "Male",
//  name:"mosadiq"
// };
// console.log(testObJ); 


let weapon = "jakeHammer";

let alphNumber = {};

for(let i = 0 ; i < weapon.length; i++ ){
    let alph = weapon[i];
    if(alphNumber[alph]){ //check if the alphabet exist in the object if it does then alphNumber[alph] will return the value for the key stored in alph variable , and it will be either 1 or more than 1 ;
        //here we are incrementing the value bcz it was already found in the object so we have found it again now we need to count it.. 
        alphNumber[alph] = alphNumber[alph] + 1;
    }
    else {
        alphNumber[alph] = 1 //when the object i-e alphNumber[alph] does not have the value init then we need to assign a key to the object and the value as well so that how we do it .... 
    }
}

console.log(alphNumber);
//alphNumber['T'] = 4; //that how u add a new key and its corresponding value 
//console.log(alphNumber);

let numb = [1,5,2,1,3,6,7];
let numbCounter = {};

for(let i=0; i<numb.length;i++){
    let numCheck = numb[i];

    if(numbCounter[String(numCheck)]){
        numbCounter[String(numCheck)] =  numbCounter[String(numCheck)] +1 ;
    }
    else {
         numbCounter[String(numCheck)] = 1; 
    }
}
 console.log(numbCounter);


//copying one array elements to another or doubling the original array value
let numberArray = [1,2,3];
let doubleNumbers = [];
for(let i=0; i<numberArray.length;i++){
    numberArray[i]=numberArray[i]*2; // same array but doubled value
    doubleNumbers[i] = numberArray[i]*2; //doubling the values and copying it to another array ...
   // doubleNumbers.push(i*2); //can also be done like this by using push method.
}
//console.log(numberArray);
//console.log(doubleNumbers);


//vowels count code
let vowels = 'aeiou';
let randomSpelling = 'haammer';
let objectVowelsCounter ={};
for(let i =0;i<randomSpelling.length;i++){
    if(vowels.includes(randomSpelling[i]) && objectVowelsCounter[randomSpelling[i]]){
        objectVowelsCounter[randomSpelling[i]] = objectVowelsCounter[randomSpelling[i]] + 1
    }
    else if (vowels.includes(randomSpelling[i])){
        objectVowelsCounter[randomSpelling[i]] = 1;
    }
}
console.log(objectVowelsCounter);