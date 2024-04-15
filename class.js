// class greeting{
//     constructor(name) {
//         this.name = name;
//         console.log('Hello ' + name);
//     }
// }

// const obj = new greeting('Vishnu'); // Hello Vishnu

//PROTOTYPE
function Person(name, age) {
   this.name = name;
   this.age = age;
}

Person.prototype.sayHello = function() {
   console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
};

const person1 = new Person("Alice", 30);

console.log(person1.name);
console.log(person1.age);  
person1.sayHello();