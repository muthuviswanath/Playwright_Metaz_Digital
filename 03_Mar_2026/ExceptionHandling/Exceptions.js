function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
try {
    var result = divide(10, 0);
    console.log(result);
}
catch (error) {
    //Way 1
    // console.log((error as Error).message);
    //Way 2
    if (error instanceof Error) {
        console.log((error).message);
    }
}
