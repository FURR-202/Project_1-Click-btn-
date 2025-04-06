let bill = document.getElementById("input1");
let guests = document.getElementById("input2");
let quality = document.querySelector("select");
let tipAmount = document.getElementById("tip-amount");
let billbtn = document.getElementById("btn1");
let guestbtn = document.getElementById("btn2");

billbtn.addEventListener("click",()=>{
    bill.value="";
})
guestbtn.addEventListener("click",()=>{
    guests.value="";
})


function calculate(){
    let tip = ((bill.value*quality.value)/guests.value).toFixed(2);
    tipAmount.style.visibility = "visible";
    let h4 = document.createElement("h4");
    tipAmount.appendChild(h4);
    h4.setAttribute("id","tip"); 
    if(bill.value === ""||NaN || quality.value == 0 || guests.value ==""||NaN){
        h4.innerText = `Tip $${0} each`;
        
    }
    else{
        h4.innerText = `Tip $${tip} each`;
    }
    setTimeout(()=>{
        tipAmount.removeChild(h4);
        tipAmount.style.visibility = "hidden";
    },2000);
    bill.value="";
    quality.value="";
    guests.value="";
}
