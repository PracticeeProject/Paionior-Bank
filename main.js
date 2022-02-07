const mainDiv = document.getElementById("main-div-controler")
const sumbmit = document.getElementById('form-control');
const accountView =document.getElementById('account-view');
const dipositFild = document.getElementById('diposit-fild');
const dipositButton = document.getElementById('diposit-button');
let dipositBalace = document.getElementById('depositeBal');
const withdrowButton = document.getElementById('withdrowButton');
const withdrowInput = document.getElementById('withdrowInput');
const withdrowBal = document.getElementById('withdrowBal');
const displayBalance = document.getElementById('displayBalance');

let dipositNumber = Math.round(dipositBalace.innerHTML);
const withdrowNumber = Math.round(withdrowBal.innerHTML);
let displayBalaceFigure = Math.round(displayBalance.innerHTML);

sumbmit.addEventListener("click", submitHandeler);
dipositButton.addEventListener("click", depositFildHandeler);
withdrowButton.addEventListener('click', withdrowHandeler);

function submitHandeler(){
    mainDiv.style.display="none"
    accountView.style.display="block";
}

function depositFildHandeler(){
    const dipositValue = dipositFild.value;
    const dipositeInput = Math.round(dipositValue);
    dipositFild.value = "";
    
    if(dipositeInput >= 0){
        dipositNumber = dipositNumber + dipositeInput;
        dipositBalace.innerText = dipositNumber;
        displayBalaceFigure = displayBalaceFigure + dipositeInput;
        displayBalance.innerHTML = displayBalaceFigure;
    }
}

function withdrowHandeler(){
    const withdrowInputNumber =Math.round( withdrowInput.value);
    const dipositBalaces = Math.round(dipositBalace.innerHTML);
    withdrowInput.value = '';
    if(dipositBalaces > 0 && withdrowInputNumber > 0){
        dipositNumber = dipositNumber - withdrowInputNumber;
        dipositBalace.innerText = dipositNumber;
        withdrowBal.innerHTML = withdrowInputNumber;
        displayBalaceFigure = displayBalaceFigure - withdrowInputNumber;
        displayBalance.innerHTML = displayBalaceFigure;
    }
}
