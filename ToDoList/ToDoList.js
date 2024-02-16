const button = document.getElementById("btn");
const inputField = document.getElementById("todo");
const ul = document.getElementById("todolist");
console.log(button);
console.log(inputField);

function myFunction(){
   const toDoValue = inputField.value;
   const li = document.createElement('li');
   li.innerText=toDoValue;
   const delbtn = document.createElement('button');
   delbtn.innerText = "Delete item";

   delbtn.addEventListener('click', ()=>{
    ul.removeChild(li);
   });
   
   li.appendChild(delbtn);
   ul.appendChild(li);
   inputField.value = '';
}

button.addEventListener("click",myFunction);


