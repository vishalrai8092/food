let foods = document.getElementById("foods");
 let orders = document.getElementById("orders");
 let dishs = document.getElementById("dishs");
 let trackBtn = document.getElementById("trackBtn");


 foods.addEventListener("click", function(){
    foods.style.color="red";
    orders.style.color="white";
    dishs.style.color="white";

 })

 
 dishs.addEventListener("click", function(){
    foods.style.color="white";
    orders.style.color="white";
    dishs.style.color="red";

 })

 
 orders.addEventListener("click", function(){
    foods.style.color="white";
    orders.style.color="red";
    dishs.style.color="white";

 })

 let logBtn = document.getElementById("logBtn");

 logBtn.addEventListener("click", function(){
    document.querySelector(".loginPage").style.display="block";
 })

 let loged = document.getElementById("logedBtn");

 loged.addEventListener("click", function(){

    let email = document.getElementById("name");
    let pass = document.getElementById("pass");

    if(email.value == "" || pass.value == ""){
        alert("Please Enter Email Password")
    }else{
        alert("You Loged In");
        document.querySelector(".loginPage").style.display="none";

    }

 })