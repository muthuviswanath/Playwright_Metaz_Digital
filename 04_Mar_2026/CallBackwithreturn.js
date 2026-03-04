function add(x, y) {
    return x + y;
}
function operations(a, b, callback) {
    return callback(a, b);
}
var result = operations(10, 20, add);
console.log(result);
