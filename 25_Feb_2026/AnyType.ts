//Readonly modifier
//If a property or field name or the variable of the class is marked as readonly, then
// the assignment operation can happen only in the following places:
// 1. Inside a constructor
// 2. In the property declaration

const id:number = 123123;
class SalesPerson{
    readonly birth_date: Date = new Date(2026, 5,13);

    constructor(birth_date:Date){
        this.birth_date = birth_date;
    }

    test(){
            console.log(this.birth_date)
    }
}

let sp = new SalesPerson(new Date(1990, 5,12));
sp.test()

/*
Readonly                                                Const

Used for class properties                           Used for regular variables

Initialization must be either                       Mandatory to initialize at the time of 
1. Within the constructor                           declaration
2. At the time of declaration

*/