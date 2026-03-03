import {Employee} from './Interfaces'
import {User} from './Interfaces'
import {Product} from './Interfaces'

let emp: Employee = {
    id: 1001,
    name : "Kavin"
}

console.log(emp.id)
console.log(emp.name)

let user: User = {
    username: "admin"
}
user.username = "Nalina"
user.age = 12

console.log(`${user.username} | ${user.age}`)

let p: Product = {
    prod_id: 1234,
    name: "Laptop"
}

console.log(p.prod_id)
console.log(p.name)
