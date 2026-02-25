class Alpha{
    

    getFullname():string{
        return `Hi`
    }

}

class Beta extends Alpha{
   


}

let a = new Alpha()
let b = new Beta()
console.log(b.getFullname())
