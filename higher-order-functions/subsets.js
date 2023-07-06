//A function that, for an entered string, returns a string of all possible subsets. 
//The solution must not contain duplicate substrings.

function vracamSubsete(niz){
    let subseti = [[]]; 
    for(let i=0; i<niz.length; ++i){
        let trenutnaDuzinaSubseta = subseti.length;
        console.log(trenutnaDuzinaSubseta)

        for(let j=0; j<trenutnaDuzinaSubseta; ++j){
            let subset = subseti[j];
            let noviSubset = subset.concat(niz[i]);

            subseti.push(noviSubset);
        }
    }
    return subseti;
}

let test = vracamSubsete([1,2,3]);
console.log(test);
