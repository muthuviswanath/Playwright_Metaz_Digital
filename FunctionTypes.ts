//1.Classical way of creating a function
function display(a:number, b:string):string{
    return b+a
}

//2. Function Expression without using Arrow function

let multiply = function (x:number,y:number):number{
    return x*y
}

console.log(multiply(10,30))


//3. Function Expression using arrow function
let calculation:(a:number,b:number) => number


calculation = (a,b) => a+b;
console.log(calculation(10,20))
calculation = (a,b)=> a*b;
console.log(calculation(10,20))
calculation = (a,b)=> a/b;
console.log(calculation(10,20))
calculation = (a,b)=> a-b;
console.log(calculation(10,20))
calculation = (a,b)=> a**b;
console.log(calculation(10,20))

//4. Functions with Optional Parameters
let greetings: (name:string, skills?:string) => string;

greetings = (name) => `welcome to the world of Typescript ${name}`
console.log(greetings("Varsha"))
greetings = (name,skills) => `welcome to the world of ${skills} ${name}`
console.log(greetings("Nalina","Playwright"))

let greet = (names:string, skill?:string) =>{
    if(skill){
        return `Hello ${names}. You have the skill of ${skill}` 
    }
    return `Hello ${names}.`
};
console.log(greet("Kavin","Project Management"))
console.log(greet("Muthu"))

//Functions with default parameter/arguments
let calculateDiscount:(price:number, discount?:number) => number;
calculateDiscount = (price, discount=10) => {return price - (price * discount /100);}

console.log(calculateDiscount(1000))
console.log(calculateDiscount(1000, 20))