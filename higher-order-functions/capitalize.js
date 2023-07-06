//A function that takes a string (a sentence) as a parameter, and returns that string with the 
//first letter of each word in the sentence capitalized.

function CapitaliseFirstLetter(string) {
  const arr = string.split(" ");
  for (let i = 0; i < arr.length; ++i) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
  }
  return arr.join(' ')
}

let rijec = "Da li je Elvis ziv?";
let test = CapitaliseFirstLetter(rijec);
console.log(test);
