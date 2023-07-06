//A function that prints the entered number of rows of Pascal's triangle. 
//Pascal's triangle is a triangle in which the numbers are equal to the sum of the two numbers above.

function pascalovTrougao(brojRedova) {
    let trougao = [[1]];
    for(let i=1; i<brojRedova; ++i){
        let red = [1];
        let prethodniRed = trougao[i-1];

        for(let j=1; j<i; ++j){
            red.push(prethodniRed[j-1] + prethodniRed[j]);
        }

        red.push(1);
        trougao.push(red);
    }
    return trougao;
}

let test = pascalovTrougao(5);
console.log(test);
