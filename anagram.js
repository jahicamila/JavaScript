//A JavaScript function that checks whether two strings are anagrams of each other. 
//An anagram is a word or phrase formed by rearranging the letters of another word or phrase

function anagram(string1, string2){
    if(string1.length != string2.length){
        return false;
    }
    let rijec1 = string1.split('');
    let rijec2 = string2.split('');
    rijec1.sort();
    rijec2.sort();
    string1=rijec1.join('');
    string2=rijec1.join('');

    for(let i=0; i<string1.length; i++){
        if(string1[i] != string2[i]){
            return false;
        }else{
            return true;
        }
    }
    
}

let provjera=anagram("bor", "rob");
console.log(provjera);
