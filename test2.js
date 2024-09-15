// Cart functionality Implementation using Object in a simple and decent way!!! (my own logic) 

console.log('this is test 2');
let cart = {
};

//document.querySelector return the a NodeList which is kinda similar to Arrays but it lacks many methods like .map(); however forEach could be use...

const buttonArray = document.querySelectorAll('.js-add-to-cart').forEach((button,index)=>{
        button.addEventListener('click',()=>{
            let productid = button.dataset.productid;
            if(cart[productid]){
                cart[productid] = cart[productid] + 1;
                console.log(cart)
                return
            }
            cart[productid] = 1;
            console.log(cart)
            return
        })
    });
