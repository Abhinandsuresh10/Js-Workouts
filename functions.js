// function sum(a, b) {
//     return a + b; // This line returns the result
// }
// var result = sum(10, 20);
// console.log(result); // Output: 30



//------------Arrow vs Regular------------//
// const hai = (person) => {
//     console.log(`hello ${person}`);
// };
// hai('Vishnu');

// function hello(name) {
//     console.log(`hello ${name}`);
// };
// hello('Ressshhh')



//------------Anonymous------------//
// (function () {
//     console.log('Hello');
// })();



//------------Random------------//
// function random(number) {
//     return Math.floor(Math.random() * number);
// };
// console.log(random(10000));


//------------Generator functions------------//
// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const sequence = generateSequence();

// console.log(sequence.next())

// let str = "Vishnu"
// console.log(str[2])

// console.log(sequence.next())
// console.log(sequence.next());


//---Generate multiples on each seconds---//
function* GeneratorFunction(a) {
    for (let i = 1; i <=10; i++){
        yield a * i
    }
}

const generator = GeneratorFunction(5);
let set=setInterval(() => {
    console.log(generator.next())
},1000)

setTimeout(() => {
    clearInterval(set)
}, 11000);
