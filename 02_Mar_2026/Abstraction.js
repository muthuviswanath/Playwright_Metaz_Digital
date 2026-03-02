/*
Abstract class is merely used to define only the common behaviors that
can be derived by its implementation classes.

Abstract classes cannot be instantiated - Cannot create object of Abstract Class

abstract keyword is used to define the abstract classes.

Syntax:
abstract class Class_Name{
}

Constructors are allowed even though we cannot use it to create objects
An abstract class can optionally have abstract methods
An abstract class can have concrete methods as well
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    //constructor
    function Product(name) {
        this.name = name;
    }
    Product.prototype.display = function () {
        return "Welcome";
    };
    return Product;
}());
var ElectronicProduct = /** @class */ (function (_super) {
    __extends(ElectronicProduct, _super);
    function ElectronicProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronicProduct.prototype.getData = function () {
        console.log("Hello");
    };
    return ElectronicProduct;
}(Product));
var Mouse = /** @class */ (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mouse.prototype.displayPrice = function () {
        return 670;
    };
    return Mouse;
}(ElectronicProduct));
var e = new Mouse("Potronics Mouse");
e.getData();
console.log(e.display());
console.log(e.displayPrice());
