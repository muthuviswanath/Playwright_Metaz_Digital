class Employee{
    constructor(public name:string){}
    getRole():string{
        return "employee"
    }
}

class Developer extends Employee{
    constructor(name:string){
        super(name);
    }    
    getRole(): string {
        return "Developer"
    }
    write_code(){
        console.log(`${this.name} develops application`)
    }
}

class Manager extends Employee{
    constructor(name:string){
        super(name);
    }    
    getRole(): string {
        return "Manager"
    }
    manage_Team(){
        console.log(`${this.name} is managing the team`)
    }
}

let emp1:Employee = new Developer("Kavin") //up-casting
let emp2:Employee = new Manager("Nalina") //up-casting



// Down casting using instance of (Safe way)
// using instanceof
if (emp1 instanceof Developer){
    emp1.write_code()
}

if (emp2 instanceof Manager){
    emp2.manage_Team()
}

//Down casting using in 

if ("write_code" in emp1){
    (emp1 as Developer).write_code()
}
else{
    (emp1 as Manager).manage_Team()
}

if ("manage_Team" in emp2){
    (emp2 as Manager).manage_Team()
}
else{
    (emp2 as Developer).write_code()
}


let employees:Employee[] = [
    new Developer("Muthu"),
    new Manager("Kavin")
]

for (let emp of employees){
    if ("write_code" in emp){
        (emp as Developer).write_code();
    }
    else if("manage_Team" in emp){
        (emp as Manager).manage_Team();
    }
}

let a = 345
console.log(typeof(a))
console.log(typeof(emp1))


