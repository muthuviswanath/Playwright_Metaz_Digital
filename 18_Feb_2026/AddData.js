function combine() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    var str = '';
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (typeof arg === 'number') {
            total += arg; // 87+23 = 110 + 64 = 174.34
        }
        else if (typeof arg === 'string') {
            str += arg; //Congratulations Kavin, Varsha, Nalina
        }
    }
    return [total, str];
}
var _a = combine(30, 12, 'Congratulations', 45, ' Kavin', 23, ', Varsha', 64.34, ', Nalina'), total = _a[0], str = _a[1];
console.log(total);
console.log(str);
