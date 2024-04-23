let promise = new Promise((resolve, reject) => {
    console.log('Iam a promise');
    resolve(200);
});

promise.then((value) => {
    console.log('Resolved', value);
}).catch((err) => {
    console.log('Failed');
});