
let screen = document.getElementById("screen");

let num7 = document.getElementById("7");
let num8 = document.getElementById("8");
let num9 = document.getElementById("9");
let delBtn = document.getElementById("del");
let num4 = document.getElementById("4");
let num5 = document.getElementById("5");
let num6 = document.getElementById("6");
let addBtn = document.getElementById("+");
let num1 = document.getElementById("1");
let num2 = document.getElementById("2");
let num3 = document.getElementById("3");
let minBtn = document.getElementById("-");
let decimal = document.getElementById(".");
let num0 = document.getElementById("0");
let divBtn = document.getElementById("/");
let multiBtn = document.getElementById("*");
let resetBtn = document.getElementById("reset");
let calcBtn = document.getElementById("calculate");


let input="";

delBtn.addEventListener("click",()=>{
    input = input.slice(0, -1);
    screen.innerText = input;  
})


resetBtn.addEventListener("click",()=>{
    input ="";
    screen.innerText = input;  
})

calcBtn.addEventListener("click",()=>{
    screen.innerText = eval(input);  
})


addBtn.addEventListener("click",()=>{
    input+="+";
    screen.innerText = input;  
})

divBtn.addEventListener("click",()=>{
    input+="/";
    screen.innerText = input;  
})

minBtn.addEventListener("click",()=>{
    input+="-";
    screen.innerText = input;  
})

multiBtn.addEventListener("click",()=>{
    input+="*";
    screen.innerText = input;  
})

decimal.addEventListener("click",()=>{
    input+=".";
    screen.innerText=input;
})



num0.addEventListener("click",()=>{
    input+="0";
    screen.innerText = input;   
})

num1.addEventListener("click",()=>{
    input+="1";
    screen.innerText = input;   
 })

num2.addEventListener("click",()=>{
    input+="2";
    screen.innerText = input;   
 })

num3.addEventListener("click",()=>{
    input+="3";
    screen.innerText = input;   
 })

num4.addEventListener("click",()=>{
    input+="4";
    screen.innerText = input;   
 })

num5.addEventListener("click",()=>{
    input+="5";
    screen.innerText = input;   
 })

num6.addEventListener("click",()=>{
    input+="6";
    screen.innerText = input;   
 })

num7.addEventListener("click",()=>{
   input+="7";
   screen.innerText = input;   
})

num8.addEventListener("click",()=>{
    input+="8";
    screen.innerText = input;   
})

num9.addEventListener("click",()=>{
    input+="9";
    screen.innerText = input;   
 })
