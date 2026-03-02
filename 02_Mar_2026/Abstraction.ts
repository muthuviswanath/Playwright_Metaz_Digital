/*
Abstract class is merely used to define only the common behaviors that 
can be derived by its implementation classes.

Abstract classes cannot be instantiated - Cannot create object of Abstract Class

abstract keyword is used to define the abstract classes.

Syntax:
abstract class Class_Name{
}

Constructors are allowed even though we cannot use it to create objects
An abstract class can optionally have abstract methods
An abstract class can have concrete methods as well
*/

abstract class Product{
    //constructor
    constructor(public name:string){

    }

    abstract getData():void;
    abstract displayPrice():number;

    display():string{
        return "Welcome"
    }

}

abstract class ElectronicProduct extends Product{

    getData():void{
        console.log(`Hello`)
    }
}

class Mouse extends ElectronicProduct{
    
    displayPrice():number{
        return 670
    }
}

let e = new Mouse("Potronics Mouse")
e.getData()
console.log(e.display())
console.log(e.displayPrice())


class Laptop extends ElectronicProduct{
    
    displayPrice():number{
        return 67000
    }
}
