(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */


    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');

    console.log("Reversing the order of the planets array.");
    console.log(planets);

    console.log("Sorting the planets array.");
    console.log(planets);
})();

if (true) {
    let x = 5;
}
console.log(typeof x);

// const sayHello = (name) => { 'Hello, ' + name + '!' }
// const sayHello = name => { 'Hello, ' + name + '!' }
// const sayHello = (name) => `Hello, ${name}!`

// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }
// console.log(sayHello())

// let numbers = [1, 2, 3, 4, 5];
// numbers.map(n => n * 3)
//
// console.log(numbers)

// const isDivisibleBy3 = n => n % 3 === 0;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(numbers.filter(isDivisibleBy3));
// console.log(numbers);

const p = new Promise((resolve, reject) => {
    reject(3)
});

p.then(result => console.log(result));
p.catch(error => console.log('An error occured!'));