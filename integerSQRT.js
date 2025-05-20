
const dx = 0.001
const TOLERANCE = 0.0001
function average(a, b) { return ((a + b) / 2) }

function fixedPoint(fn, startGuess) {
    function isClose(a, b) { return ((Math.abs(a - b)) < TOLERANCE) }
    let guess = startGuess;

    while (true) {
        let newGuess = fn(guess)
        if (isClose(guess, newGuess)) return newGuess;
        guess = newGuess
    }
}

function averageDamping(fn) {
    return ((x) => (average(x, fn(x))))
}




function transFormFixedPoint(fn, transformation, startGuess) {
    return fixedPoint(transformation(fn), startGuess)
}

function derivative(fn) {
    return ((x) => (fn(x + dx) - fn(x)) / dx)
}

function newtonTransform(fn) {
    return ((x) => (x - (fn(x) / (derivative(fn)(x)))));
}

function sqrt(x) {
    return transFormFixedPoint(((y) => (y * y - x)), newtonTransform, '1')
}


console.log(
    sqrt(9)
);
