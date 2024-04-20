const sportsLeague = {
    "leagueName": "Super League",
    "teams": {
      "team-1": {
        "teamName": "Raptors",
        "city": "New York",
        "players": [
          {
            "name": "LeBron James",
            "position": "Forward",
            "score": 950
          },
          {
            "name": "Stephen Curry",
            "position": "Guard",
            "score": 880
          }
        ]
      },
      "team-2": {
        "teamName": "Phoenix Flyers",
        "city": "Phoenix",
        "players": [
          {
            "name": "Kevin Durant",
            "position": "Forward",
            "score": 920
          },
          {
            "name": "Giannis Antetokounmpo",
            "position": "Center",
            "score": 910
          }
        ]
      }
    }
};
 
// console.log(sportsLeague.leagueName);

//-----------------------------------------------------------------------------------------------------------//

//CALL//
const person = {
   name: 'vishnu'
};
function greet(message){
    console.log(message + ' '+ this.name)
}
greet.call(person, 'hi');


//APPLY//
// const person ={
//     name:'razik'
// };
// function greet(message){
//     console.log(message + this.name)
// }
// greet.apply(person,['hello']);


//BIND//
// const person={
//     name:'razik'
// };
// function greet(message){
//     console.log(message + this.name);
// }
// const hi=greet.bind(person)
// hi('hii');



//BIND
// const user = {
//   name: 'Vishnu',
//   age: 25,
//   city: 'Calicut'
// };

// function greeting (message) {
//   console.log(message + ' ' + this.name);
// };

// const arr = ['hello']

// const wish = greeting.bind(user, arr);

// wish();





// REDUCE
// const num = [1, 2, 3, 4];

// const reduceSum = num.reduce((acc, curr) => {
//   return acc + curr;
// },0);

// console.log(reduceSum);


// MAP
const num = [1, 2, 3, 4, 6];
const mapDouble = num.map((a) => {
  return a * 2;
});
console.log(mapDouble);


// FILTER
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = num.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(evenNumbers);


// IFFE
(function () {
    console.log('Hello');
})();
