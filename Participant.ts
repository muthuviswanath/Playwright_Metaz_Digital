//Structuring the object type
let participant = {
    part_name:"Muthu",
    part_qual:"M.Tech"
}

console.log(participant.part_name)
console.log(participant.part_qual)

//Destructuring

let {part_qual,part_name} = participant
console.log(part_qual)
console.log(part_name)

//Field name matters and not the order
//It is possible to rename the fields


//Renaming the fields:

let {part_qual:qualification,part_name:Firstname} = participant
console.log(qualification)
console.log(Firstname)

