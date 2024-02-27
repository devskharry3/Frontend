//String.Prototype.padStart/pad/End
//const string = "12345";
//console.log(string.padStart(10, "."));
//console.log(string.padEnd(10, '.'))

//object.values provides us with an array of object properties
/*const object = {
    name:'John',
    age: 20,
    favoriteBooks: ['Harry Potter 1', 'Marry Potter 2'],
};

console.log(Object.values(object));


//Object.entries 
//console.log(Object.entries(object));

//Async functions

//Exponentiation
//console.log(Math.pow(2,3));

//Trailing commas 

 const anotherObject = {
    first: 1,
    second: 2,
    third: 3
}
//console.log(anotherObject);

const array = [1,2,3,]
console.log(array.length);


let word1 ='Dylan';
let word2 = 'isreal';
let num1 = 2;
let num2 = 3;

//const fullName = `${word1} ${word2}`;
let example = `${word1} ${word2}`;
//console.log(fullName);
console.log(example);
document.getElementById('example').innerText = example;


//Destructuring object
const personalinformation = {
    firstName: 'Dylan',
    lastName: 'Isreal',
    city: 'Yreaka',
    :'California',
    zipcode: '63578'

};

//Destructuring an array
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Isreal'];
lastName = 'Clement';
console.log(lastName);


function addressMaker(address) {
    const {city, state} = address;

    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({city:'Austin', state: 'Texas'})


let incomes = [62000, 67000, 75000];
let total = 0;

for(const income of incomes) {
    console.log(income);
    total+=income;
}


let fullName = "Dylan coding God Isreal";


for(const fullname of fullName) {
    console.log(fullName);
}


//Arrow functions
function add(...nums) {
    let total = nums.reduce( (x,y) => x + y);

    console.log(total);
}

add(4,5,7,8,12); 

//Default Parameters
function add(numArray = []) {
    let total = 0;
    numArray.array.forEach(element => {
        total += element;
        
    });

    console.log(total);
}

add(); 

let numArray = [1,2,3,4,5];

console.log(numArray.includes(2))


//let is a strict form of var
const example = {}
example.firstName = 'Dylan';
example.lastName = 'jacob'
example.firstName = 'joel'

console.log(example);


//import and export
import {data}  from './index'
console.log(data);


let example = 'Dylan';


export class animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
} */

//promises and async

const apiUrl = 'https://fcctop100.herokwapp.com/api/fccusers/top/alltime';

function getTop100Campers() {
    fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => {
        console.log(json[0])
    });

}

getTop100Campers();





