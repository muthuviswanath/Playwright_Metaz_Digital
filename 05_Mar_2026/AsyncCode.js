function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received from the API");
        }, 3000);
    });
}
async function main() {
    console.log("Begin Execution");
    let result = fetchData();
    console.log(result);
    console.log("End Execution");
}
main();
//Begin Execution
// 
