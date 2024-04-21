//-----Sort 'a' named friuts and capitalize 'A' -----//
// const fruits = ["apple", "orange", "anar", "grape"];
// let newFruits = [];
// let arr = [];

// for (let i = 0; i < fruits.length; i++){
//     if (fruits[i].charAt(0) == 'a') {
//         newFruits.push(fruits[i]);
//     }
// };

// for (let key of newFruits) { //for of loop
//     let updatedKey = key.charAt(0).toUpperCase() + key.slice(1);
//     arr.push(updatedKey)
// }

// console.log(newFruits);
// console.log(arr);
//-------------------------------------------------------------------------//


//-------------------Palindrome with loop-------------------//
// let str = 'malayalam';
// let isPalindrome = true;

// let leftIndex = 0;
// let rightIndex = str.length-1;

// for (let i = 0; i < str.length / 2; i++){
//     if (str[leftIndex] !== str[rightIndex]) {
//         isPalindrome = false;
//         break;
//     }
//     leftIndex++;
//     rightIndex--;
// }

// if (isPalindrome) {
//     console.log(`${str} is palindrome`);
// } else {
//     console.log(`${str} is not palindrome`);
// }
//-------------------------------------------------------------------------//


//-------------------Palindrome with functions-------------------//
// let str = 'malayalam';
// if (str == str.split('').reverse().join('')) {
//     console.log(`${str} is palindrome`);
// } else {
//     console.log(`${str} is not palindrome`);
// }
//-------------------------------------------------------------------------//


//-------------------function palindrome-------------------//
// function isPalindrome (str) {
//     if (str == str.split('').reverse().join('')) {
//         console.log(`${str} is palindrome`);
//     } else {
//         console.log(`${str} is not palindrome`);
//     }
// }

// isPalindrome('malayalam');
// isPalindrome('vishnu');
//-------------------------------------------------------------------------//


//-------------------sum of first 2 index-------------------//
// const arr1 = [10, 20, 30, 40];
// const arr2 = [50, 60, 70, 80];

// let sumArr = arr1[0] + arr2[0];

// console.log(`sum = ${sumArr}`);
//-------------------------------------------------------------------------//


//-------------------Sum using promise-------------------//
// function findSum(num1, num2) {
//     return new Promise((resolve, reject) => {
//         resolve(num1 + num2);
//     });
// }

// findSum(10, 40)
//     .then(result => console.log(`The sum is: ${result}`))
//     .catch(error => console.error(error.message));
//-------------------------------------------------------------------------//


//-------------------async await-------------------//
// async function fetchData(dataNumber) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(`Data ${dataNumber} fetched`);
//             resolve();
//         }, 2000);
//     });
// }

// async function getAllData() {
//     console.log('Getting data 1....');
//     await fetchData(1);
//     console.log('Getting data 2....');
//     await fetchData(2);
//     console.log('Getting data 3....');
//     await fetchData(3);
//     console.log('Getting data 4....');
//     await fetchData(4);
//     console.log('Getting data 5....');
// }

// getAllData();
//-------------------------------------------------------------------------//


//-------------------Print 1 to 50 while & do while loop-------------------//
//while
// let number = 1;
// while (number <= 50) {
//   console.log(number);
//   number++;
// }

//do while
// let num = 1;
// do {
//     console.log(num);
//     num++;
// } while (num <= 50);
//-------------------------------------------------------------------------//


//-------------------Largest string in an array-------------------//
// const fruits = ["Apple","Pomegranates"];

// const newFruits = fruits.reduce((acc, curr) => {
//     if (acc.length < curr.length) {
//         acc = curr;
//         return acc;
//     }
// });

// console.log(`The largest string is : ${newFruits}`);
//-------------------------------------------------------------------------//


//-------------------Length of strings in array-------------------//
// const arr = ["apple", "banana", "orange", "grape"];
// const lengths = arr.map(arr =>arr.length);

// console.log(lengths);
//-------------------------------------------------------------------------//


//-------------------CALL-------------------//
// const person = {
//     name: 'vishnu',
//     age: 24
// }

// function greet(message) {
//     console.log(message+ ' '+this.name);
// }

// greet.call(person, 'Helloo')
//-------------------------------------------------------------------------//


//-------------------APPLY-------------------//
// const person = {
//     name: 'Vishnu',
//     age: 24
// }

// function greet(message) {
//     console.log(message+ ' '+this.name);
// }

// greet.bindy(person, ['hello dear']);
//-------------------------------------------------------------------------//


//-------------------BIND-------------------//
// const person = {
//     name: 'Vishnu',
//     age: 24
// }

// function greet(message) {
//     console.log(message+ ' '+this.name);
// }

// wish = greet.bind(person, ['hello dear']);
// wish();
//-------------------------------------------------------------------------//


//-------------------Array Destructuring-------------------//
// const colors = ['red', 'green', 'blue'];

// const [first, second, third] = colors;

// console.log(first);
//-------------------------------------------------------------------------//


//-------------------Object Destructuring-------------------//
// const person = {
//     name: 'Vishnu',
//     age: 24,
//     city: 'Calicut'
// };

// const { name, age, city } = person;

// console.log(age);
//-------------------------------------------------------------------------//


//-------------------Prime Generator-------------------//
// function primeGenerator(num) {
//     let count = 0;

//     for (let i = 3; i < 1000; i++){
//         let flag = 0
//         for (let j = 2; j < i; j++){
//             if (i % j == 0) {
//                 flag = 1;
//                 break
//             }
//         }

//         if (flag == 0 && count < num) {
//             console.log(i);
//             count++
//         }
//     }
// }

// primeGenerator(10);
//-------------------------------------------------------------------------//


//-------------------Prime from Array-------------------//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//     let flag = 0;
//     for (let j = 2; j < arr[i]; j++) {
//         if (arr[i] % j === 0) {
//             flag = 1;
//             break;
//         }
//     }
//     if (flag === 0) {
//         console.log(arr[i]);
//     }
// }
//-------------------------------------------------------------------------//


//-------------------Prime using Filter-------------------//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const primeNumbers = arr.filter(num => {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i < Math.sqrt(num); i++) {
//         if (num % 2 == 0) {
//             return false;
//         }
//     }
//     return true;
// });

// console.log(primeNumbers);
//-------------------------------------------------------------------------//


//-------------------Filter Even Numbers-------------------//
// const array = [1, 3, 2, 5, 4, 7, 6, 9, 8];

// const evenArray = array.filter(num => num % 2 == 0)

// console.log(evenArray);
//-------------------------------------------------------------------------//


//-------------------Reduce Sum of Array-------------------//

//-------------------------------------------------------------------------//