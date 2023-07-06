//A function that takes a number as input and outputs a pattern of numbers using a loop. 
//For example, if the input is 5, the function should print the following pattern:
//    1
//    22
//    333
//    4444
//    55555

function piramida(broj){
    let string="";
    for(let i=1; i<=broj; i++){
        for(let j=1; j<=i; j++){
            string+=i;
        }
        console.log(string);
        string="";
    }
    
}

piramida(5);
