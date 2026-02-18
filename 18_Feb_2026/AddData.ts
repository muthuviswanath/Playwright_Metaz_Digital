function combine(...bradpitt: (number | string)[]): [number, string] {
    let total = 0
    let str = ''
    for (let arg of bradpitt) {
        if (typeof arg === 'number') {
            total += arg    // 87+23 = 110 + 64 = 174.34
        }
        else if (typeof arg === 'string') {
            str += arg //Congratulations Kavin, Varsha, Nalina
        }
    }
    return [total, str]
}

let [final_output_num,final_output_str] = combine(30,12,'Congratulations',45,' Kavin',23,', Varsha',64.34,', Nalina')
console.log(final_output_num)
console.log(final_output_str)

//It allows the function to accept multiple number of arguments with same or different data types
//use ...args type[] to define the parameters with the same type
//use ...args (type_1 | type_2 | ....... |type_n)[] to define the rest parameters with different types