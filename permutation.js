//A function that takes a string as input and returns an array containing all possible 
//permutations of the characters in the string. Each permutation should be represented 
//as a unique string.

function permutacije(string){
    let niz=[];
    for(let i=0; i<string.length; i++){
        let prvoSlovo=string[i];
        let ostatakSlova=string.slice(0,i)+string.slice(i+1);
        let ostalePermutacije=permutacije(ostatakSlova);

        for(let j=0; j<ostalePermutacije.length; j++){
            niz.push(prvoSlovo+ostalePermutacije[j]);
        }
    }
    return niz;
}

let provjera=permutacije("abc");
console.log(provjera);
