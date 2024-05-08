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

//DELETE MULTIPLE OF 3//

// const a=[1,2,3,4,5,6,7,8,9]
// for(let i=0;i<a.length;i++){
//     if(a[i]%3==0){
//         for(let j=i;j<a.length-1;j++){
//             a[j]=a[j+1]
//         }
//         a.length--
//         i--;
//     }
// }
// console.log(a)

//PROTOTYPE//

// const a={
//     name:'razik',
//     age:18
// }
// Object.setPrototypeOf(a,{
//     ab:function(){
//         console.log(${this.name},${this.age})
//     }
// })
// a.ab()

//CLASS SYNTAX//

// class my{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }

// greet(){
//     console.log(${this.name}.${this.age})
// }
// }
// const a= new my('razik',18)
// a.greet()

//REVERSE FIRST AND LAST INDEX//

// const a=[1,2,3,4,5]
// let temp;
// temp=a[a.length-1]
// a[a.length-1]=a[0]
// a[0]=temp
// console.log(a)

//REPLACE A WITH E//

// let a='malayalam';
// const b=a.split('')
// const c=b.map((num)=>{
//     if(num=='a'){
//         return 'e'
//     }
//     else{
//         return num
//     }
// })
// console.log(c.join(''))

//SORT TWO ARRAY//

// const a=[1,3,5]
// const b=[2,4,6]
// const c=[...a,...b]
// for(let i=0;i<c.length;i++){
//     for(j=i+1;j<c.length;j++){
//         if(c[j]<c[i]){
//             temp=c[j]
//             c[j]=c[i]
//             c[i]=temp
//         }
//     }
// }
// console.log(c)

//ARRAY TO STRING//

// const a=[[1,2],[3,4]]
// const b=a.map((num)=>{
//     return {[num[0]]:num[1]}
// })
// console.log(b)

//DELETE KEY IN OBJECT//

// const ab={
//     a:12,
//     b:23,
//     c:222
// }
// delete ab.b
// console.log(ab)

// CHECK AN ARRAY EMPTY OR NOT//

// const a=[2,3,3]
// if(a==0){
//     console.log('empty')
// }
// else{
//     console.log('not')
// }

//CHECK IF AN OBJECT EMPTY OR NOT//

//  const a={
//     name:'razik'
//  }
//  if(Object.entries(a)==0){
//     console.log('empty')
//  }
//  else{
//     console.log('not')
//  }

//SUM //

//  function Hello(sum){
//     let a=1
//     let b=3
//     console.log(hi(1,3))
// }
// function hi(x,y){
//       return x+y
// }
// Hello()


//IF CONDITION//

// let a=13330;
// let b=10888880;
// let c=9984;

// if(a>b && b<a){
//     console.log(a)
// }
// else if(b>c && c<b){
//  console.log(b)
// }
// else if(c>b && a<c){
//     console.log(c)
// }

//ALPHABETIC ORDER//

// const a= 'webmaster'
// const b = a.split('').sort()
// console.log(b.join(''))

//REVERSE NUMBER//

// const a= 32243;
// const b=String(a)
// const c=b.split('').reverse()
// console.log(c.join(''))

//MAKE FIRST LETTER UPPERCASE WITH FUNCTION//

function a(arr){
    let array=arr.split(' ')
    let result=[]
    for(let i=0;i<array.length;i++){
       reverse= array[i].charAt(0).toUpperCase()+array[i].slice(1)
        result.push(reverse)
    }
    return result
}
const ab='the quick brown fox'
const b=ab.split(' ')
console.log(a(ab))


