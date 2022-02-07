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
const withdrowNote = document.getElementById('withdrowNote');
const dipositNote = document.getElementById('dipositNote');

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
    withdrowNote.style.display= 'none';
    
    if(dipositeInput > 0){
        dipositNumber = dipositNumber + dipositeInput;
        dipositBalace.innerText = dipositNumber;
        displayBalaceFigure = displayBalaceFigure + dipositeInput;
        displayBalance.innerHTML = displayBalaceFigure;
        dipositNote.style.display= 'block';
    }
}

function withdrowHandeler(){
    const withdrowInputNumber =Math.round( withdrowInput.value);
    const dipositBalaces = Math.round(dipositBalace.innerHTML);
    withdrowInput.value = '';
    dipositNote.style.display= 'none';
    if(dipositBalaces > 0 && withdrowInputNumber > 0 && dipositNumber >= withdrowInputNumber){
        dipositNumber = dipositNumber - withdrowInputNumber;
        dipositBalace.innerText = dipositNumber;
        withdrowBal.innerHTML = withdrowInputNumber;
        displayBalaceFigure = displayBalaceFigure - withdrowInputNumber;
        displayBalance.innerHTML = displayBalaceFigure;
        withdrowNote.style.display= 'none';
        withdrowNote.style.display= 'none';
    
    }
    if(dipositBalaces === 0){
        withdrowNote.style.display= 'block';
    }
}
