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
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.getRole = function () {
        return "employee";
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name) {
        return _super.call(this, name) || this;
    }
    Developer.prototype.getRole = function () {
        return "Developer";
    };
    Developer.prototype.write_code = function () {
        console.log("".concat(this.name, " develops application"));
    };
    return Developer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.getRole = function () {
        return "Manager";
    };
    Manager.prototype.manage_Team = function () {
        console.log("".concat(this.name, " is managing the team"));
    };
    return Manager;
}(Employee));
var emp1 = new Developer("Kavin"); //up-casting
var emp2 = new Manager("Nalina"); //up-casting
// Down casting using instance of (Safe way)
// using instanceof
if (emp1 instanceof Developer) {
    emp1.write_code();
}
if (emp2 instanceof Manager) {
    emp2.manage_Team();
}
//Down casting using in 
if ("write_code" in emp1) {
    emp1.write_code();
}
else {
    emp1.manage_Team();
}
if ("manage_Team" in emp2) {
    emp2.manage_Team();
}
else {
    emp2.write_code();
}
var employees = [
    new Developer("Muthu"),
    new Manager("Kavin")
];
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var emp = employees_1[_i];
    if ("write_code" in emp) {
        emp.write_code();
    }
    else if ("manage_Team" in emp) {
        emp.manage_Team();
    }
}
var a = 345;
console.log(typeof (a));
console.log(typeof (emp1));
