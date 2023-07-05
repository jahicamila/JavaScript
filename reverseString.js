A JavaScript function that takes a string as a parameter and reverses it.

  function obrnutiString(string){
    let niz = string.split('');
    let okreniNiz = niz.reverse();
    let okreniString = okreniNiz.join('');
    return okreniString;
}

let proba=obrnutiString("amila");
console.log(proba);
