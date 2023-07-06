//A function that takes an array of numbers as input and finds the median. The median is 
//the middle element in a sorted array if the array has an odd number of elements, 
//or the average of the two middle elements if the array has an even number of elements.

function medijan(niz){
    niz.sort();
    let medijan=0;
    let srednjiElementIndex=Math.floor(niz.length/2);

    if(niz.length%2!==0){
        let srednjiElement=niz[srednjiElementIndex];
        medijan=srednjiElement;
    }else{
        let prviSrednji=niz[srednjiElementIndex-1];
        let drugiSrednji=niz[srednjiElementIndex];
        medijan=(prviSrednji+drugiSrednji)/2;
    }
    return medijan;
}

let provjera=medijan([4,3,2,7,8,1]);
console.log(provjera);
