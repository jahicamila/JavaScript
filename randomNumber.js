//A JavaScript function that generates a random number, and the user must guess that number. 
//Provide feedback to the user after each attempt, indicating whether the number is too large, 
//too small, or correct.

function randomBroj(broj){
    const randomBroj = Math.floor(Math.random());

    while(broj !== randomBroj){
        if(broj > randomBroj){
            console.log("Vas broj je veci") 
        }
        else {
            console.log("Vas broj je manji")
        }
    }

    if(broj == randomBroj){
        console.log("Pogodili ste: "+broj)
    }
}

randomBroj(13);
