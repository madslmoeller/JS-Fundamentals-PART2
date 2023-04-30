/*
// Activating Strict Mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('Jeg kan nu køre bil :)')


// Functions
function logger() {
    console.log('Mit navn er Mads');
}

// Calling -running or invoking the function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
};

const appleJuice = fruitProcessor(0, 5);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Functions assignment
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
};

const finland = describeCountry('Finland', 6, 'Helsinki')
const denmark = describeCountry('Denmark', 5.5, 'Copenhagen')
const sweden = describeCountry('Sweden', 10.23, 'Stockholm')

console.log(finland);
console.log(denmark);
console.log(sweden);


// Function Declarations vs Expressions
// function delcarations
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1995);

// function expressions
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1995);

console.log(age1, age2);

// Function Declarations vs Expressions assignments

// function declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100
}
// function expression
const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100
}

const dkPopulation = percentageOfWorld2(5.5);
const noPopulation = percentageOfWorld2(5.3);
const sePopulation = percentageOfWorld2(10);

console.log(dkPopulation, noPopulation, sePopulation);

// Arrow Functions

// (Function Expression)
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

// (Arrow Function)
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} går på pension om ${retirement} år!`
}
const retire = yearsUntilRetirement(1995, "Mads");

console.log(retire);


// Arrow function assignment

// function declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100
}
// function expression
const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100
}

const dkPopulation = percentageOfWorld2(5.5);
const noPopulation = percentageOfWorld2(5.3);
const sePopulation = percentageOfWorld2(10);

console.log(dkPopulation, noPopulation, sePopulation);

//

const percentageOfWorld3 = population => (population / 7900) * 100;

const dkPopulation = percentageOfWorld3(5.5);
const noPopulation = percentageOfWorld3(5.3);
const sePopulation = percentageOfWorld3(10);

console.log(dkPopulation, noPopulation, sePopulation);



function cutFruitIntoPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitIntoPieces(apples);
    const orangePieces = cutFruitIntoPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
};

console.log(fruitProcessor(2, 3));


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

function describePopulation(country, population) {
    const popul = percentageOfWorld1(population)

    const desc = `${country} has ${population} million inhabitants which is around ${popul} of the world.`
    return desc;
}

console.log(describePopulation('Denmark', 5.5));
console.log(describePopulation('United States', 328.2));
console.log(describePopulation('Russia', 144.4));


const calcAge = function (year) {
    return 2021 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} går på pension om ${retirement} år!`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired...`)
        return -1;
    }
};

console.log(yearsUntilRetirement(1995, 'Mads'));
console.log(yearsUntilRetirement(1990, 'Jacob'));


// Coding Challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// Data 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

// Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log("It's a draw, boohoo..")
    }
}
checkWinner(avgDolphins, avgKoalas);
checkWinner(avgDolphins2, avgKoalas2);

// Arrays

const friend1 = 'Mads';
const friend2 = 'Kevin';
const friend3 = 'Anders';
console.log(friend1, friend2, friend3);

const friends = ['Mads', 'Kevin', 'Anders'];
console.log(friends);

const y = new Array(2002, 2004, 2008, 2014, 2021);
console.log(y);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = 'Marc';

console.log(friends);
// Man kan ikke mutate selve friends arrayen, kun de enkelte elementer i arrayen.

const firstName = 'Mads';

const mads = [firstName, 'Møller', 2021 - 1995, 'programmør', friends];

console.log(mads);

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const years = [2004, 2005, 2008, 2012, 2014, 2021];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];

console.log(ages);


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populations = [5.5, 11.5, 144.2, 50];

console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];

console.log(percentages);


const friends = ['Mads', 'Kevin', 'Anders'];
console.log(friends);

const newLength = friends.push('Sara');
console.log(friends);
console.log(newLength);

friends.unshift('Oliver');
console.log(friends);

friends.pop();
console.log(friends);

friends.pop();
const kev = friends.pop();
console.log(kev);
console.log(friends);

friends.shift();
console.log(friends);

friends.unshift('Oliver');
console.log(friends);

console.log(friends.indexOf('Mads'));

console.log(friends.includes('Mads'));
console.log(friends.includes('Oliver'));
console.log(friends.includes('Kevin'));

if (friends.includes('Oliver')) {
    console.log('Du har en ven kaldt Oliver')
}


const neighbours = ['Germany', 'Sweden'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany')) {
    console.log('Probably a central European country ;)')
}

neighbours[neighbours.indexOf('Sweden')] = 'Norway';

console.log(neighbours);


const calcTip = function(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.2;
    }
    return tip;
}

const tips1 = calcTip(100);
console.log(tips1);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];

console.log(total);


const myCountry = {
    country: 'Denmark',
    capital: 'Copenhagen',
    language: 'Danish',
    population: 5.5,
    neighbours: ['Germany', 'Sweden']
};

console.log(myCountry);

const myCountry = {
    firstName: 'Mads',
    lastName: 'Møller',
    country: 'Denmark',
    capital: 'Copenhagen',
    language: 'Danish',
    population: 5.5,
    neighbours: ['Germany', 'Sweden']
};

// console.log(myCountry);
// console.log(myCountry.capital);
// console.log(myCountry['language']);

// const nameKey = 'Name';

// console.log(myCountry['first' + nameKey]);
// console.log(myCountry['last' + nameKey]);

// const interested = prompt('What would you like to know about Mads? His firstName, lastName, country, capital, language, population or neighbours?');

// if (myCountry[interested]){
//     console.log(myCountry[interested]);
// } else {
//     console.log('You picked neither of the options... try again')
// }

myCountry.location = 'Jyllinge';
myCountry['instagram'] = '@madsdicaprio'
myCountry.neighbours.push('Norway');

console.log(myCountry);

const mads = {
    firstName: 'Mads',
    friends: ['Oliver', 'Andreas', 'Mathias', 'Lasse', 'Stefan', 'Qadar']
}
console.log(mads);

console.log(`${mads.firstName} har ${mads.friends.length} venner, men ${mads.friends[0]} er hans bedste ven :-)`)


const myCountry = {
    firstName: 'Mads',
    lastName: 'Møller',
    country: 'Denmark',
    capital: 'Copenhagen',
    language: 'Danish',
    population: 5.5,
    neighbours: ['Germany', 'Sweden']
};

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

const mads = {
    firstName: 'Mads',
    lastName: 'Møller',
    birthYear: 1995,
    job: 'programmør',
    friends: ['Oliver', 'Andreas', 'Mathias'],
    hasDriversLicense: true,

    // calcAge: function() {
    //     return 2021 - this.birthYear
    // }
    calcAge: function(){
        this.age = 2021 - this.birthYear
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} er en ${this.age}-årig ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
    
};

console.log(mads.calcAge());
// console.log(mads['calcAge'](birthYear));

console.log(mads.age);
// console.log(mads.hasDriversLicense);

console.log(mads.getSummary());

// Coding Challenge 3

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
};

john.calcBMI();
mark.calcBMI();
console.log(`John's BMI: ${john.bmi}`)
console.log(`Mark's BMI: ${mark.bmi}`)

if (john.bmi > mark.bmi) {
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${mark.bmi})`);
} else if (john.bmi < mark.bmi) {
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi})`)
}



// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

for(let rep = 1; rep <= 10; rep++ ){
    console.log(`Lifting weights repetition ${rep}`);
} 

const myCountry = {
    firstName: 'Mads',
    lastName: 'Møller',
    country: 'Denmark',
    capital: 'Copenhagen',
    language: 'Danish',
    population: 5.5,
    neighbours: ['Germany', 'Sweden'],

    describe: function (){
       console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },

    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }

};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


for (let i = 1; i <= 50; i++ ) {
    console.log(`Voter number ${i} is currently voting`)
}

const types = [];

const mads = [
    'Mads',
    'Møller',
    2021 - 1995,
    'programmør',
    ['Oliver', 'Mathias', 'Andreas']
];

for (let i = 0; i < mads.length; i++) {
    console.log(mads[i], typeof(mads[i]))

// Ways to fill up empty array
// types.push(typeof(mads[i]));
types[i] = typeof(mads[i]);
}
console.log(types);




const years = [2000, 2004, 2009, 2012];
const ages = [];

for (let i = 0; i < years.length; ++i) {
    // ages.push(2021 - years[i]);
    ages[i] = (2021 - years[i])

}

console.log(ages);

// Continue and break

const mads = [
    'Mads',
    'Møller',
    2021 - 1995,
    'programmør',
    ['Oliver', 'Mathias', 'Andreas'],
    true
];

for (let i = 0; i < mads.length; i++) {

    if (typeof mads[i] !== 'string') continue;

    console.log(mads[i], typeof(mads[i]))
}

function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

const populations = [5.5, 11.5, 144.2, 50];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);



const populations1 = [5.5, 11.5, 144.2, 50];

console.log(populations1.length === 4);

const percentages = [percentageOfWorld1(populations1[0]), percentageOfWorld1(populations1[1]), percentageOfWorld1(populations1[2]), percentageOfWorld1(populations1[populations1.length - 1])];

console.log(percentages);

const mads = [
    'Mads',
    'Møller',
    2021 - 1995,
    'programmør',
    ['Oliver', 'Mathias', 'Andreas']
];

for (let i = mads.length - 1; i >= 0; i-- ){
    console.log(i, mads[i])
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`--- Starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Weight lifting repitition ${rep}`)
    }
};

const listOfNeighbours =[
['Canada', 'Mexico'],
['Spain'],
['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++){
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`)
    }
}


for(let rep = 1; rep <= 10; rep++ ){
    console.log(`Lifting weights repetition ${rep}`);
}


let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log("Du slog en 6'er, spillet slutter..")
    }
}


function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

const populations = [5.5, 11.5, 144.2, 50];




// For loop metode
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);



// While metode
const percentages3 = [];

let y = 0;
while (y < populations.length) {
    const perc1 = percentageOfWorld1(populations[y]);
    percentages3.push(perc1);
    y++
}
console.log(percentages3);

*/

// Coding challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

const calcTip = function(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.2;
    }
    return tip;
}


for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(total);

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(total));