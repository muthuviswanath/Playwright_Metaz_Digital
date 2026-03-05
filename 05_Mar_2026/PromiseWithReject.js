function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Division by zero not allowed");
        }
        else {
            resolve(a / b);
        }
    });
}
divide(10, 0)
    .then((res) => console.log(`[Success]:${res}`))
    .catch((err) => console.log(`[Error]: ${err}`));
