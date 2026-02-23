// Using constructor function is not recommended in TypeScript

function Person(name: string, age: number) {
    this.name = name;
    this.age = age;
}

(Person as any).prototype.getInfo = function(){
    return `${this.name} is ${this.age} years old.`;
}

let per = new (Person as any)("Muthu", 41)
console.log(per.getInfo()); // Output: Muthu is 41 years old.

// Using class - Recommended way
class Employee{
    constructor(public name: string,public age : number) {

    }
}

let emp1 = new Employee("Kavin", 24)
console.log(emp1.name)
console.log(emp1.age)

//Class variations - Java style
class Product{
    prod_id:number;
    product_name:string;
    price:number;

    constructor(prod_id:number, product_name:string, price:number){
        this.prod_id = prod_id;
        this.product_name = product_name;
        this.price = price;
    }

    getProductDetails(){
        return `${this.prod_id} | ${this.product_name} | ${this.price}`
    }
}

let laptop = new Product(123,'HP Laptop', 34567.76)
console.log(laptop.getProductDetails())

//Creating objects using interfaces
interface Items{
    item_id: string;
    item_name : string;
    getInfo():string; //Abstract method
}
//Abstract Method:
// It does not have any implementation

//Concrete Method:
// A method with implementation or method body or method definition

let mouse : Items = {
    item_id: "ITR_123",
    item_name: "Wireless Mouse",

    //providing method implementation
    getInfo():string{
        return `${this.item_id} | ${this.item_name}`
    }
}

console.log(mouse.item_id)
console.log(mouse.item_name)
console.log(mouse.getInfo())//method call