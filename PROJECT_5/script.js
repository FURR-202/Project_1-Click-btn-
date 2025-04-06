let btn1 = document.getElementById("Increase");
let btn2 = document.getElementById("Decrease");
let num = document.querySelector("h1");
let number = 0;
function Increase(){
    number += 1;
    num.innerText = number
}
function Decrease(){
    number -= 1
    num.innerText = number
}
btn1.addEventListener("click",()=>{
    Increase();
})
btn2.addEventListener("click",()=>{
        Decrease();
})
