//GENERATOR PRIME//

// function *a(){
//     let num=2
//     while(true){
//         if(prime(num)){
//             yield num;
//         }
//         num++
//     }
// }
// function prime(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// const b = a();
// function c(){
//     console.log(b.next().value)
// }
// setInterval(c,1000)