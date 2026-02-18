function fetchUser():any{
    return{
    "id":1001,
    "name":"Muthu",
    "isActive":true,
    "skills":["TypeScript","JavaScript"]
    };
}
const user = fetchUser()
console.log(user.id)
console.log(user.name.toUpperCase())
console.log(user.age)
console.log(user.isActive())