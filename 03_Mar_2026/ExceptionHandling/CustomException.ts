//Create a class that inherits from the class called Error
class ValidationError extends Error{
//Create a constructor and enter the message string that is needed to tell what type
// of error it is
constructor(message:string){
    super(message)
    this.name = "ValidationError"
    }
}
// Create a function where the possibility for error might be there and when 
// the error occurs, use the throw keyword and throw the custom exception object

function registerUser(age:number){
    if (age < 18){
        throw new ValidationError("User should be 18+ to get registered")
    }
    return "New user registered successfully"
}
//Wherever you consume it, use try and catch block to handle the exception
try{
    console.log(registerUser(16))
}
catch(error){
    let err = error as ValidationError
    console.log(err.message)
}