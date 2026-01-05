function generatepassword(lenght,includeLowercase,includeUppercase,includeNumbers,includesymobls){
    const lowercasechars="abcdefghijklmnopqrstuvwxyz";
    const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="0123456789";
    const symbolchars="!@#$%^&*()_+-=";
    let allowedchars="";
    let password="";

    allowedchars+= includeLowercase ? lowercasechars:"";
    allowedchars +=includeUppercase? uppercasechars:"";
    allowedchars += includeNumbers? numbers:"";
    allowedchars +=includesymobls?symbolchars:"";
    if(lenght<=0){
        return"password length must be atleast of length 1 STUPIOD!!!";
    }
    if(allowedchars.length ==0){
        return"At least 1 set of chars must be selected ";
    }
    for(let i=0;i<lenght;i++){
        const randomindex=Math.floor(Math.random()*allowedchars.length);
        password +=allowedchars[randomindex]
    }


    return password;
}

const passwordlength= 12;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers = true;
const includesymobls=true;

const password = generatepassword(passwordlength,includeLowercase,includeUppercase,includeNumbers,includesymobls);

document.getElementById("p").innerText="GENEREATED PASSWORD: "+password;




console.log("GENEREATED PASSWORD: "+password);


