let choice = document.querySelectorAll(".choices");
let user_score = document.querySelector("#your_score");
let comp_score = document.querySelector("#comp_score");
let btn = document.querySelector("button");
let msg = document.querySelector("#msg")
let userpoint = 0;
let comppoint = 0;
btn.addEventListener("click",()=>{
    msg.innerHTML = "play a move";
    msg.style.backgroundColor ="rgb(36, 8, 217)"
    comp_score.innerHTML = 0;
    user_score.innerHTML = 0;
})

  function cp(){
    let arr = ["rock","paper","scissor"];
    let random = Math.floor(Math.random()*3);
    let compchoice = arr[random];
    return compchoice;

}
function score(userwin){ 
    if(userwin === true){
        userpoint++;
        msg.style.backgroundColor = "green";
        msg.innerHTML ="Congratulations,you win";
        user_score.innerHTML = userpoint;
    }
    else{
        comppoint++;
        msg.style.backgroundColor = "red";
        msg.innerHTML ="Get lost,You lose";
        comp_score.innerHTML = comppoint;
    } 
}
function playgame(userchoice){
    let comp_choice = cp();
    console.log("computer choice:",comp_choice);
    if(comp_choice === userchoice){
        msg.style.backgroundColor = "yellow";
        msg.innerHTML ="Draw";

    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            //paper,scissor
            if(comp_choice === "paper"){userwin = false;}else{userwin = true;}
        }
        else if(userchoice === "paper"){
            //rock , scissor
            if(comp_choice === "scissor"){userwin = false;}else{userwin = true;}
        }
        else{
            //rock , paper
            if(comp_choice === "rock"){userwin = false;}else{userwin = true;}
        }
        score(userwin);
        
    }
}
 




choice.forEach(ele => {
    ele.addEventListener("click",()=>{
        let userchoice = ele.getAttribute("id");
        console.log("your choice:",userchoice);
        playgame(userchoice);
    })
    
});



