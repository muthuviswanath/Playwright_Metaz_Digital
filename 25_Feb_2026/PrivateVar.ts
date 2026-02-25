class Emp{
    private salary:number = 5678;

    get_sal():number{
        return this.salary;
    }
}

const em = new Emp();
console.log(em.get_sal())
// console.log(em.salary)

const emp_l:any = new Emp()
console.log(emp_l.salary)

class BankBalance{
    #balance:number = 200000

    getBalance():number{
        return this.#balance
    }
}
const acc = new BankBalance()
console.log(acc.getBalance())
// console.log(acc.#balance)
// console.log(acc[#balance])

const acc_1: any = new BankBalance()
console.log(acc_1.#balance)
