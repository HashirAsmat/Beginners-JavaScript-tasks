//Object Groups related values together

const products = [
    {
        "category" : "electrical",
        "price" : 20,
        "ratings" : 4,
        "name":"airPods"
    },
    {
        "category" : "furniture",
        "price" : 200,
        "ratings" : 3,
        "name":"bed",
    },
    {
        "category" : "jewelry",
        "price" : 150,
        "ratings" : 5,
        "name":"bracelet"
    },
    {
        "category" : "electrical",
        "price" : 180,
        "ratings" : 4,
        "name":"Laptop"
    },

]

// const elecButton = document.querySelector('#electrical');
// const jwelButton = document.querySelector('#jewelry');
// const furnButton = document.querySelector('#furniture');

// elecButton.addEventListener('click',buttonHandler);
// jwelButton.addEventListener('click',buttonHandler);
// furnButton.addEventListener('click',buttonHandler);

// function buttonHandler(event){
//     let selectedProduct = [];
//     const category = this.innerText.toLowerCase(); //this refer to the button on which the function has been triggered on
// selectedProduct = products.filter((obj)=>{
//             if(obj.category === category ){
//                 return obj;
//             }}
//             )
//             console.log(selectedProduct);
//     return selectedProduct
// }

// const selectedMenu = document.querySelector('#products');
// const itemSelectBtn = document.querySelector('#itemSelectBtn');
// itemSelectBtn.addEventListener('click',checkItems);


//concept
// function checkItems (event){
// let selectedItem = selectedMenu.value;
// const productsSelected = products.filter((item)=>{
//     if (item.category === selectedItem){
//         return item;
//     }
// })
// let totalInNumbers = productsSelected.length;
// console.log(`Total numbers of that category products avaibale in the store are ${totalInNumbers}`);
// }



//concept
let human = {
    age:24,
    name:'Hashir',
    country:'pakistan',
    district:'karak',
    province:'kpk',
    fun: function () {
        console.log("Display age" , this.age);
    }
    //the arrow function does not work here "this" IS NOT DEFINED FOR ARROW FUNCTIONS to access the object scope , it will give u undefine , so use regular functions instead of arrow functions inside objects.
}
human['village'] = 'latamber';
human.fun();



//concept
//OBJECT TO JSON CONVERSION 
const jsonConverted = JSON.stringify(products);
//console.log(jsonConverted);
//JSON TO OBJECT CONVERSION
const backObjectConverted = JSON.parse(jsonConverted);
//console.log(backObjectConverted);



//concept
//default value for function parameter i-e if we dont pass parameter to the function , it will get by default 0 value;
// function defaultValueFun (age = 0){
// console.log(age);
// }
// defaultValueFun();


//concept
//Object use refrences Time(5:40:00); even though if You are using Const for an object still u can change its value e.g
const friend = {
    name:"kamran",
    age:23,
    city:"swat"
}



// IMPORTANT CONCEPT OF OBJECTS VARIABLE USING REFERENCE TO POINT TO THE OBJECT DATA.
//what actually happening is that the object { name:"kamran",age:23,city:"swat"} is stored somewhere in the memory but we really don't know where , we also know that the friend variable is refering or pointing to that object , now when you will copy the friend variable to another variable friend2 , What will happen that instead of making new object again with the same content i.e. { name:"kamran",age:23,city:"swat"} , the friend2 variable will just copy the reference from friend variable which is already pointing to the object , so now both friend and friend2 are pointing to the same object , and no additional memory is using to duplicate the object twice...  
const friend2 = friend ;
//interesting thing is when u modify the object data using one of the variable that are pointing to that object , and then console log the another variable , u will see the changes , it means that all those are pointing to the same object.
friend.age = 22;
//console.log(friend2); // you will get that in console.log(friend2) -> { name: 'kamran', age: 22, city: 'swat' }




//Concept
//We cant compare object directly , bcz object variable are storing references (5:40:58);
const friend3 = {
    name:"kamran",
    age:23,
    city:"swat"
}
//console.log((friend === friend3)); // false
//console.log(friend === friend2); // true -> because both variable storing the same object reference ..
//note that friend3 and friend have the same object values , but when we will compare them it will still not be equal because we will be comparing the references of two different objects, when we make the new object e.g                const friend3 = { name:"kamran",   age:23,   city:"swat" } , in this case the new space is allocated to the object but when you assign the variable that is already storing the reference to the object in this case new object will not be make but only the reference will be copies to the variable;



//concept
//here using spread operator we are spreading the data and then assigning it to the other object as we already know about the spread operator concept , so here the friend4 will refer to the new object that will contain the value that are present in the freind2 object , so friend4 and friend2 both are not containing the same references...
const friend4 = {...friend2};
//console.log(friend4 === friend2); // false

//concept
const product1 = {
    name:'Laptop',
}
product1['price'] = 150000; //adding data i-e key and value to the object
console.log(product1); 





//concept
//In the constructor (constructor(age, name)), this refers to the current instance of the class. By using this.age = age; and this.name = name;, you are creating instance properties (age and name) that belong to the object created from the class
class myClass{
    constructor(age,name){
         this.age = age;
         this.name = name;
    }
    Display() {
        console.log(`the age of the person is ${this.age} and the name of the person is ${this.name}`);
    }
}
const person = new myClass(24,'Hashir');
person.Display();




