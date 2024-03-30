function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
const sequence = generateSequence();

console.log(sequence.next())

let str = "Vishnu"
console.log(str[2])

console.log(sequence.next())
console.log(sequence.next())