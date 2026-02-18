let username = "Kavin"
let login:(param1?:any, param2?:any, param3?:any) => string;

login = (username, password, captcha) => `welcome ${username}`
console.log(login(username,"pass","23ERT"))
login = (card, pin) => `welcome ${username}`
console.log(login("Visa",1234))
login = (number, pin) => `welcome ${username}`
console.log(login(9876543234,1234))



