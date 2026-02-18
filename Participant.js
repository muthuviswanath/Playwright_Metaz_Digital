//Structuring the object type
var participant = {
    part_name: "Muthu",
    part_qual: "M.Tech"
};
console.log(participant.part_name);
console.log(participant.part_qual);
//Destructuring
var part_qual = participant.part_qual, part_name = participant.part_name;
console.log(part_qual);
console.log(part_name);
//Field name matters and not the order
//Renaming the fields:
var qualification = participant.part_qual, Firstname = participant.part_name;
console.log(qualification);
console.log(Firstname);
