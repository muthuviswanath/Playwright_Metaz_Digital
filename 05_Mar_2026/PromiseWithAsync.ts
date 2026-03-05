function fetchData():Promise<string>{
    return new Promise((resolve, reject)=>{
        console.log("Load the web elements")
        console.log("Click on the download button")
        setTimeout(()=>{
            resolve("Employee Payroll Downloaded successfully...")
        }, 3000)

    })
}

fetchData()
.then((result)=>{console.log(result)})
.catch((err)=>{console.log(err)})