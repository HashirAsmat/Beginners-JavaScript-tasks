//JavaScript Full Course - Beginner to Pro - Part 2 Lesson 14 (superSimpleDev)

                ////  WARNING:          !!!!!!!!!!!!!!!!!!!Dont run the js file of the script tag on NODE LOCALLY , to run the file type module script where u have done import and export , Use browser i.e LIVE SERVER to run the main HTML file and then use inspector to see the console and OtherWise running it locally will gives u an Error when using type module for js files ...

//Modules ----> Feature of javascript , which is a better way to organize our Code.
// In JavaScript, a module is a reusable piece of code that encapsulates related functionality. Modules allow developers to organize code into separate files or components, making it easier to manage and maintain large codebases. Modules typically include variables, functions, classes, or other JavaScript entities that are related to each other and serve a common purpose.



//Problem without modules ?

/* 
let say we have an html fine and we are having multiple javascript files connected to that html file at the end of html body tag as we do so , e.g
<script src="cart.js"> </script>
<script src="product.js"> </script>
<script src="amazon.js"> </script>

now when the html file loads it runs all the htmls code then as the js code is mentioned at the end so that all html gets loaded , then the JS files are executed one by one from top to bottom first cart.js is executed then product.js is executed and so on , 
So what Browser actually does is that , it combine the 3 different files code into a single file (html), so you can think of it as like if we have a one big script tag in the main html file and that script tag is loaded with the js Code of all the 3 file respectively i.e

<script>
// cart.js code
// product.js code
// amazon.js code
</script>

now the problem with that scenario is that of variable naming conflicts 
E.g
if we have created a variable naming cart (const cart = []) in cart.js file ,then we can't use it in any other js file 

in order to tackle problems are these we make modules , modules are simply JavaScript files , and dont load the JS file into html page using script Tags , By doing so any variable that we make inside the file will be contained inside the file or u can say its scope will be limited to that file only and it would not cause naming conflits ..

But! wait a minute , what if we want to use the cart variable that we have made in cart.js, in other JS file let say product.js file ?


Tutorial ----->  {8:16 / 1:28:42 , Intro to modules}
you need to remove the cart.js file from the script tag as its creating conflicts then you need to export cart variable from the cart.js file import it into the product.js file to enable import feature you need to mention type = modules in product script tag inorder to enable import by making the product.js file as a module 

<script src="product.js" type='module'> </script>
<script src="amazon.js"> </script>


There are two main advantages of using modules ,
1- Avoiding variable name conflicts .
2- (time:-> 12:47) The order of script files does not matter in modules , otherwise if you have JS scripts files in your HTML page then the order matters alot because first the code of the first file is loaded into the HTML file then the second , now if you have variable that is declared in the second file and so the first file would not recognize that variable.
*/
