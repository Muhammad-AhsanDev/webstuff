

let temp;
let CtoF;
document.getElementById("submitbtn").onclick=function(){
    if(document.getElementById("CtoF").checked){
        let inputvalue=document.getElementById("usertemp").value;
         temp=Number(inputvalue);
         CtoF=temp*9/5+32;
         console.log(CtoF);
         
         document.getElementById("result").innerText=CtoF+"F";
    }
    else if (document.getElementById("FtoC").checked){
        let inputvalue=document.getElementById("usertemp").value;
         temp=Number(inputvalue);
         FtoC=temp*9/5+32;
         console.log(FtoC);
         document.getElementById("result").innerText=FtoC+"C";

    }
};