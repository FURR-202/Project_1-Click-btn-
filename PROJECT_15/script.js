let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let ans = document.getElementById("ans");
let option1 = document.getElementById("option-box1");
let option2 = document.getElementById("option-box2");
let option3 = document.getElementById("option-box3");
let answer = 0;
function generate_equation(){
    let number1 = Math.floor(Math.random()*15);
    let number2 = Math.floor(Math.random()*15);
    answer = number1 + number2;
    let dummyans1 = Math.floor(Math.random()*10);
    let dummyans2 = Math.floor(Math.random()*10);
    num1.innerHTML = number1;
    num2.innerHTML = number2;
    let array = [option1,option2,option3];
    let random = Math.floor(Math.random()*array.length);
    array[random].innerHTML = answer;
    let newarray = array.filter(ele =>ele !== array[random]);
        newarray[0].innerHTML = dummyans1;
        newarray[1].innerHTML = dummyans2;
}
option1.addEventListener("click",()=>{
    if(option1.innerText == answer){
        generate_equation();
    }
    else{
        alert("wrong!");
    }
})
option2.addEventListener("click",()=>{
    if(option2.innerText == answer){
        generate_equation();
    }
    else{
        alert("wrong!");
    }
})
option3.addEventListener("click",()=>{
    if(option3.innerText == answer){
        generate_equation();
    }
    else{
        alert("wrong!");
    }
})
generate_equation();