// Using constructor function is not recommended in TypeScript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.getInfo = function () {
    return "".concat(this.name, " is ").concat(this.age, " years old.");
};
var per = new Person("Muthu", 41);
console.log(per.getInfo()); // Output: Muthu is 41 years old.
// Using class - Recommended way
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    return Employee;
}());
var emp1 = new Employee("Kavin", 24);
console.log(emp1.name);
console.log(emp1.age);
//Class variations - Java style
var Product = /** @class */ (function () {
    function Product(prod_id, product_name, price) {
        this.prod_id = prod_id;
        this.product_name = product_name;
        this.price = price;
    }
    Product.prototype.getProductDetails = function () {
        return "".concat(this.prod_id, " | ").concat(this.product_name, " | ").concat(this.price);
    };
    return Product;
}());
var laptop = new Product(123, 'HP Laptop', 34567.76);
console.log(laptop.getProductDetails());
var mouse = {
    item_id: "ITR_123",
    item_name: "Wireless Mouse"
};
console.log(mouse.item_id);
console.log(mouse.item_name);
