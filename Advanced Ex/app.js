//--------------Advanced---------------
//Create a circle and center it on the page. 
// When you hover on the circle, you will see a message under it : "you are in the circle".
// When the mouse leaves the circle you will see the message under it : "you are outside of the circle".
// When you click on the circle, the background will change to gray.
// When you double-click on the circle, the background will change to blue. 

let circle = document.getElementById("circle");
let text = document.getElementById("text");

circle.addEventListener("mouseover", function(){
    circle.style.background = "red";
    text.innerHTML = "You are inside of the circle"   
});

circle.addEventListener("mouseout", function(){    
    circle.style.background = "yellow";
    text.innerHTML = "You are outside of the circle"
    
});

circle.addEventListener("click", function(){
    circle.style.background = "grey";
})

circle.addEventListener("dblclick", function(){
    circle.style.background = "blue";
})


