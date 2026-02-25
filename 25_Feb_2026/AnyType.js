//Readonly modifier
//If a property or field name or the variable of the class is marked as readonly, then
// the assignment operation can happen only in the following places:
// 1. Inside a constructor
// 2. In the property declaration
var id = 123123;
var SalesPerson = /** @class */ (function () {
    function SalesPerson(birth_date) {
        this.birth_date = new Date(2026, 5, 13);
        this.birth_date = birth_date;
    }
    SalesPerson.prototype.test = function () {
        console.log(this.birth_date);
    };
    return SalesPerson;
}());
var sp = new SalesPerson(new Date(1990, 5, 12));
sp.test();
