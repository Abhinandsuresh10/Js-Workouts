// Create a new Promise object
let promise = new Promise((resolve, reject) => {
    // Log a message indicating that we're working with a Promise
    console.log("I am a promise");
    // Resolve the Promise with a value of 2255
    resolve(2255);
});

// Attach a function to handle the successful resolution of the Promise
promise.then((value) => {
    // Log a message along with the resolved value
    console.log('Resolved:', value);
}).catch((error) => {
    // If something goes wrong, log an error message
    console.log('Rejected:', error);
});