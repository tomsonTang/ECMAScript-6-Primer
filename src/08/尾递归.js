function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
factorial(5) //120

function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}
factorial(5, 1) //120

function restricted() {
    "use strict";
    restricted.caller; //error
    restricted.arguments; //error
}
restricted();

function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
}

function factorial(n) {
    return tailFactorial(n, 1);
}

factorial(5); //120

function currying(fn, n) {
    return function (m) {
        return fn.call(this, m, n);
    }
}

function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
}

const factorial = currying(tailFactorial, 1);

factorial(5); //120

function factorial(n, total = 1) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}
factorial(5); //120