function openfridge(...foods){
    console.log(...foods);
    
}


let f1 ="macroni";
let f2="bannna";
let f3="cake";


openfridge(f1,f2,f3);

console.log("SUMMING NUMBERS");

function sum(...numbers){
    let result=0;
    for(let number of numbers){
        result+=number;
    }
    return result;
}
const total=sum(1,20,90,12,24,1234);
console.log("your total is: $"+total)