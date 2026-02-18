//Optional Parameters:
function display(msg, name) {
    console.log(msg);
}
display();
display("Hello World");
//Rest parameter allows a function to accept zero or more parameters of a specific type
// It has the following rule:
//1. A function has only one rest parameters
//2. If there are more than one parameters, then the rest parameter must be the last parameter
//3. The type of the rest parameter must be an array
function calculateTotal() {
    var amount = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        amount[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, amount_1 = amount; _a < amount_1.length; _a++) {
        var money = amount_1[_a];
        total += money;
    }
    return total;
}
var result = calculateTotal(10, 20, 30, 40, 50);
console.log(result);
result = calculateTotal();
console.log(result);
function joinStrings() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.join(" ");
}
var message = joinStrings("Laptop", "mobile", "tablet");
console.log(message);
message = joinStrings();
console.log(message);
