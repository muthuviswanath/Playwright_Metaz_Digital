/*
A promise is an object that represents the result of an asynchronous operation

Synchronous Operation
task 1 completed
task 2 completed
task 3

Asynchronous operation

Task1 .... Executing.....
Task2 Completed 
Task3 .... Executing.....

It represents
1. It may have a value that is available right now
2. It might have a value that will be available at a later point of time
3. It may never have the value

API Request
Database Query
File Read
Network Calls

Syntax:
    let promise = new Promise((resolve, reject) => {
    
    });
*/

let promise = new Promise((resolve, reject) =>{
    let success = true;
    if(success){
        resolve ("Operation succeeded")
    }
    else{
        reject("Operation Failed")
    }
})

promise
    .then((muthu)=>{
        console.log(muthu)
    })
    .catch((kavin)=>{
        console.log(kavin)
    })