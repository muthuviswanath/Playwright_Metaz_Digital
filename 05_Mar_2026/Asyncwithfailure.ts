function divide(a:number, b:number):Promise<number>{
    return new Promise((resolve, reject)=>{
        if (b===0){
            reject("Division by zero not allowed")
        }
        else{
            resolve(a/b)
        }
    })
}

async function calculation(){
    try{
        let res = await divide(10,0)
        console.log(res)
    }
    catch(err){
        console.log(`[Error]: ${err}`)
    }
}

calculation()