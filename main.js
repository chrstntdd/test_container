function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

function sumPrimes(n) {
    var arr = [];
    while (n >= 0) {
        arr.push(n);
        n--;
    }
    var output = arr.filter(isPrime).reduce(function (a, b) {
        return a + b;
    }, 0);
    return output;
}