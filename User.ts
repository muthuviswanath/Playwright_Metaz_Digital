interface employee{
    id:number
    name:string
    isActive:boolean
    skills:string[]
}

function fetchEmployee():employee{
    return{
    "id":1001,
    "name":"Muthu",
    "isActive":true,
    "skills":["TypeScript","JavaScript"]
    };
}

const emp = fetchEmployee()
console.log(emp.id)
console.log(emp.name.toUpperCase())
console.log(emp.age)
console.log(emp.isActive())
