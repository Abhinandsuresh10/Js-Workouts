// Delete Duplcates
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const uniqueArray = [];

for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
    }
}

console.log(uniqueArray);
console.log(arr.includes(3)); // includes() checks if a value is present in an array, returning true or false.


//Basic method delete duplicate
// const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let j = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[j] != arr[i]) {
//         j++
//         arr[j] = arr[i]
//     }
// }

// const uniqueArray = arr.slice(0, j + 1);
// console.log(uniqueArray);