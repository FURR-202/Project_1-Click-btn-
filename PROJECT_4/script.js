let messageinput  = document.getElementById("message-input");
let messageoutput = document.getElementById("message-output");
let btn = document.querySelector("button");
function message(){
    let text = messageinput.value.trim();
    if(text != ""){
    messageoutput.innerHTML += text;
    let br = document.createElement("br")
    messageoutput.appendChild(br);
    messageinput.value = "";}
    else{alert("Please Enter Something....")}
}
btn.addEventListener("click",()=>{
    message();
})
messageinput.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){message()}
})