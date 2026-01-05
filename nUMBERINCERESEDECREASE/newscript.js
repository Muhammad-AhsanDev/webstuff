let count =0;
document.getElementById("btn1").onclick=function(){
    count--;
    document.getElementById("counter").innerText=count;
}


document.getElementById("btn2").onclick=function(){
    count=0;
    document.getElementById("counter").innerText=count;
}



document.getElementById("btn3").onclick=function(){
    count++;
    document.getElementById("counter").innerText=count;
}
let x=3;
let y =23;
let q =21;
let z =Math.max(x,y,q);
console.log(z);
let iny = Math.round(Math.random()*10);
console.log(iny);
