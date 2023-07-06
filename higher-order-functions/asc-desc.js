//Funkcija koja preuređuje cifre svakog od brojeva u nizu na 
//osnovu uzlaznog (asc) ili silaznog (desc) redoslijeda.

function reorderDigits(arr, order) {
    let noviNiz = [];
    if(order == "asc"){
        for(let i=0; i<arr.length; ++i){
            let broj = asc(arr[i]);
            noviNiz.push(broj);
        }
        return noviNiz;
    } else if (order == "desc") {
        for(let i=0; i<arr.length; ++i){
            let broj = desc(arr[i]);
            noviNiz.push(broj);
        }
        return noviNiz;
    }
}

function asc(broj){
    const cifre = broj.toString().split('');
    cifre.sort((a,b) => a-b);
    let x = [parseInt(cifre.join(''))];
    return x;
}

function desc(broj){
    const cifre = broj.toString().split('');
    cifre.sort((a,b) => b-a);
    let x = [parseInt(cifre.join(''))];
    return x;
}

let niz = [515, 341, 98, 44, 112];
let sortiranNiz = reorderDigits(niz, "desc")
console.log(sortiranNiz);
