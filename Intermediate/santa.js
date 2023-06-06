//Ex 3 Create a Javascript program that will make the Santa Clauses disappear on a click.

let santa = document.getElementsByClassName("santa");
let box = document.getElementsByClassName("box");

//santa disappear
for(let i = 0; i < santa.length; i++) {
santa[i].addEventListener("click", function(){
santa[i].style.visibility = "hidden"; })
}

//click on box and bell appears
for(let i = 0; i < box.length; i++){
box[i].addEventListener("click",function(){
    this.src="http://www.freepngimg.com/download/christmas_bell/1-2-christmas-bell-png-image.png"
})
}

//press and button changes the color and back
let statusButton = true;
let btn = document.getElementById("button");
btn.addEventListener("click",function(){
    
if(statusButton){
    btn.style.backgroundColor = "green";
    statusButton = false;
}else {
    btn.style.backgroundColor = "red";
    statusButton = true;
}
})

//changing background color onclick
let backgroundSanta = document.getElementById("main-container");
backgroundSanta.addEventListener("click", function(){
    this.style.backgroundColor = randomColor();
})
function randomColor(){
let r = Math.floor(Math.random()* 256);
let g = Math.floor(Math.random()* 256);
let b = Math.floor(Math.random()* 256);
return 'rgb(' + r + ',' + g + ',' + b + ')';
}
