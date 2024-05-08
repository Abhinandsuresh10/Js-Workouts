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



//------------Pure Functions------------//
// function add(a, b) {
//     return a + b;
// }

// const result = add(10,10);
// console.log(result);



//------------Impure Functions------------//
// let total = 5;

// function addTotal(num) {
//     total += num;
// }

// addTotal(5);

// console.log(total);



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
// function* GeneratorFunction(a) {
//     for (let i = 1; i <=10; i++){
//         yield a * i
//     }
// }

// const generator = GeneratorFunction(5);

// let set = setInterval(() => {
//     console.log(generator.next());
// }, 1000);

// setTimeout(() => {
//     clearInterval(set)
// }, 11000);



// Generate even numbers
// function* GeneratorFunction(num) {
//     for (let i = 0; i <= 10;i++) {
//         yield num += 2;
//     }
// }

// let generator = GeneratorFunction(0);

// let set = setInterval(() => {
//     console.log(generator.next().value);
// }, 1000);


// FACTORY FUNCTION
// function factory(name, age) {
//     return {
//         name: name,
//         age: age,
//         greet: function () {
//             console.log(`Hello my name is ${this.name} and iam ${this.age} years old`);
            
//         }
//     };
// };

// const person1 = factory('Vishnu', 24);
// const person2 = factory('John', 30);

// person1.greet();
// person2.greet();


// Arrow function returning another function
// const multi = (factor) => {
//     return (number) => {
//         return number * factor;
//     };
// };

// const double = multi(2);
// console.log(double(5));


function* even() {
    let num = 1;
    while (true) {
        if (num % 2 == 0) {
            yield num;
        }
        num++;
    }
}

const b = even();


setInterval(() => {
    console.log(b.next().value);
},1000)