//------------Array Loop------------//
// let colors = ["Red", "Green", "Orange", "Yellow", "Blue"];
// for(let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }


//------------for of Loop------------//
// let colors = ["Red", "Green", "Orange", "Yellow", "Blue"];
// for(let color of colors){
//     console.log(color);
// }


//------------Upper case------------//
// let colors = ["Red", "Green", "Orange", "Yellow", "Blue"];
// for(let color of colors){
//     console.log(color.toUpperCase());
// }


//------------unshift------------// add to start
// let colors = ["Red", "Green", "Orange", "Yellow", "Blue"];
// colors.unshift("grey");
// console.log(colors);


//------------push------------// add to end
// let colors = ["Red", "Green", "Orange", "Yellow", "Blue"];
// colors.push("Pink");
// console.log(colors);


//------------Shift------------// delete from start and return
// let colors = ["Red", "Green", "Orange", "Yellow", "Blue"];
// let val = colors.shift();
// console.log("deleted" ,val);


//------------pop------------// delete from end and return
// let colors = ["Red", "Green", "Orange", "Yellow", "Blue"];
// let val = colors.pop();
// console.log("deleted" ,val);


//------------toString------------// convert array into string
// let colors = ["Red", "Green", "Orange", "Yellow", "Blue"];
// let names = ["vishnu", "amal", "reshna","varsha"];
// let joined = colors.concat(names);
// console.log(joined);


//------------slice------------// return a peice of array
// let colors = ["Red", "Green", "Orange", "Yellow", "Blue"];
// console.log(colors.slice(1,3)); // green,orange


//------------splice------------// change original array (add,remove,replace)
// Splice(strtIdx,delCount,newElem1) newElem is optional if we want we can add or skip
// let arr = [2, 4, 6, 8, 1, 3, 5];

// arr.splice(2,0,100);
// console.log(arr);

// arr.splice(3,2);
// console.log(arr);
 
// arr.splice(2,1,100);
// console.log(arr);


//concat(): Returns a new array comprised of this array joined with other arrays and/or values.
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let newArr = arr1.concat(arr2);
// console.log(newArr);


//forEach(): Executes a provided function once for each array element.
// let arr = [1, 2, 3];
// arr.forEach(element => console.log(element));


//map(): Creates a new array with the results of calling a provided function on every element in the calling array.
// let arr = [1, 2, 3];
// let newArr = arr.map(element => element * 2);
// console.log(newArr);


//filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.filter(element => element % 2 === 0);
// console.log(newArr);


//reduce(): reduce an array to a single value
// let numbers = [10, 5, 20, 15, 8];

// let max = numbers.reduce((maxValue, currentValue) => {
//     return (currentValue > maxValue) ? currentValue : maxValue;
// }, numbers[0]);

// console.log(max); // Output: 20 (the maximum value in the array)


//------------array join()------------//
// const myArray = ["I", "love", "chocolate", "frogs"];
// const newArray = myArray.join(' ');

// console.log(newArray);