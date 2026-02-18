//Optional Parameters:

function display(msg?:string, name?:string):void{
    console.log(msg)
}

display()
display("Hello World")

//Rest parameter allows a function to accept zero or more parameters of a specific type
// It has the following rule:

//1. A function has only one rest parameters
//2. If there are more than one parameters, then the rest parameter must be the last parameter
//3. The type of the rest parameter must be an array

function calculateTotal(...amount:number[]):number{
    let total = 0;
    for (let money of amount){
        total += money
    }
    return total
}

let result = calculateTotal(10,20,30,40,50)
console.log(result)
result = calculateTotal()
console.log(result)


function joinStrings(...strings:string[]):string{
    return strings.join(" ")
}

let message = joinStrings("Laptop","mobile","tablet")
console.log(message)
message = joinStrings()
console.log(message)