let a: number = 10
let b = 10

type product = {
    name: string
    price: number
}

type pricingDetails = (total: number) => number

let noDiscount: pricingDetails = (total) => total
let ugadiDiscount: pricingDetails = (total) => total * 0.9 // gives 10% off
let tamilNewYearDiscount: pricingDetails = (total) => total * 0.7 // gives 30% off
let vishuDiscount: pricingDetails = (total) => total * 0.8 // gives 20% off

function calculatePrice(...prod: product[]): number
function calculatePrice(pricingStrategy: pricingDetails, ...prod: product[]): number

function calculatePrice(strategy: pricingDetails | product, ...pro: product[]): number {
    let strategies: pricingDetails
    let product_list : product[]

    if(typeof strategy === 'function'){
        strategies = strategy
        product_list = pro
    }
    else{
        strategies = noDiscount
        product_list = [strategy, ...pro]
    }
    // let total = 0
    // for(let i=0; i<product_list.length; i++){
    //     total += product_list[i].price
    // }

    let total = product_list.reduce((sum, prd) => sum + prd.price, 0)
    return strategies(total)
}

let Laptop:product = {
    name: "HP Laptop",
    price: 50000
}
let Mouse:product = {
    name: "Portronics Mouse",
    price: 500
}
let Projector:product = {
    name: "MI Projector",
    price: 65000
}
let Keyboard:product = {
    name: "Dell Wireless Keyboard",
    price: 5000
}


//Driver Code
let price_without_discount = calculatePrice(Mouse)
console.log(`${Mouse.name} costs Rs.${price_without_discount}`)

let price_with_discount = calculatePrice(vishuDiscount, Mouse)
console.log(`${Mouse.name} costs Rs.${price_with_discount} after discount`)

let price_with_discount_multiple_products = calculatePrice(vishuDiscount, Mouse, Laptop, Keyboard)
console.log(`List of your purchased products costs Rs.${price_with_discount_multiple_products} after discount`)

// 500
// 50000
// 5000
// -----
// 55500
// -----

// 44400