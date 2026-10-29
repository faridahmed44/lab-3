// alert('khaly balak be5')
// console.log('hellooooooo')
// document.title = "byee"; // fel js ba8ayar el fel html 
// document.body.style.backgroundColor = "pink" 
// function changebackgrounds(){
//     document.body.style.backgroundColor = "pink" ;
// }
// let btn1 = document.getElementById('button1')
// let string = null

// let h1 = document.getElementById('heading')
 
// btn1.addEventListener("click" , func1); //no bracketsss



// function func1(){
//     document.body.style.backgroundColor ="pink";
// }
let btnshow=document.getElementById("buttonshow")
let btn1=document.getElementById("button1")
let btn2=document.getElementById("button2")
let btn3=document.getElementById("button3")
let btnreset=document.getElementById("buttonreset")
let h2 = document.getElementById("showData")

let x = 0;


btn1.addEventListener('click',funcadd1)
btn2.addEventListener('click',funcadd2)
btn3.addEventListener('click',funcadd3)
btnreset.addEventListener('click',funcreset)
btnshow.addEventListener('click',funcshow)

    
function funcshow(){
    console.log(x)
    h2.textContent = "The total is: " + x;
}
function funcadd1(){
    x+=1;
    
}
function funcadd2(){
     x+=2;  
}
function funcadd3(){
     x+=3;
    
}
function funcreset(){
    x=0;
    
}