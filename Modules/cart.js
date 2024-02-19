//include axios directly added into the main html file page by CDN method e.g 
//<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> in the head tag of ur HTML page...
//Here you can not do npm install thing here because its not node (backend )but this is code for browser Engine Front-END and brower engine does not support Node Packages , so instead to include Axios in your project use cdn method ..


const options = {
  method: 'GET',
  url: 'https://api.publicapis.org/entries',
};

let first20Items = []; 
let getdata = [];
export async function getPublicAPIs() {
    
    const response =  await axios.request(options);
    first20Items = response.data.entries.slice(0, 5);
   //getdata = first20Items; // can do it this way (code-snippet 1)
   //console.log(getdata); 

    gettingData();
    return first20Items;
}

//if u will call the async function here directly u can't get the async data immediately in return because it takes time so instead async function return a promise which u can then resolve ...
//console.log("cart.js file calling locally" , getPublicAPIs());



//if u want the resolved promise data outside the async function inside that file then u can do it this way;create a normal function that is called inside async function after await , used to assign the fetched data to a variable...u can't access the variable outside async func or if u want to access it then still u need to create another function ,,, however the async function is executed later after all code is executed , now if u will try to do it using a varibale that has been declared outside u can do it  but u would not be able to see it using console.log outside async because console.log will have executed before the variable is assign to the obtained data so that's why u could be able to see an empty array now inorder to see the data u should use console.log() inside the async function e.g in (code-snippet-1) or use another function that has console.log() and call that function then later right after assigning that variable (code-snippet-2)...
function gettingData (){
getdata = first20Items;
//console.log(getdata, 'Using Varibale');
}



//You can use setTimeout to verify that out getdata variable is assigned with the data but later on , setTimeout is set to executed after 3 seconds , so it is executed much later , at the last , even later that async functions because 3 seconds delay is alot , our data is fetched earlier than 3 seconds by the async function so that why we can access the variable to ensure if its is assign with the fetched data or not.... 
setTimeout(()=>{
    console.log('set time out executed! ',getdata);
},3000);









// Dont run those js frontend files through node where u are using (js file type='module' in HTML FILE) i.e Export or import statements , other than that u can run frontend JS files though node for debugging purposes...