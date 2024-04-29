// Delete Duplcates
// const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const uniqueArray = [];

// for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArray.includes(arr[i])) {
//         uniqueArray.push(arr[i]);
//     }
// }

// console.log(uniqueArray);


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


// 1. Two sum
// function twosum(arr,target){
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==target){
//                 return [i,j]
//             }
//         }
//     }

// }
// console.log(twosum([1,2,3,4,5],6))


// Prime
// function prime(n){
//     let flag = 0;
//     for (let i = 2; i <= n / 2; i++){
//         if (n % i == 0) {
//             flag = 1;
//             break
//         }
//     }
//     if(flag==0){
//         console.log(`${n} is a prime number.`);
//     }
//     else{
//         console.log(`${n} is not prime number.`);
//     }
// }

// prime(29)
// prime(4)


// 58. Length Of Last Word
// var lengthOfLastWord = function(str) {
//     str=str.trim().split(" ")
//      return str[str.length-1].length
// };

// console.log(lengthOfLastWord('Hello World'));


//-----------------------------------------------------------------------------------//
// 66. Plus One
// var plusOne = function(digits) {
//     let str = digits.join('')
//     let res = BigInt(str)+1n;

//     return res.toString().split('');
// };

// // Method 2
// var plusOne = function(digits) {
//     // Start from the rightmost digit
//     for (let i = digits.length - 1; i >= 0; i--) {
//         // Add 1 to the current digit
//         digits[i]++;
        
//         // If the digit becomes less than 10 after adding 1, we're done
//         if (digits[i] < 10) {
//             return digits;
//         } else {
//             // If it's 10, set it to 0 and continue to the next digit
//             digits[i] = 0;
//         }
//     }
    
//     // If we're here, it means all digits were 9, so add a new digit of 1 at the beginning
//     digits.unshift(1);
//     return digits;
// };
//-----------------------------------------------------------------------------------//