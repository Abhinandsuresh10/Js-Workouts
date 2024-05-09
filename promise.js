// let promise = new Promise((resolve, reject) => {
//     console.log('Iam a  promise');
//     resolve(200)
// });

// promise.then((value)=> {
//     console.log('resolve', value);
// }).catch((err) => {
//     console.log('failed');
// });


// ODD OR EVEN USING PROMISE //
let promise = new Promise((resolve, reject) => {
    let num = parseInt(prompt('Enter a number'));
    if (num % 2 == 0) {
        resolve(`${num} is even number`);
    } else {
        reject(`${num} is odd number`);
    }
});

promise.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
