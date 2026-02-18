let skills:string[] = []
skills.push("TypeScript")
skills.push("JavaScript")
skills.push("Playwright")

console.log(skills)
console.log(skills[1])

skills.splice(1,0,"Python")
console.log(skills)

skills.splice(1,1,"Java")
console.log(skills)

skills.splice(1,0,"Dart","C#")
console.log(skills)

skills.splice(1,1)
console.log(skills)

skills.splice(1,3)
console.log(skills)

