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


//-----Palindrome with loop-----//
let str = 'malayalam';
let isPalindrome = true;

let leftIndex = 0;
let rightIndex = str.length-1;

for (let i = 0; i < str.length / 2; i++){
    if (str[leftIndex] !== str[rightIndex]) {
        isPalindrome = false;
        break;
    }
    leftIndex++;
    rightIndex--;
}

if (isPalindrome) {
    console.log(`${str} is palindrome`);
} else {
    console.log(`${str} is not palindrome`);
}
//-------------------------------------------------------------------------//


//-----Palindrome with functions -----//



//-------------------------------------------------------------------------//