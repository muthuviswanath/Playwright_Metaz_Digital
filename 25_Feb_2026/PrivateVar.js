var Emp = /** @class */ (function () {
    function Emp() {
        this.salary = 5678;
    }
    Emp.prototype.get_sal = function () {
        return this.salary;
    };
    return Emp;
}());
// const em = new Emp();
// console.log(em.get_sal())
// console.log(em.salary)
var emp_l = new Emp();
console.log(emp_l.salary);
