// Delete Duplcates
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const uniqueArray = [];

for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
    }
}

console.log(uniqueArray);


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


// Two sum
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
function prime(n){
    let flag=0;
    for(i=2;i<=n/2;i++){
        if(n%i==0){
            flag=1;
            break
        }
    }
    if(flag==0){
        console.log(`${n} is a prime number.`);
    }
    else{
        console.log(`${n} is not prime number.`);
    } 
}

prime(29)
prime(4)


