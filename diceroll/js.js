function rolldice(){
    const numofdice=document.getElementById("inp").value;
     const diceResult=document.getElementById("result");
     const diceimgs=document.getElementById("diceimg");
     const values=[];
     const imgs=[];
     for(let i=0;i<numofdice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
           imgs.push(`<img src="./${value}.png" alt="Dice ${value}">`);

        
     }
     console.log(imgs.join(""));
     
    diceResult.innerText="DICES: "+values.join(",")
    diceimgs.innerHTML=imgs.join(" ")
        }
    