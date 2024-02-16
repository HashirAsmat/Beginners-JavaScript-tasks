const inputField = document.querySelector('.js-to-do');
const btn = document.querySelector('.btn');
const container = document.querySelector('.toDoContainer'
)
console.log(btn);
console.log(inputField);
let myArray = [];

function clickHandler(event){
   // event.preventDefault();
    const value = inputField.value;
    myArray.push(value);
    console.log(myArray);
    inputField.value = '';
   
}
btn.addEventListener('click',clickHandler)
