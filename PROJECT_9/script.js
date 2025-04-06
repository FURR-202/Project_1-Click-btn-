let userInput = document.getElementById("userInput");
let box = document.getElementById("allItems");
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    box.innerHTML = "";
})

function addItem(){
    let text = userInput.value.trim();
    if(text !== ""){
        let h2 = document.createElement("h2");
        h2.innerText = text;
        box.appendChild(h2);
        h2.addEventListener("click",()=>{
            h2.style.textDecoration = "line-through";
        })
        userInput.value = "";
    }
}



userInput.addEventListener("keydown",(e)=>{
    if(e.key ==="Enter"){
        addItem();
    }
})