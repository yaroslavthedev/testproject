/* eslint-disable no-unused-vars */
"use strict";



let number = 5;
const leftBorderWidth = 1;
console.log(leftBorderWidth);

number = 10;
console.log(number);

const obj = {
    a: 50,
};

obj.a = 10;
console.log(obj.a);

console.log(_name);
var _name = 'Ivan';

{
    var result = 50;
}

console.log(result);

// 2 lesson
// SIMPLE DaTa: Numbers, Strings, Boolean, undefined, (NotANumber) NAN, null (is not defined)
// COMPLEX DaTa object, functions, massive, data objects,errors.

console.log(-4 / 0);
console.log('string' * 9);

const person = `ALEX`;
const bool = false;


let und;
console.log(und);

const obj1 = {
    name: 'John',
    age: 25,
    isMarried: false
};

//console.log(obj.name);
console.log(obj1['name']);

let arr = ['plumb.jpg', 'orange.jpg', 'apple.jpg', 4, {},
    []
];

arr[10] = 'new';
console.log(arr[10]);

let arrObj = {
    a: 'plumb.jpg',
    1: 'orange.jpg',
    2: 'apple.jpg',
    abc: {
        aa: 123
    }
};

/* const b = 'b';
arrObj['b'] = '12345'; */

console.log(arrObj.b);

console.log(arrObj['a']);
console.log(arrObj.a);

// lesson 3

//alert('Jello');
//const result1 = confirm('are you here?');
//console.log(result1);

/* const answer = +prompt('Вам есть 18 лет?', '18');
console.log( answer + 5 ); */

const answers = [];

/* answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your surname?', '');
answers[2] = prompt('How old are you?', ''); */

console.log(typeof (answers));
console.log(typeof (null));

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';

//alert(`Hi, ${user}`);

// lessons 4
/* console.log('arr' + ' - object');
console.log( 4 + +' - object');

console.log( 4 + +'5'); */

let incr = 10,
    decr = 10;

/* ++incr;
--decr; */
console.log(++incr);
console.log(--decr);

console.log(5 % 2);

const isChecked = true,
    isClose = false;

console.log(isChecked && !isClose);

const numberOfFilms = prompt('How many films have you seen already?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last film watched?', '');
const b = prompt('Your rating?', '');

const c = prompt('Last film watched?', '');
const d = prompt('Your rating?', '');

personalMovieDB['movies'][a] = b;
personalMovieDB['movies'][c] = d;


console.log(personalMovieDB);