const btn = document.querySelector("button");
let main = document.querySelector("main");
let index = 0;
btn.addEventListener("click",()=>{
    let colors = ["red","yellow","green","pink","purple","orange","blue","skyblue"];
    main.style.backgroundColor = `${colors[index]}`;
    index++;
    if(index === colors.length-1){index = 0;}
})