let p1 = Promise.resolve("Task 1 Completed");
let p2 = Promise.resolve("Task 2 Completed");
let p3 = Promise.resolve("Task 3 Completed");
let p4 = Promise.reject("Task 4 Completed");
// For all to work, it is mandatory to ensure that all the Promises are resolved
// All resolve - All success
// One Reject - then alone: Error
// All Reject - catch alone: Only the first one
Promise.all([p1, p2, p3, p4])
    .then(res => console.log(res))
    .catch(err => console.log(err));
// Promise.allSettled([p1,p2,p3,p4])
// .then(res=>console.log(res))
