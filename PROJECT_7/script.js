let time = document.getElementById("time");
function calculatetime(){
    let currentDate = new Date();
    let days = ["","Mon","Tues","Wed","Thur","Fri","Sat","Sun"]
    let day = currentDate.getDay();
    let hour = currentDate.getHours();
    let min = currentDate.getMinutes();
    let ampm = hour > 12 ? "PM":"AM"
    hour = hour % 12;
    hour = hour < 10 ? '0' + hour:hour;
    min = min < 10 ? '0'+min:min;
    time.innerText= `${days[day]} ${hour}:${min}:${ampm}`
}
window.addEventListener("load",()=>{
    calculatetime();
})