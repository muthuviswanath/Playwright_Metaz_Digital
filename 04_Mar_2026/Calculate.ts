function calculate(
    a:number,
    b:number,
    callback:(x:number, y:number) => number):number{
        return callback(a,b)
    }

    let result:number = calculate(2,7,(x,y)=> x ** y)
    console.log(result)