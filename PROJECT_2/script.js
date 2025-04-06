let main =  document.querySelector("main");
let btn = document.querySelector("button");
let code = document.querySelector("#hex_code");
// function random(){
//     // generating random numbers
//     let r1 = Math.floor(Math.random()*223);
//     let r2 = Math.floor(Math.random()*223);
//     let r3 = Math.floor(Math.random()*223);
//     let arr = [r1,r2,r3];// converting in array
//     return arr;// returning it 
// }
// function changecolor(){
//     let [r1,r2,r3] = random(); // destructuring array
//     main.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`// this change the backgroundcolor
// }

// btn.addEventListener("click",()=>{
//     changecolor();// this function called only when button clicked!
// }
// )
function changecolor(){
    let hex_numbers = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let hexcode = '';
    for(let i =0;i<6;i++){
        hexcode  += hex_numbers[Math.floor(Math.random() * hex_numbers.length)]
    }
    main.style.backgroundColor =`#${hexcode}`;
    code.innerHTML = hexcode;
}
btn.addEventListener("click",()=>{
    changecolor();// this function called only when button clicked!
}
)