let backCount = document.getElementById("backCount");
const backMinus = document.getElementById("backMinus");
const backAdd = document.getElementById("backAdd");

let shoeCount = document.getElementById("shoeCount");
const shoeAdd = document.getElementById("shoeAdd");
const shoeMinus = document.getElementById("shoeMinus");

let calcTotal = document.getElementById("calcTotal");

backAdd.addEventListener("click", () => {
    backCount.innerHTML = parseInt(backCount.innerHTML) + 1;

    
});

backMinus.addEventListener("click", () => {
    backCount.innerHTML = parseInt(backCount.innerHTML) - 1;


    if (parseInt(backCount.innerHTML) < 1) {
        backCount.innerHTML = 0;
    }
})

shoeAdd.addEventListener("click", () => {
    shoeCount.innerHTML = parseInt(shoeCount.innerHTML) + 1;

})

shoeMinus.addEventListener("click", () => {
    shoeCount.innerHTML = parseInt(shoeCount.innerHTML) - 1;

    if (parseInt(shoeCount.innerHTML) < 1) {
        shoeCount.innerHTML = 0;
    }
})


function checkAmount(){

let backAmount = parseFloat(backCount.innerHTML)*54.99;
let shoeAmount = parseFloat(shoeCount.innerHTML)*74.99;

let total = parseFloat(backAmount) + parseFloat(shoeAmount);

if(total == 0){
    calcTotal.innerHTML = "$0";
}else{
    total+=19;
    calcTotal.innerHTML = "$"+ total.toFixed(2);
}
}

setInterval(checkAmount, 100);

function validateForm(){
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let address = document.forms["myForm"]["address"].value;
    let city = document.forms["myForm"]["city"].value;
    let countries = document.forms["myForm"]["countries"].value;
    let phone = document.forms["myForm"]["phone"].value;
    let postal = document.forms["myForm"]["postal"].value;

    if(name == "" || email == "" || address == "" || city == "" || countries == "" || phone == "" || postal == "" ){
        alert("Please fill out all fields");
        return false;
    }else{
        alert("Thank you for your purchase!");
        return true;
    }
}