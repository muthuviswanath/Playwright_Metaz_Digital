// Map - Transform the data
// Without using Map
// let my_num = [1,2,3,4,5]
// let square = []
// for (let num of my_num){
//     square.push (num ** 2)
// }
// console.log(square)
//With using map
var my_num = [1, 2, 3, 4, 5];
var square = my_num.map(function (n) { return Math.pow(n, 2); });
console.log(square);
//Filter - Select specific elements that matches the condition
//Without Filter
// let even = []
// for (let ele of my_num){
//     if (ele % 2 === 0){
//         even.push(ele)
//     }
// }
// console.log(even)
//With Filter
var even = my_num.filter(function (n) { return n % 2 === 0; });
console.log(even);
//Reduce - Combine everything into a single value
//Without reduce
// let total = 0
// for(let val of my_num){
//     total += val
// }
// console.log(total)
//With reduce
var total = my_num.reduce(function (sum, val) { return sum + val; });
console.log(total);
