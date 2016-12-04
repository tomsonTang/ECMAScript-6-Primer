function f(x) {
    return g(x)
}

//情况1
function f(x) {
    let y = g(x)
    return y;
}

//情况2
function f(x) {
    return g(x) + 1;
}

//情况3
function f(x) {
    g(x)
}

function f(x) {
    g(x);
    return undefined;
}

function f(x) {
    if (x > 0) {
        return m(x)
    }
    return n(x);
}

function f() {
    let m = 1;
    let n = 2;
    return g(m + n);
}
f();

//等同于
function f() {
    return g(3);
}
f();

//等同于
g(3);

function addOne(a) {
    var one = 1;

    function inner(b) {
        return b + one;
    }
    return inner(a);
}

//优化
function addOne(a) {
    var one = 1;

    function inner(b, one) {
        return b + one;
    }
    return inner(a, one);
}