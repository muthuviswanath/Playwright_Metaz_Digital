Promise.resolve("Success")
    .then(res => console.log(res));
Promise.reject("Failure")
    .catch(res => console.log(res));
