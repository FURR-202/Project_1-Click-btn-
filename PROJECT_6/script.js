let image = document.getElementsByClassName("image-box");
let btn1  = document.getElementById("previous-btn");
let btn2  = document.getElementById("next-btn");
let dots = document.getElementsByClassName("dot")
let index = 0;
function show_image(i){
    index += i;
    for(let i = 0;i<image.length;i++){image[i].style.display = "none";}// this loop is for blocking all images to show 
    if(index > image.length - 1){index = 0} // conditions if index get out of the array
    if(index < 0){index = image.length-1}// condition when index become negative 
    image[index].style.display="block";// specific image is displayed on screen
    for(let i =0;i<image.length;i++){dots[i].style.backgroundColor = "white"};// this loop is for all dots to get white
    dots[index].style.backgroundColor = "gray"; // specific dots is getting dark 
}
show_image(0);
console.log(dots)

