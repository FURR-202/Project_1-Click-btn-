let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.querySelector("button");
let img = document.querySelector("img");
function generate(){
    let map = new Map();
    map.set("—Tomoya Okazaki","“What are you so hesitant about? It’s your dream, isn’t it? It’s right in front of you, and you’re wavering? You gotta be reckless and take whatever you can!”");
    map.set("—Monkey D. Luffy","“If you don’t take risks, you can’t create a future.”");
    map.set("—Roy Mustang","“Nothing’s perfect, the world’s not perfect, but it’s there for us, trying the best it can. That’s what makes it so damn beautiful.”");
    map.set("-Guts","If you're always worried about crushing the ants beneath you... you won't be able to walk.");
    let img_array = ["https://i.pinimg.com/736x/aa/ee/07/aaee07e8b49f3d6d2bbcc1e1e0d3ae6e.jpg","https://i.pinimg.com/736x/a1/a5/8d/a1a58d9bc0e21ca76891243d1116b948.jpg","https://i.pinimg.com/736x/e8/2d/7c/e82d7c01237829f2baebd03060749893.jpg","https://i.pinimg.com/736x/d0/b4/71/d0b471812953f428b821728ee6304705.jpg"];
    let key_array =[];
    let quote_array = [];
    map.forEach((ele,key)=>{
        quote_array.push(ele);
        key_array.push(key);
    })
    let random = Math.floor(Math.random()*4);
    author.innerHTML = key_array[random];
    quote.innerHTML = quote_array[random];
}
btn.addEventListener("click",()=>{
    generate();
})




