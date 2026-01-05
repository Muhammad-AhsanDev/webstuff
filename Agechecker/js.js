const mycheckbox=document.getElementById("mycheck");
const Visa=document.getElementById("visa");
const mastercard=document.getElementById("Mastercard");
const paypal=document.getElementById("paypal");
const submitbtn=document.getElementById("mysubmit");
let word ="this";
let a =word.equalsto("this");
console.log(a);

submitbtn.onclick=function(){
    if(mycheckbox.checked){
        document.getElementById('subresult').innerText="You are subscribed"
    }
    else{
        document.getElementById("subresult").innerText="You are not subscribed"
    }
    if(Visa.checked){
        document.getElementById("paymentresult").innerText="You are paying with visa";
        
    }
    else if(mastercard.checked){
        document.getElementById("paymentresult").innerText="You are paying with mastercard"
    }
    else if(paypal.checked){
        document.getElementById("paymentresult").innerText="You are paying with paypal"
    }
    else{
        document.getElementById("paymentresult").innerText="You must select a payment type"
    }
}