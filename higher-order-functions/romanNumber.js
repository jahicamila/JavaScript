//A function that converts an Arabic entered number to Roman. 
//Numbers can be entered in the interval from 1 to 3999.

function pretvaramURimske(broj) {
    if (broj < 1 || broj > 3999) {
      throw new Error('Uneseni broj mora biti u rasponu od 1 do 3999.');
    }
  
    const rimskiBrojevi = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let rezultat = '';
  
    for (let rimski in rimskiBrojevi) {
      while (broj >= rimskiBrojevi[rimski]) {
        rezultat += rimski;
        broj -= rimskiBrojevi[rimski];
      }
    }
  
    return rezultat;
  }

console.log(pretvaramURimske(95));    // Output: "XCV"
console.log(pretvaramURimske(8));     // Output: "VIII"
console.log(pretvaramURimske(1025));  // Output: "MXXV"
