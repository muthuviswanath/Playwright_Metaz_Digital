"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sum = function (val1, val2) {
    if (typeof val1 == 'number' && typeof val2 == 'number') {
        return val1 + val2;
    }
    if (typeof val1 == 'string' && typeof val2 == 'string') {
        return val1 + val2;
    }
    throw new Error("Both arguments must be of the same type");
};
console.log(sum(10, 20));
console.log(sum("Kavin", "Muthu"));
console.log(sum("Kavin", 2));
