//Typescript controls the access using the access specifiers during compile time and not during runtime

class AmazonProducts{
    public prod_id:number;
    #prod_name:string;

    constructor(prod_id:number, prod_name:string){
        this.prod_id = prod_id;
        this.#prod_name = prod_name;
    }

    displayData(){
        console.log(`${this.prod_id} | ${this.#prod_name}`)
    }
}

let projector = new AmazonProducts(456,"Epson Projector")
projector.displayData()
console.log(projector.#prod_name);

/*

public:
It is accessible everywhere
Inside the same class, Outside the class,  Inside sub class

private:
Accessible only inside the class where it is declared
Cannot be accessed Outside the class,  Inside sub class

protected:
Can be accessed Inside the class where it is declared,  Inside sub class

strictly private:

*/