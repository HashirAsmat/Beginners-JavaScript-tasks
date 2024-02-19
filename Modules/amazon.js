//importing mycart array from cart.js file
import { products } from "./product.js";
import { getPublicAPIs } from "./cart.js"; 

//whenever u are importing an async function that have an return statement with the awaited data , the async function will return a promise because data fitching takes time , so exported async function return a promise which u need resolve so that data may come properly (data coming from another server takes time)... that's what we are doing , we are resolving the promise in another file , where we are importing the async function ...

//getPublicAPIs function return a promise so u can handle promise by using await or then because its async , if so we need to resolve it using then-catch ...
 getPublicAPIs().then((data)=>{
    console.log('promise Handled using Then-catch',data );
 }).catch(error => console.error(error));


promiseHandler();

 async function promiseHandler() {
    try{
    const data = await getPublicAPIs();
    console.log(data, 'promise Handled using Await');
    }
    catch(error){
    console.log(error);
    }
 }


 //mostly we the promise is resolved inside the async await function when it is not exported to another file
