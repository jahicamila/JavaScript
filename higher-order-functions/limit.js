//A function that takes a number/limit as an argument and returns the smallest 
//number that is divisible by all numbers from 1 to the entered limit.

function najmanjiBrojDjeljivSaSvimBrojevimaDo(limit) {
    let result = 1;
    
    for (let i = 1; i <= limit; i++) {
      result = nzv(result, i);
    }
    
    return result;
  }
  
  function nzv(a, b) {
    return (a * b) / nzd(a, b);
  }
  
  function nzd(a, b) {
    if (b === 0) {
      return a;
    }
    
    return nzd(b, a % b);
  }
  
console.log(najmanjiBrojDjeljivSaSvimBrojevimaDo(6));
console.log(najmanjiBrojDjeljivSaSvimBrojevimaDo(7));
console.log(najmanjiBrojDjeljivSaSvimBrojevimaDo(10));
