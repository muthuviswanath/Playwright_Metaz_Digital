let languages : [string, number]
languages = ["German",1]
console.log(languages)
languages = ["Japanese",10]
console.log(languages)
// languages = [12,"Taglog"]

let palette:[number, number, number]
palette = [0,255,0]
console.log(palette)
palette = [0,0,255]
console.log(palette)

type  ApiResponse = [number, string, boolean]
const response: ApiResponse = [200,'Ok',true]
