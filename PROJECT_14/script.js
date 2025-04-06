const main = document.querySelector("main");
let timeDisplay = document.getElementById("num");



let timeBegan = null;//kya clock shuru hui
let timeStop = null;//kitne time prrr timer ruka
let stopDuration = 0;// kitni der tak timer ruka huya thha
let startInterval = null; //ye start interval ko rokne ke liye
let flag = false;//timer ko rokne aur bnd krne ke liye
//jab page open hoga toh timer will be off 


main.addEventListener("click",()=>{// jab screen pe click hoga
    if(flag !== true){// agr flag true nhi hai mtlb on nhi hai 
        starttimer();// call krdiya function ko jo on kr dega timer ko 
        flag = true;// toh on krdo
    }
    else{
        stoptimer();// otherwise agr on hai toh stop krne wla function call hoga
        flag = false;// aur off
    }
})


function starttimer(){//timer start krega
    if(timeBegan === null){ // agr naya time hai to intially toh null he hoga toh page ke first load mein ye chlega
        timeBegan = new Date();//toh page ke first load mein ye chlega aur ye value jaise shuru huya jab timer tab ka time isme store hoga 
    }
    if(timeStop !== null){ // initially toh null hoga toh timestop mtlb kab time ko roka nhi hoga
        // agr hoga toh kab tak roka wo nikalna hai 
        // // how??? so abhi ka time aur jab roka thha tab ka time minus krdo toh kab tak roka aa jayega  
        stopDuration +=(new Date() - timeStop);// usse he iss mein add kr do 
    }
    startInterval =  setInterval(clockrunning,1000);// every 10miliseconds ye call hoga why?????// hrr milisecond mein value change krni hai toh hrr millisecond ye call krega

}


function clockrunning(){// call kra
    let currentTime = new Date();// hrr milli seconds baad jab ye call hoga tab ka current time isme jayega
    let timeElasped = new Date(currentTime - timeBegan - stopDuration);// isme abhi ka latest time mein se jab clock shuru kri thhi tab ka time minus hoke duration milegi aur kyuki baar baar ye function call h rha prr timebegan toh ik he rhega 
    // jab kabhi stop hui clock toh usme bhi kuch time tak stop hui hogi toh uss time ko bhi minus krna hoga kyuki wo hume nhi dikhana 
    let minutes = timeElasped.getUTCMinutes();// UTC ka use isliye kiya kyuki humne khud time bnaya hai
    let seconds = timeElasped.getUTCSeconds();
    timeDisplay.innerHTML = (minutes = minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds = seconds < 10 ? "0" + seconds : seconds) 
}
function stoptimer(){
    timeStop = new Date();
    clearInterval(startInterval);
    }
function reset(){
    timeBegan = null;
    timeStop = null;
    stopDuration = 0;
    flag = false;
    clearInterval(startInterval);
    timeDisplay.innerHTML = "00:00";
}
main.addEventListener("dblclick",()=>{
    reset();
})





