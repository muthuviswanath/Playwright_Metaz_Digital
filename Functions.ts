/*function functionName(parameter_1:type, .......parameter_n:type):returnType{

}
*/

//Creating a function which does not take any input and returns nothing
function display(){
    console.log("Hello")
}
display()

//Creating a function which does not take any input but returns a value

function show():string{
    return "Welcome to the world of Programming"
}
console.log(show())//Technically or programatically allowed to do so but not advisable in real world code

//Creating a function that takes input but returns nothing

function greetings(msg:string){
    console.log(msg)
}

greetings("Good Evening")


//Creating a function that takes input and returns a value
function joinString(str1:string, str2:string){
    return [345, 678]
}

let information = joinString("Kavin","Varsha")
console.log(information)