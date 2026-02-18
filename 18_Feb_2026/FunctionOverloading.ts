function addition(a:number, b:number):number;
function addition(a:string, b:string):string;
function addition(a:number, b:number, c?:number):number;

function addition(a:any, b:any, c?:number):any{
    if(c) return a + b + c;

    if(typeof a === 'number' && typeof b === 'number'){
        return a+b
    }
    else if (typeof a === 'string' && typeof b === 'string'){
        return a+b
    }
    
    throw new Error('Invalid Arguments')
}

console.log(addition(10,30))
console.log(addition("Good","Morning"))
console.log(addition("23","23"))
console.log(addition(23,50,67))