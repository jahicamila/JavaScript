//A JavaScript function that checks the strength of a password based on certain 
//criteria such as length, presence of upper and lower case letters, numbers and special characters.

function snagaLozinke(lozinka){
    brojac = 0;

    if(lozinka.length > 8) {brojac++;}
    if (/[A-Z]/.test(lozinka)) {brojac++;}
    if(/[0-9]/.test(lozinka)){brojac++;}
    if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(lozinka)) {brojac++;}

    switch(brojac){
        case 1: 
            console.log("Slaba lozinka");
            break;
        case 2:
            console.log("Srednje jaka lozinka");
            break;
        case 3:
            console.log("Jaka lozinka");
            break;
        case 4:
            console.log("Njakvalitetnija lozinka");
            break;
    }
}

snagaLozinke("password123")
