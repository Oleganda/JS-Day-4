//------------------------------ Basic Ex 1 and Ex 2--------------------------------
function resultTotal(){
let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let age = document.getElementById("age").value;


let job = document.getElementById("selectJob").value;
document.getElementById("jobResult").innerHTML = `My name is ${firstName} ${lastName}, I am ${age} and ${job}`
if (job == "I work in IT"){
   document.getElementById("jobResult").style.backgroundColor= "orange";
}
else if( job == "I work in hospitality"){
    document.getElementById("jobResult").style.backgroundColor= "green";
}
else if(job == "I don't work"){
     document.getElementById("jobResult").style.backgroundColor= "yellow";
}
else {
    document.getElementById("jobResult").style.backgroundColor= "red";
}

}
document.getElementById("sendButton").addEventListener("click", resultTotal);

