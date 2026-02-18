function addition(a, b, c) {
    if (c)
        return a + b + c;
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid Arguments');
}
console.log(addition(10, 30));
console.log(addition("Good", "Morning"));
console.log(addition("23", "23"));
console.log(addition(23, 50, 67));
