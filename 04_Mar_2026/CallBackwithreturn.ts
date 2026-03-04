function add(x:number, y:number):number{
    return x + y
}

function operations(a:number, b:number, callback:(ab:number, cd:number)=>number):number{
    return callback(a, b)
}

let result = operations(10,20,add)
console.log(result)