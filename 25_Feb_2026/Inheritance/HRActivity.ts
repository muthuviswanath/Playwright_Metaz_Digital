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
class Employee{
    constructor(protected name:string, protected salary: number){
        this.name = name
        this.salary = salary
    }

    getDetails():string{
        return `${this.name} | ${this.salary}`
    }
}

class Developer extends Employee{
    constructor(protected name:string, protected salary: number){
        super(name, salary)
    }

    getDetails(): string {
        return `${this.name} works as developer and earns a salary of ${this.salary}`
    }

    perfomRole():void{
        console.log(`the primary goal is to develop applications`)
    }

    additionalTask():void{
        console.log(`Pushes the code to QA Server`)
    }
}
class TestEngineer extends Employee{
    constructor(protected name:string, protected salary: number){
        super(name, salary)
    }

    getDetails(): string {
        return `${this.name} works as test engineer and earns a salary of ${this.salary}`
    }

    perfomRole():void{
        console.log(`the primary goal is to test the applications developed by the developer`)
    }
}

class CEO extends Employee{
    constructor(protected name:string, protected salary: number){
        super(name, salary)
    }

    getDetails(): string {
        return `${this.name} earns a salary of ${this.salary} as well as gets 15% of company's  share`

    }

    perfomRole():void{
        console.log(`the primary goal is to establish the business`)
    }
}

let dev:Developer = new Developer("Muthu", 45673)
let result:string = dev.getDetails()
dev.perfomRole();
dev.additionalTask();
console.log(result)

let te:TestEngineer = new TestEngineer("Varsha", 56673)
result = te.getDetails()
console.log(result)
te.perfomRole()

let ceo:CEO = new CEO("Nalina", 456673)
result = ceo.getDetails()
console.log(result)
ceo.perfomRole()
/*
When the name of the instance method present in the super/base/parent class is used in the sub/derived/child classes, 
it is considered as overridden method.

When the overridden method is called using the sub-class object, the implementation happens from the sub-class of the
respective object.

Whenever a method is present in the sub class and not in the super class it is called as sub class specific method

*/

let developer2:Employee = new Developer("Rohan", 40000)
console.log(developer2.getDetails())
// developer2.additionalTask();

//The up-casted variable developer2 has been down-casted to a variable dev2

let dev2 = developer2 as TestEngineer;
dev2.perfomRole()
dev2.additionalTask();

/*
If the sub class object is referred using the super class variable (reference variable) then it is 
called as Up-casting

When a variable is an up-casted variable, it can access only the overridden methods and cannot access 
the sub-class specific methods

In order to access the sub-class specific methods, the up-casted variables has to be down-casted

*/
