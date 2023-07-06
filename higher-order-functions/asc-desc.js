//Funkcija koja preuređuje cifre svakog od brojeva u nizu na 
//osnovu uzlaznog (asc) ili silaznog (desc) redoslijeda.

function reorderDigits(arr, order) {
     let newString = [];
     if(order == "asc"){
         for(let i=0; i<arr.length; ++i){
             let number = asc(arr[i]);
             newString.push(number);
         }
         return newString;
     } else if (order == "desc") {
         for(let i=0; i<arr.length; ++i){
             let number = desc(arr[i]);
             newString.push(number);
         }
         return newString;
     }
}

function asc(number){
     const digits = number.toString().split('');
     digits.sort((a,b) => a-b);
     let x = [parseInt(digits.join(''))];
     return x;
}

function desc(number){
     const digits = number.toString().split('');
     digits.sort((a,b) => b-a);
     let x = [parseInt(digits.join(''))];
     return x;
}

let string = [515, 341, 98, 44, 112];
let sortedString = reorderDigits(string, "desc")
console.log(sortedString);
