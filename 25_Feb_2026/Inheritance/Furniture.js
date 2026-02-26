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
var Furniture = /** @class */ (function () {
    function Furniture(make, price) {
        this.make = make;
        this.price = price;
    }
    Furniture.prototype.getData = function () {
        return "".concat(this.make, " | ").concat(this.price);
    };
    return Furniture;
}());
var Chair = /** @class */ (function (_super) {
    __extends(Chair, _super);
    function Chair(make, price) {
        return _super.call(this, make, price) || this;
    }
    return Chair;
}(Furniture));
var furn = new Chair("wood", 675.45);
var data = (furn.getData());
console.log(data);
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(make, price) {
        return _super.call(this, make, price) || this;
    }
    return Table;
}(Furniture));
furn = new Table("Iron", 10000);
data = (furn.getData());
console.log(data);
