//A JavaScript function that takes a number as a parameter and generates 
//a Fibonacci sequence up to that number. The Fibonacci sequence starts with 
//0 and 1, and each subsequent number is the sum of the previous two.

function Fibonacci(broj){
    let niz=[];
    niz.push(0);
    niz.push(1);
    for(let i=1; i<=broj; i++){
        if(niz[i]===broj){
            break;
        }
        niz.push(niz[i-1]+niz[i]);
    }
    return niz;
}

let ispis=Fibonacci(21);
console.log(ispis);
