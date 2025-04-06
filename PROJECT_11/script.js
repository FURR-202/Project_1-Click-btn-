let CreateFlashcardBox = document.getElementById("create-flashcard");//box that create flashcard is selected
let question = document.getElementById("Q-input");//(input box) having (question) selected
let answer = document.getElementById("ans-input");//(input box) having (answer) selected
let flashcardBox = document.getElementById("container");//(container) that will (store) cards selected
//array that will contain a object is declared and intialized.
//in local storage data stored in string form but here we need data in its real form so we used json parse which convert the data in localstorage in its real form(object form).
//here i conditioned that if localstorage already have content array then when code run content array fills with the local storage data otherwise it will intialized with []
let contentArray = JSON.parse(localStorage.getItem('Question')) ? JSON.parse(localStorage.getItem('Question')) : [];

//If local storage have data then its calling divmaker function
contentArray.forEach(divmaker);

//making a function which will create div
function divmaker(text){// this taking a parameter that will be a object we know beacause contentArray have objects as their element so above jo iteration ho rhi usme divmaker function call ho rha hai aur parmeter mein local storage ki stored value jaa rhi hai ik ik kr ke 
    // text = {my_question:WHO IS ELON MUSK,my_answer:I DON'T KNOW}
let card = document.createElement("div");// now div is created inside the document
let Q = document.createElement("h5");// heading tag created inside the document
let ans = document.createElement("p");// paragraph tag created inside the document
ans.innerText = text.my_answer.trim(); // text ke andr object ke my_answer key ki value ko trim krke paragraph tag ke andr daal diya
Q.innerText = text.my_question.trim(); // similary heading tag mein bhi daal diya
card.setAttribute("class","cards");//jo div bni hai  usme styling dene ke liye class daal di 
// answer ko cool tarike se dikhane ke liye phele nhi display none kr diya
ans.style.display = "none";
Q.addEventListener("click",()=>{
    // ab jab question pe click hoga tab agr display none hai toh block hokar dikhne lagegi agr block hai toh none ho jayegi 
    ans.style.display == "none" ? ans.style.display = "block" : ans.style.display = "none";
})
//This function will edit the card
function editquestion(newvalue,oldvalue){
    if(newvalue != oldvalue){
        contentArray.forEach((ele)=>{
        if(ele.my_question  === oldvalue){ele.my_question = newvalue;}})
            return newvalue;
}
    else return oldvalue;
}
function editanswer(newvalue,oldvalue){
    if(newvalue != oldvalue){
        contentArray.forEach((ele)=>{
         if(ele.my_answer === oldvalue){ele.my_answer = newvalue;}})
        return newvalue;}
    else return oldvalue;
    }
card.addEventListener("click",(event)=>{
        let ques = event.target.querySelector("h5");
        question.value = ques.innerText;
        let anss = event.target.querySelector("p");
        answer.value = anss.innerText;
        document.querySelector("#editItem").addEventListener("click",()=>{
            let cardindex = contentArray.findIndex(ele => ele.my_question === ques.innerText && ele.my_answer === anss.innerText);
            if(cardindex != -1){
            contentArray[cardindex].my_question = editquestion(question.value,ques.innerText);
           contentArray[cardindex].my_answer = editanswer(answer.value,anss.innerText);
            localStorage.setItem("Question",JSON.stringify(contentArray));
            ques.innerText = contentArray[cardindex].my_question;
            anss.innerText = contentArray[cardindex].my_answer;
        }
        })
})

//here jo kuch bhi banaya event lagaya value daali sab yaha se web pe aa jayegi by appending them
card.appendChild(Q);
card.appendChild(ans);
flashcardBox.appendChild(card);
}

// deleting everything function
function deletecard(){
    localStorage.clear();//local storage ko pura clear kr diya
    flashcardBox.innerHTML = "";// flashcard ko store krne wale container ko empty kr diya mtlb sab kuch delet he huya na jo bnaya thha
    contentArray = [];// aur content array jiske pass question answer thhe usse bhi uda diya 
}

// cool thing flash card banane wle box ko show krne ke liye display show krega ye function 
function ShowCreateBox(){
    CreateFlashcardBox.style.display = "block";
}

//flash card banane wle box ko hide krne ke liye display none krega ye function
function HideCreateBox(){
    CreateFlashcardBox.style.display = "none";
}

// create card function here no actually creating card but making sure what content will be putted inside the card 
// and what content will be stored in the localstorage(IF ITS NEW))
function CreateCard(){
    let info = {// info variable joki information lega in object form
        my_question:question.value,// my_question key ke andr question input box ki value jaa rhi hai
        my_answer:answer.value,//my_answer key mein answer input box ki value jaa rhi hai 
    }
    // this condition will check if same card is in the container or not if it is then it will not store that again and gives the alert and 
    // return the whole createcard function stops here no new card will be  made 
    // beacause divmaker ko call lgi he nhi jo ki lagti agr function return nhi huya hota toh
     if(contentArray.some(ele => ele.my_question.toLowerCase() === info.my_question.toLowerCase())){// (some) is used which is a built in array method or function jo dekhta agr ik bhi element condition se mil jata hai toh wahi krta hai jo bola jata hai 
            alert("Card already exist!");
            answer.value = "";
            question.value = "";
            return;}
            // agr duplicate element nhi mile toh function return nhi huya or niche ki chizze chali 
            // ye dono niche store kr rhe hai data
            contentArray.push(info);//info duplicate nhi hai aur wo puch ho gyi array mein 
            localStorage.setItem("Question",JSON.stringify(contentArray));// ab wo nayi chizze jo push huyi hai wo local storage mein store ho jayegi question key mein by using setitem prr ofcourse localstorage toh string value leta hai toh jason .stringfy string mein badl dega aur for store kra dega nayi value
            // ye stored data se dive banayaga kaise ki content array last mein nayi data store huya hai aur 
            // div function jo bnna hai usse parameter chaiye taki sirf ussi data ka div bna sake toh akhri index pe jo element hai usse as a parameter pass krdiya joki 
            // actually mein naya data hai aur ussi ka div bnana hai baki ka toh bnn gya upr he
            divmaker(contentArray[contentArray.length - 1]);//ab bana diya aur append bhi issi function mein ho gaya thha
            //ab input value ko empty kr diya taki user ko backspace press ke hatna na pade user benefit ke liye
            answer.value = "";
            question.value = "";
    
}
// ye function jo ik ik krke delete krta hai card ko 
function singleItemDelete(){
    if(contentArray.length !== 0){//ye check krti hai ki kahi array ki length 0 toh nhi agr array ki length zero hai mtlb koi element hai he nhi toh kya he delete krega
                                 //prr agr upr ki condition sahi hai mtlb array mein element hai 
    contentArray.pop();         // isse piche se ik ik kr ke  pop hoga array ke andr se ik ik kab jab ik ik baar ye function call hoga naki ik saath ik ik krke
    localStorage.setItem("Question",JSON.stringify(contentArray));//yaha pe localstorage mein jo wo data hai wo delete hoga delete nhi hoga balki phirse set hogi localstorage ki key mein ab nayi array jayegi jisme maine remove kr diya ik data 
    let cards  = document.querySelectorAll(".cards");//yaha pe jo cards banye thhe div maker function usse select kiya usse wahi class di thhi ussi se query selectorAll  krke uska array bn gya  aur select bhi ho gaya saare div(cards)
    flashcardBox.removeChild(cards[cards.length-1]);/*ye ab uss card ko remove kr rha hai kaise last wla krna hai toh jo last index pe hai uss element ko liya aur container se remove kr diya*/}
    else{
        alert("No cards found!");
    }//agr array mein element hai he nhi toh element daalo wla alert lga diya
}
//enter daabne pe bhi create krna hai toh isliye 
document.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        CreateCard();
    }
});




