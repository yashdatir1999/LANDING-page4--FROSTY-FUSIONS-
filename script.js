var menu=document.querySelector(".menu")
var home=document.querySelector(".ri-home-7-line")
var cart=document.querySelector(".ri-shopping-cart-2-line")
var custumer=document.querySelector(".ri-customer-service-2-line")
var user=document.querySelector(".ri-user-2-line")
var flag=0

menu.addEventListener("click",function(){
    if(flag == 0){
        menu.innerHTML=`<i class="ri-menu-4-fill"></i>`
        home.style.opacity="0"
        home.style.right="0%"
        home.style.top="0%"
        cart.style.right="0%"
        cart.style.top="0%"
        cart.style.opacity="0"
        custumer.style.right="0%"
        custumer.style.top="0%"
        custumer.style.opacity="0"
        user.style.right="0%"
        user.style.top="0%"
        user.style.opacity="0"
        flag=1
    }else{
        menu.innerHTML=`<i class="ri-close-circle-line"></i>`
        home.style.opacity="1"
        home.style.right="7%"
        home.style.top="2%"
        cart.style.right="2%"
        cart.style.top="17%"
        cart.style.opacity="1"
        custumer.style.right="5.5%"
        custumer.style.top="15.5%"
        custumer.style.opacity="1"
        user.style.right="8%"
        user.style.top="9%"
        user.style.opacity="1"
        flag=0
    }
    
})