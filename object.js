let obj = {
    name: 'vishnu',
    age: 24,
    contact: {
        phone: 8848881691,
        email: 'vishnu@gmail.com'
    }
};

//---object into array---//
// let newObject = Object.keys(obj);
// let newObject = Object.entries(obj);


//---object freeze---//
Object.freeze(obj);
obj.name = "John";


//---object seal---//
Object.seal(obj);
obj.name = "John";

// console.log(obj);
