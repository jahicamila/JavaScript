//Implementation of the curry function, which can transform the sum function 

function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}


let curriedSum = curry((a, b) => a + b);

console.log(curriedSum(1)(2)); // 3
