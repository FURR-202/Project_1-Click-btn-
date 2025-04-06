let userInput =  document.getElementById("userinput");
let expression = "";
function press(num){
    expression += num;
    userInput.value = expression;
}
function result(){
    let ans = eval(expression);
    userInput.value = ans;
    expression = "";

}
function erase(){
    userInput.value = "";
}