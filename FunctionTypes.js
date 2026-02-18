//1.Classical way of creating a function
function display(a, b) {
    return b + a;
}
//2. Function Expression without using Arrow function
var multiply = function (x, y) {
    return x * y;
};
console.log(multiply(10, 30));
//3. Function Expression using arrow function
var calculation;
calculation = function (a, b) { return a + b; };
console.log(calculation(10, 20));
calculation = function (a, b) { return a * b; };
console.log(calculation(10, 20));
calculation = function (a, b) { return a / b; };
console.log(calculation(10, 20));
calculation = function (a, b) { return a - b; };
console.log(calculation(10, 20));
calculation = function (a, b) { return Math.pow(a, b); };
console.log(calculation(10, 20));
//4. Functions with Optional Parameters
var greetings;
greetings = function (name) { return "welcome to the world of Typescript ".concat(name); };
console.log(greetings("Varsha"));
greetings = function (name, skills) { return "welcome to the world of ".concat(skills, " ").concat(name); };
console.log(greetings("Nalina", "Playwright"));
var greet = function (names, skill) {
    if (skill) {
        return "Hello ".concat(names, ". You have the skill of ").concat(skill);
    }
    return "Hello ".concat(names, ".");
};
console.log(greet("Kavin", "Project Management"));
console.log(greet("Muthu"));
//Functions with default parameter/arguments
var calculateDiscount;
calculateDiscount = function (price, discount) {
    if (discount === void 0) { discount = 10; }
    return price - (price * discount / 100);
};
console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 20));
