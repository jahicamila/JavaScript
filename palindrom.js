//A JavaScript function that takes a string as a parameter and determines whether
//that string is a palindrome (reads the same both forwards and backwards).
function palindrom(string){
    let niz = string.split('');
    
    let okreniNiz = niz.reverse();
    
    let okreniString = okreniNiz.join('');
    
    if(string == okreniString){
        return true;
    } else {
        return false;
    }
}

let proba=palindrom("madam");
console.log(proba)


