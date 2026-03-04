/*
A callback function is a function that is passed an argument to another function
This function gets executed after the calling function completes its task.
*/

/*
Syntax:
function callingfunction(callback:()=>void){
    statements
    callback()
}

function test(){
    implementation of the callback
}
    
callingfunction(test)
*/



let age:number = 10

function test(){
    console.log("Hi")
}

function help(birth:number, callback:()=>void){
    console.log(birth)
    callback()
}

help(age, test)




