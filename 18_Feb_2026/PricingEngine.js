var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a = 10;
var b = 10;
var noDiscount = function (total) { return total; };
var ugadiDiscount = function (total) { return total * 0.9; }; // gives 10% off
var tamilNewYearDiscount = function (total) { return total * 0.7; }; // gives 30% off
var vishuDiscount = function (total) { return total * 0.8; }; // gives 20% off
function calculatePrice(strategy) {
    var pro = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        pro[_i - 1] = arguments[_i];
    }
    var strategies;
    var product_list;
    if (typeof strategy === 'function') {
        strategies = strategy;
        product_list = pro;
    }
    else {
        strategies = noDiscount;
        product_list = __spreadArray([strategy], pro, true);
    }
    var total = 0;
    for (var i = 0; i < product_list.length; i++) {
        total += product_list[i].price;
    }
    return strategies(total);
}
var Laptop = {
    name: "HP Laptop",
    price: 50000
};
var Mouse = {
    name: "Portronics Mouse",
    price: 500
};
var Projector = {
    name: "MI Projector",
    price: 65000
};
var Keyboard = {
    name: "Dell Wireless Keyboard",
    price: 5000
};
//Driver Code
var price_without_discount = calculatePrice(Mouse);
console.log("".concat(Mouse.name, " costs Rs.").concat(price_without_discount));
var price_with_discount = calculatePrice(vishuDiscount, Mouse);
console.log("".concat(Mouse.name, " costs Rs.").concat(price_with_discount, " after discount"));
var price_with_discount_multiple_products = calculatePrice(vishuDiscount, Mouse, Laptop, Keyboard);
console.log("List of your purchased products costs Rs.".concat(price_with_discount_multiple_products, " after discount"));
// 500
// 50000
// 5000
// -----
// 55500
// -----
// 44400
