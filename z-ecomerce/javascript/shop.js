//change the background of the nav when we scroll


window.addEventListener("scroll",() => {
    if(window.scrollY > 2){
        document.querySelector("nav").style.background="#fff";
    }
    else{
        document.querySelector("nav").style.background="#c9c9d0c4";
    }
})
//this is for the close-open button

let closee = document.querySelector(".close");
let menu = document.querySelector(".menu");
let list = document.querySelector("nav ul");
menu.addEventListener("click",()=>{
    list.style.display = 'flex';
    menu.style.display="none";
    closee.style.display="block";

})

closee.addEventListener("click",()=>{
    list.style.display = 'none';
    menu.style.display="block";
    closee.style.display="none";
})

/*this is used to show the nav bar after clicking on the 
close button and resize the window*/
window.addEventListener('resize', () => {
     if(window.innerWidth > 820 ){
     list.style.display = 'flex';
     }
     else{
        //this is used to show the nav if the closee icon is block
        if(closee.style.display =="block"){
            list.style.display = 'flex';
        }
        else{
            //this is used to show the nav if the closee icon is shown none
            list.style.display = 'none';
        }
         
     }
 });

//this is used to hide the list when we click on a category of it
var elements = document.querySelectorAll("nav ul li");

elements.forEach(element => {
    element.addEventListener("click",() => {
        if(window.innerWidth < 820){
            list.style.display = 'none';
            menu.style.display="block";
            closee.style.display="none";
        }
        
    })
});








//show / hide product section

document.querySelectorAll(".feature-products .products .product").forEach(element => {
    element.addEventListener("click",()=>{
        document.querySelector(".click .flex .img .main").src=element.querySelector("img").src;
        document.querySelectorAll(".feature-products .products").forEach(element => {
            element.style.display="none";
            document.querySelector(".feature-products .number").style.display="none";
            document.querySelector(".click").style.display="block";
            document.querySelector(".click .feature-products .products").style.display="flex";
        })
    })
});


document.querySelector(".click .back span").addEventListener("click",()=>{
    document.querySelectorAll(".feature-products .products").forEach(element => {
        element.style.display="grid";
        document.querySelector(".feature-products .number").style.display="flex";
        document.querySelector(".click").style.display="none";
    })
})

//change the main picture 
document.querySelectorAll(".click .flex .img .small img").forEach(element => {
    element.addEventListener("click",()=>{
        document.querySelector(".click .flex .img .main").src=element.src;
    })
})