//Typescript controls the access using the access specifiers during compile time and not during runtime
var AmazonProducts = /** @class */ (function () {
    function AmazonProducts(prod_id, prod_name) {
        this.prod_id = prod_id;
        this.prod_name = prod_name;
    }
    AmazonProducts.prototype.displayData = function () {
        console.log("".concat(this.prod_id, " | ").concat(this.prod_name));
    };
    return AmazonProducts;
}());
var projector = new AmazonProducts(456, "Epson Projector");
projector.displayData();
console.log(projector.prod_name);
