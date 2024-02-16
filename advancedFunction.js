                  
                  ///////////////////// FUNCTIONS ARE VALUES /////////////////////
//the important concept about functions is that functions are value itself like num=5 now here 5 is the value that variable 'num' is storing , same goes for functions, functions can also be stored inside a variable...
//anything that we can do with the values can be done with the function e.g we can store value in a variable , we can pass value into the function as param, we can have key-value(function) pair incase of object which we call method.. 




                  /////////////////////// DIFFERENT METHODS TO DEFINE FUNCTIONS ///////////////////////
//in javascript we have different syntix to create function and each syntix comes with come features and give some ablitites to the function ..
//for Example:

               /////// 1st Method to create Functions
//normally we use this syntix to create functions , 
// note that here we are not mentioning the data type before function:
//this type of declering function has many advantages , e.g Hoisting is allowed but that syntix , and also its easier to read ...
//hoisting mean that u can call the function even before where it's define , it will not give u an error.
NormalWayFunction();
 function NormalWayFunction (){
console.log("Noraml way to create function")
} 



               //////2nd Method to create Functions
//you can store function in a variable , because function act like a value ,e.g when u are storing a value in variable i.e  const Age = 20; we can also store function in a variable , and  we need to mention the data type for the variable as well ...
//this function is also called an Ananomyous function
//This syntix does not support Hoisting feature , but it its own Advantages e.g it help us to store function inside the object (method) as we know object takes key--value pair, so we can store function as (value) in the variable i.e (key) and this syntix also confirm the function nature acting as value... 

//VariableStoringFunction(); //calling before definition , will give an error bcz no Hoisting is supported by this defintion.
const VariableStoringFunction = function (){
console.log("variable stroing function")
};

VariableStoringFunction();
const object1 = {
    displayAge: function (){
        console.log("age: ",20);
    }
};
object1.displayAge();





             ///////CALL-BACK FUNCTION 
             //A callback function is named as such because it's a function that is passed as an argument to another function and is "called back" or executed later within that function's body.
//since function is a value we can also pass a function as an argument to another function e.g
function myFunction (param){
param(); //param is now storig the ananymous function that we have passed as an argument, and it is called here or get executed here , note that the call-back function is called later , first the myFunction is called then the myFunction calls the call-back function , that's why it's called call back function because the call-back function is "Called back" later ...
};
//function call
myFunction(
    function (){ //the function that we are passing in as an argument is called the call back function.
    console.log("passing as an argument (callback function)");
});

//practical example of callback function is -----> setTimeout() 
//setTimeout is the built-in function that take two arguments in total one is function as an argument (the function that we want to run in future) and 2nd argument is the time of wait that we want before the call of callback function... the delay is in milliSecond so 3000 millisecond is 3 seconds wait then the toBeCalled function will be envoke after that specific amount of time i.e in this case 3 seconds, also note that setTimeout does not pause the execution of the overall code below (asynchronous) , it just schadule the function envoking time and execute the rest of the code below it , when the time comes , it then evoke the call-back function passed to setTimeout as an argument...

setTimeout(function toBeCalled(){
    console.log("timeOut 1st");
},1000);

console.log("below setTimeout function 1nd");


/// it has repetative behavior setinterval returns an ID , this ID is useful when we want to stop this repetative behavior , by passing the intervalID into the clearInterval() predefined function. 

// let counter = 0;
// const intervalID = setInterval(function toBeCalled(){
//     console.log("setInterval is called every 3 seconds");
//     counter++;
//     if(counter == 2){
//         clearInterval(intervalID);
//     }
//   if have wrote a logic so that we have 2 repeatative calls with the delay of three seconds..
// },3000)





///////////Arrow functions 

//are just like the functions i.e it's behavior or features (does not support Hoisting) , you can define anymous Functions using arrow function syntix , that we discussed in the second methods
// const VariableStoringFunction = function (){
//     console.log("variable stroing function")
//     };
const variableStoringFunction = () =>{
    console.log("variable storing Function");
}
/////// we often pass arrow function as a call back function because of its shorter syntax ,




/////////////// forEach ---> (loop) function
//forEach  is a function that we use on an arrays or objects , and it iterate the array (visiting each index and its value) sometimes we use for loop and arraylength for arrays traversing so instead of using forloop we can simple use forEach method , makes it much more simple to traverse the array , it does not return new array like .map( ) or .filter() , it's just like a forLoop instead...
let fruits = ['banana','apple','mango','orange'];
console.log(fruits,'before change');
fruits.forEach((value,index)=>{
//console.log(value, '---> lies at the index: ' , index)
if(value == 'banana'){
    fruits[index] = 'BananaValueUpdated !';
} //using forEach loop , you can visit array index and play with the value , apply conditions and even u can take functionality like .filter() , but then u needs to do some extra steps , u need to make a new array and use .push() in a condition...
}
)
console.log(fruits,'after change');
    



////////////// filter() method work on arrays and objects and it return an array and only those value will be returned where the return statement is true ...
const items = [
    {   
        category:'electronic',
        name:'mouse',
        price:20,
    },
    {   
    category:'food',
    name:'fish',
    price:20,
    },
    {   
    category:'electronic',
    name:'keyboard',
    price:20,
    },
    {   
    category:'soap',
    name:'Lux',
    price:20,
    },
];
let filteredElectronicItems = items.filter((value,index)=>{
    if(value.category == 'electronic'){
        return true; //filter does not return boolean but it return the array containing those values for which the return is true,
    }
});
//console.log(filteredElectronicItems);



////////////////////////////////////// .map() ----> is a method for arrays and objects that return an array , the size of that returned array will be the same as the one on which we are applying .map() function . the value in the returned array will be of same in numbers that of items array but you can play with these value and returned the modifield result e.g html with the object attributes and values ...  In react.js we apply .map() on the array of objects , the value will contain the each object one by one  and then we access the object property and return some html (modified with our object values)...

const modifiedArray = items.map((value,index)=>{

return(  //so here the modifiedArray each index will now store the Generated Html that has been modified according to the object values respectively...
          `<div><p>item Name: ${value.name}</p><p>item Name: ${value.category}</p><p>item Name: ${value.price}</p><div>`
           );});

console.log(modifiedArray);




