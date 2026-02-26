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
/*create a class called Employee with the following attributes
name should be a protected string
salary should be a protected number
initialize them using the constructor

create a method called getDetails() that returns a string which displays the employee name and his salary

create the following subclasses

1. Developer
    Create only the constructor
2. TestEngineer
    Create only the constructor

Create the object of the respective sub classes and call the getDetails()
*/
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "".concat(this.name, " | ").concat(this.salary);
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary) {
        var _this = _super.call(this, name, salary) || this;
        _this.name = name;
        _this.salary = salary;
        return _this;
    }
    Developer.prototype.getDetails = function () {
        return "".concat(this.name, " works as developer and earns a salary of ").concat(this.salary);
    };
    Developer.prototype.perfomRole = function () {
        console.log("the primary goal is to develop applications");
    };
    return Developer;
}(Employee));
var TestEngineer = /** @class */ (function (_super) {
    __extends(TestEngineer, _super);
    function TestEngineer(name, salary) {
        var _this = _super.call(this, name, salary) || this;
        _this.name = name;
        _this.salary = salary;
        return _this;
    }
    TestEngineer.prototype.getDetails = function () {
        return "".concat(this.name, " works as test engineer and earns a salary of ").concat(this.salary);
    };
    TestEngineer.prototype.perfomRole = function () {
        console.log("the primary goal is to test the applications developed by the developer");
    };
    return TestEngineer;
}(Employee));
var CEO = /** @class */ (function (_super) {
    __extends(CEO, _super);
    function CEO(name, salary) {
        var _this = _super.call(this, name, salary) || this;
        _this.name = name;
        _this.salary = salary;
        return _this;
    }
    CEO.prototype.getDetails = function () {
        return "".concat(this.name, " earns a salary of ").concat(this.salary, " as well as gets 15% of company's  share");
    };
    CEO.prototype.perfomRole = function () {
        console.log("the primary goal is to establish the business");
    };
    return CEO;
}(Employee));
var dev = new Developer("Muthu", 45673);
var result = dev.getDetails();
dev.perfomRole();
console.log(result);
var te = new TestEngineer("Varsha", 56673);
result = te.getDetails();
console.log(result);
te.perfomRole();
var ceo = new CEO("Nalina", 456673);
result = ceo.getDetails();
console.log(result);
ceo.perfomRole();
/*
When the name of the instance method present in the super/base/parent class is used in the sub/derived/child classes,
it is considered as overridden method.

When the overridden method is called using the sub-class object, the implementation happens from the sub-class of the
respective object.

Whenever a method is present in the sub class and not in the super class it is called as sub class specific method

*/
var developer2 = new Developer("Rohan", 40000);
console.log(developer2.getDetails());
//The up-casted variable developer2 has been down-casted to a variable dev2
var dev2 = developer2;
dev2.perfomRole();
/*
If the sub class object is referred using the super class variable (reference variable) then it is
called as Up-casting

When a variable is an up-casted variable, it can access only the overridden methods and cannot access
the sub-class specific methods

In order to access the sub-class specific methods, the up-casted variables has to be down-casted

*/
