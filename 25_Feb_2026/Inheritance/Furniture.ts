class Furniture{
    make:string
    price:number

    constructor(make:string, price:number){
        this.make = make
        this.price = price
    }

    getData(){
        return `${this.make} | ${this.price}`
    }
}

class Chair extends Furniture{
    constructor(make:string, price:number){
        super(make, price)
    }
}

let furn = new Chair("wood", 675.45)
let data:string = (furn.getData())
console.log(data)

class Table extends Furniture{
    constructor(make:string, price:number){
        super(make, price)
    }
}

furn = new Table("Iron", 10000)
data = (furn.getData())
console.log(data)