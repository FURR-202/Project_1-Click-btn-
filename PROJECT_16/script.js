
let body = document.querySelector("body");


window.addEventListener("load",()=>{
    lightanddark();
})

function lightanddark(){
    let time = new Date();
    let hours = time.getHours();
    if(hours >19 || hours < 5){
        body.style.backgroundColor = "black";
        body.style.Color = "white"; 
    }
    else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}