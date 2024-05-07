//--------------Sort 'a' named friuts and capitalize 'A' --------------//
// const fruits = ["apple", "orange", "anar", "grape"];
// let newFruits = [];
// let arr = [];

// // Sort 'a' named fruits to new array
// for (let i = 0; i < fruits.length; i++){
//     if (fruits[i].charAt(0) == 'a') {
//         newFruits.push(fruits[i]);
//     }
// };

// // uppercase 'A'
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
//     await fetchData(5);
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
//     name: 'vishnu'
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

// greet.bind(person, ['hello dear']);
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
//       let flag = 0
//         for (let j = 2; j < i; j++){
//             if (i % j == 0) {
//               flag = 1;
//               break
//             }
//         }

//         if (flag == 0 && count <= num) {
//           console.log(i);
//           count++
//         }
//     }
// }

// primeGenerator(2);
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
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// });

// console.log(primeNumbers);
// -------------------------------------------------------------------------//


//-------------------Filter Even Numbers-------------------//
// const array = [1, 3, 2, 5, 4, 7, 6, 9, 8];

// const evenArray = array.filter(num => num % 2 == 0)

// console.log(evenArray);
//-------------------------------------------------------------------------//


//-------------------Reduce Sum of Array-------------------//
// const array = [1, 3, 2, 5, 4, 7, 6, 9, 8];

// const sum = array.reduce((acc, curr) => acc + curr, 0)

// console.log(`Sum = ${sum}`);
//-------------------------------------------------------------------------//


//-------------------Average with reduce-------------------//
// const array = [10, 3, 20, 50, 40, 7, 60, 9, 80];

// const sumArr = array.reduce((acc, curr) => acc + curr, 0)

// const avgArr = sumArr / array.length;

// console.log(`Sum = ${sumArr}`);
// console.log(`Average = ${avgArr}`)
//-------------------------------------------------------------------------//


//-------------------Delete multiples of 3-------------------//
// const arr = [2, 9, 12, 10, 6, 3, 25, 15, 20];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         for (let j = i; j < arr.length - 1; j++) {
//             arr[j] = arr[j + 1];
//         }
//         arr.length--;
//         i--;
//     }
// }

// console.log(`After deleting multiples of 3 = ${arr}`);
//-------------------------------------------------------------------------//


//-------------------Delete multiples of 3, method2-------------------//
// const arr = [2, 9, 12, 10, 6, 3, 25, 15, 20];

// var newSize = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 3 !== 0) {
//         arr[newSize] = arr[i];
//         newSize++;
//     }
// }

// for (let i = 0; i < newSize; i++){
//     console.log(arr[i]);
// }
//-------------------------------------------------------------------------//


//-------------------Delete multiples of 3, Splice-------------------//
// const arr = [2, 9, 12, 10, 6, 3, 18];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr.splice(i, 1);
//         i--;
//     }
// }

// console.log(`After deleting multiples of 3: ${arr}`);
//-------------------------------------------------------------------------//


//-------------------SPLICE-------------------//
// const numbers = [1, 2, 3, 4, 5];

// let res = numbers.splice(0,3);

// console.log(numbers);
// console.log(res);
//-------------------------------------------------------------------------//


//-------------------RECURSION-------------------//
// function factorial(n) {
//     if (n == 1 || n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(4));
//-------------------------------------------------------------------------//


//-------------------Sum of all Numbers-------------------//
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (const num of numbers) {
//     sum += num;
// }
// console.log('Sum :', sum);
//-------------------------------------------------------------------------//


//-------------------Double values with for in-------------------//
// const numbers = [1, 2, 3, 4, 5];
// for (const index in numbers) {
//     numbers[index] *= 2;
// }
// console.log(numbers);
//-------------------------------------------------------------------------//


//-------------------Sum of keys-------------------//
// const object = { a: 10, b: 20, c: 20, d: 50 };
// let sum = 0;
// for (const key in object) {
//     sum += object[key];
// }
// console.log(`Sum = ${sum}`);
//-------------------------------------------------------------------------//


//-------------------Higher Order Functions-------------------//
// function calculator(a, b, values) {
//     return values(a, b);
// }

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// console.log(calculator(10,40, add));
// console.log(calculator(2,10, multiply));
//-------------------------------------------------------------------------//


//-------------------Remove Duplicates-------------------//
// function removeDuplicates(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 array.splice(j, 1);
//                 j--;
//             }
//         }
//     }
// }

// const array = [1, 2, 2, 3, 4, 4, 5];
// removeDuplicates(array);
//-------------------------------------------------------------------------//


//-------------------Set-------------------//
// const arr = [1, 2, 2, 3, 4, 4, 5];

// const newArr = new Set(arr);

// console.log(newArr);
//-------------------------------------------------------------------------//


//-------------------FLATEN ARRAY-------------------//
// const nestedArray = [1, [2, 3], [4, [5, 6]]];

// const ans = nestedArray.flat();

// console.log(ans);
//-------------------------------------------------------------------------//


//-------------------FLAT MAP-------------------//
// const arr = [1, 2, 3, 4];

// const mappedArray = arr.flatMap((x) => [x * 2, x * 3]);

// console.log(mappedArray);
//-------------------------------------------------------------------------//


//-------------------MAP-------------------//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const output = arr.filter((value) => {
//     if (value % 2 == 0) {
//         return value
//     }
// })

// console.log(output);
//-------------------------------------------------------------------------//


//-------------------String to Array-------------------//
// let str = 'Hello Vishnu';

// let newStr = str.split(' ')

// console.log(newStr);
//-------------------------------------------------------------------------//

//-------------------Constructor-------------------//
// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello my name is ${this.name} and iam ${this.age} years old`); 
//     }
// }

// const Vishnu = new Person('Vishnu', 24)
// Vishnu.greet();
//-------------------------------------------------------------------------//


//-------------------Shallow Copy-------------------//
// const Person = {
//     name: "John", 
//     age: 30,
//     adress: {
//       state: "Kerala",
//       city: "New York"
//     }
// };

// const result = {...Person }

// result.adress.city = 'Calicut';

// console.log(Person);
// console.log(result);
//-------------------------------------------------------------------------//


//-------------------Deep Copy-------------------//
// const obj = {
//   name: "John",
//   age: 30,
//   adress: {
//     state: "Kerala",
//     city: "New York"
//   }
// };
  
//   const shallowCopy = JSON.parse(JSON.stringify(obj));
  
//   shallowCopy.adress.state = 'Delhi';
  
//   console.log(obj);
//   console.log(shallowCopy);
//-------------------------------------------------------------------------//


//-------------------Hoisting-------------------//
// var x = 20;

// function sum() {
//   console.log(x);
//   var x = 10;
//   console.log(x);
// }
// sum();
//-------------------------------------------------------------------------//


//-------------------Largest from three numbers-------------------//
// let a = 260;
// let b = 20;
// let c = 100;
// let largest;

// if (a > b && a > c) {
//   largest = a;
// } else if (b > c) {
//   largest = b;
// } else {
//   largest = c;
// }

// console.log(`Largest number is ${largest}`);
//-------------------------------------------------------------------------//


//-------------------CURRYING-------------------//
// function curriedAdd(a) {
//   return function (b) {
//     return a + b;
//   }
// }

// const addTwo = curriedAdd(2);
// console.log(addTwo(3));
//-------------------------------------------------------------------------//


//-------------------Object Spread & Change Property-------------------//
// const originalObject = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA"
//   }
// };

// const modifiedObject = {
//   ...originalObject,
//   age: 35
// };

// console.log(modifiedObject);
//-------------------------------------------------------------------------//


//-------------------Delete & Add Key from object-------------------//
// const obj = {
//   name: "Vishnu",
//   age: 30,
//   city: "Calicut"
// };

// obj.mob = 8848881691 // adding new key
// delete (obj.age); // deleting key

// console.log(obj);
//-------------------------------------------------------------------------//


//-------------------REDUCE sum mixed array-------------------//
// const arr = [10, 40, 'hello', 20, 'a', 30];

// const res= arr.reduce((acc, curr) => {
//   if (typeof curr == 'number') {
//     return acc + curr;
//   } else {
//     return acc;
//   }
// },0);

// console.log(res);
//-------------------------------------------------------------------------//


//-------------------Reverse Array using Reduce-------------------//
// const arr = [1,2,3,4];

// const reverseArr = arr.reduce((acc, curr) => [curr, ...acc], [])

// console.log(reverseArr);
//-------------------------------------------------------------------------//


//-------------------Math methods-------------------//
// console.log(Math.abs(-5)); // Output: 5
// console.log(Math.abs(3));  // Output: 3

// console.log(Math.round(4.7)); // Output: 5
// console.log(Math.round(4.2)); // Output: 4

// console.log(Math.floor(4.7)); // Output: 4
// console.log(Math.floor(4.2)); // Output: 4

// console.log(Math.ceil(4.7)); // Output: 5
// console.log(Math.ceil(4.2)); // Output: 5

// console.log(Math.min(5, 10, -3, 8)); // Output: -3

// console.log(Math.max(5, 10, -3, 8)); // Output: 10

// console.log(Math.random()); // Output: a random number between 0 and 1

// console.log(Math.pow(2, 3)); // Output: 8 (2^3)

// console.log(Math.sqrt(9)); // Output: 3
//-------------------------------------------------------------------------//


//-------------------Sum of even numbers-------------------//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const evenSum = arr.filter(x => x % 2 === 0).reduce((acc, curr) => acc + curr, 0);

// console.log(`Sum of even numbers : ${evenSum}`);
//-------------------------------------------------------------------------//


//-------------------Sum of Prime using Filter & Reduce-------------------//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const primeSum = arr.filter((value) => {
//     if (value <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(value); i++) {
//         if (value % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }).reduce((acc,curr)=>acc+curr,0)

// console.log(`sum of prime numbers : ${primeSum}`);
//-------------------------------------------------------------------------//


//-------------------Array Frequency-------------------//
// function frequency(array){
//     let freqArr = [];
//     for (i = 0; i < array.length; i++){
//         if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
//             freqArr.push(array[i])
//         }
//     }
//     return freqArr;
// }

// const arr = [1, 2, 3, 3, 4, 5, 1, 2, 3, 6];
// console.log(frequency(arr));
//-------------------------------------------------------------------------//


//-------------------Objects inside array-------------------//
// const a = [{ a: 10 }, { a: 50 }, { a: 20 }, { a: 40 }, { a: 30 }];

// const largest = a.reduce((acc, curr) => {
//     if (acc.a < curr.a) {
//         return curr;
//     }
//     return acc;
// }, a[0]);

// console.log(largest);
//-------------------------------------------------------------------------//


//-------------------Remove largest element-------------------//
// const arr = [10, 30, 80, 40, 20];

// let max = arr[0];

// let result = arr.forEach(element => {
//     if (element > max) {
//         max = element;
//     }
// });

// let maxIndex = arr.indexOf(max);
// arr.splice(maxIndex, 1);

// console.log(arr);
//-------------------------------------------------------------------------//


//-------------------Remove largest element-------------------//
// const arr = [10, 30, 80, 40, 20];

// const max = arr.indexOf(Math.max(...arr));

// arr.splice(max, 1);

// console.log(arr);
//-------------------------------------------------------------------------//


//-------------------Even Number Generator-------------------//
// function evenGenerator(num) {
//     let count = 0;
//     for (let i = 2; count < num; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//             count++;
//         }
//     }
// }

// evenGenerator(6);
//-------------------------------------------------------------------------//


//-------------------Nullish Operator-------------------//
// const a = 20;
// const b = ' ';
// const c = null;
// const d = undefined;
// const e = 'helo';

// const result1 = a ?? 'default';
// const result2 = b ?? 'default';
// const result3 = c ?? 'default';
// const result4 = d ?? 'default';
// const result5 = e ?? 'default';
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
//-------------------------------------------------------------------------//


//-------------------SetTimeout-------------------//
// function delayedMessage() {
//     setTimeout(() => {
//         console.log('Hello i came after 3 second');
//     }, 3000)
// };

// delayedMessage();
//-------------------------------------------------------------------------//


//-------------------SetInterval-------------------//
// function delayedMessage() {
//     let counter = 0;
//     const clear = setInterval(() => {
//         console.log('Printing is started');
//         counter++;

//         if (counter === 3) {
//             clearInterval(clear);
//             console.log('Printing ended');
//         }
//     }, 1000);
// };

// delayedMessage();
//-------------------------------------------------------------------------//


//-------------------Count of Vowels-------------------//
// const str = "UnderCoverAgent";
// let count = 0;
// for (const words of str) {
//     const char = words.toLowerCase();
//     if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u') {
//         count++;
//     }
// };

// console.log(`count of vowels in ${str} = ${count}`);
//-------------------------------------------------------------------------//


//-------------------AsyncAwait-------------------//
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ name: "Vishnu", age: 24, city: "Kozhikode" });
//         }, 3000)
//     });
// }

// async function fetchUserData() {
//     console.log('Fetching user data.....');
//     const data = await fetchData();
//     console.log(data);
// }

// fetchUserData();
//-------------------------------------------------------------------------//


//-------------------Loop an object to print key value-------------------//
// const obj = {
//     name: 'Vishnu',
//     age: 24,
//     location: 'Kerala'
// };

// for (let key in obj) {
//     console.log(key);
//     // console.log(`${key}: ${obj[key]}`);
// };
//-------------------------------------------------------------------------//


//-------------------IIFE-------------------//
// (function () {
//     console.log('hello IIFE');
// })();
//-------------------------------------------------------------------------//