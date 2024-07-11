/*
// Activating Strict Mode
'use strict';

//////////////////////////////////////////////////

-------------- PART 1 JS FUNDAMENTALS --------------

//////////////////////////////////////////////////

let js = 'amazing';
if (js === 'amazing') alert('JavaScript er fedt!');

x = 50 + 50 + 50 + 50 - 150;
console.log(x);

let firstName = 'Mads';
let firstName1 = 'Sara';
let tal = 25;

// En konstant
let PI = 3.1415;

console.log(firstName);
console.log(firstName);
console.log(firstName);

console.log(firstName + ' og ' + firstName1);
console.log('Mads' + ' og ' + 'Sara');

console.log(tal);
console.log(75);

// Practice assignments
let country = 'Denmark';
let continent = 'Europe';
let population = 5.5;

console.log(country);
console.log(continent);
console.log(population + ' ' + 'million');

let madsIsSingle = true;
console.log(madsIsSingle);

console.log(typeof true);
console.log(typeof madsIsSingle);
console.log(typeof 25);
console.log(typeof 'Mads');

madsIsSingle = 'Ja, han er';

console.log(typeof madsIsSingle);

let aarstal;
console.log(aarstal);
console.log(typeof aarstal);

aarstal = 1995;
console.log(aarstal);
console.log(typeof aarstal);

console.log(typeof null);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let age = 25;
age = 28;
const birthYear = 1995;

const year;

console.log(age);
console.log(birthYear);

var job = 'programmør';
job = 'lærer';

const lastName = 'Møller';
console.log(lastName);

// Math Operators
const now = 2021;
const ageMads = now - 1995;
const ageSara = now - 2003;

console.log(ageMads);
console.log(ageSara);

console.log(ageMads * 2, ageMads / 10, 2 ** 3);

const firstName = 'Mads';
const lastName = 'Møller';

console.log(firstName + ' ' + lastName);

// Assignments Operators
let x = 50 + 25;
x += 150;
x *= 2;
x++;
x--;
console.log(x);

// Comparison Operators
console.log(ageSara > ageMads);
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;
console.log(isFullAge);

console.log(now - 1995 > now - 2003);

const now = 2021;
const ageMads = now - 1995;
const ageSara = now - 2003;

console.log(now - 1995 > now - 2003);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageMads + ageSara) / 2;
console.log(ageMads, ageSara, averageAge);


// Coding challenge #1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

const BMImark = markMass / markHeight ** 2;
const BMIjohn = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
const johnHigherBMI = markBMI < johnBMI;

console.log(markBMI, johnBMI, BMImark, BMIjohn, markHigherBMI, johnHigherBMI);

const firstName = 'Mads';
const job = 'programmer';
const birthYear = 1995;
const year = 2020;

console.log('Jeg hedder ' + firstName + ', og er en ' + (year - birthYear) + ' årig ' + job + '!');
console.log(`Jeg hedder ${firstName}, og er en ${year - birthYear} årig ${job}!`)

console.log(`Bare en almindelig string...`)

console.log('Strings \n\
med \n\
flere \n\
linjer');

console.log(`Strings
med
flere
linjer`);

const firstName = 'Sara';
const age = 15;

if (age >= 18) {
    console.log(`${firstName} er gammel nok til at kunne starte på kørekort! 🚗`)
} else {
    console.log(`${firstName} må vente ${18 - age} år, på at kunne starte på kørekort... øv bøv :()`)
}

const birthYear = 1990;
let century;

if (birthYear >= 2000) {
    century = 21;
    console.log(`${firstName} er født i det ${century}. århundrede!`)
} else {
    century = 20;
    console.log(`${firstName} er født i det ${century}. århundrede!`)
}

// Coding challenge #2

const mark = 'Mark';
const john = 'John';

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

// const BMImark = markMass / markHeight ** 2;
// const BMIjohn = johnMass / johnHeight ** 2;

console.log("Mark's BMI tal = " + markBMI + " John's BMI tal = " + johnBMI);

if (markBMI > johnBMI) {
    console.log(`${mark} har en højere BMI tal end ${john} som siger ${markBMI}`);
} else {
    console.log(`${john} har en højere BMI tal end ${mark} som siger ${johnBMI}`)
}







// --- Practice assignments
// Values and variables
const country = 'Denmark';
const continent = 'Europe';
let population = 5.5;

console.log(country);
console.log(continent);
console.log(population);

// Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
// Ændret country, continent og isIsland til const eftersom det aldrig vil ændre sig.
language = 'dansk';

// Basic operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
population--;

const description = country + ' ligger i ' + continent + ' og har ' + population + ' millioner mennesker der snakker ' + language;
console.log(description);

// Strings and template literals
const description1 = `${country} ligger i ${continent} og har ${population} millioner mennesker der snakker ${language}`;
console.log(description1);

// Taking decisions: if/else statements
if (population < 33) {
    console.log('Danmarks indbyggertal er ' + (33 - population) + ' millioner indbygger under gennemsnittet..')
} else {
    console.log('Danmarks indbyggertal er højere end gennemsnittet!')
}

// Type conversion and coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// Equality Operators
let numNeighbours = Number(prompt('How many neighbours countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border!')
} else {
    console.log('No borders!')
}







// Type conversion
const birthYear = '1995';

console.log(Number(birthYear), birthYear);
console.log(Number(birthYear) + 18);

console.log(Number('Mads'));
console.log(typeof NaN);

console.log(String(23), 23);


// Type coercion
console.log('Jeg er ' + 25 + ' år gammel.')
console.log('25' - '10' - 3);
console.log('25' / '2');
console.log('25' > '15');

let n = '1' + 1;
n = n - 1;
console.log(n);

// Truthy and falsy values
// Falsy values: 0, '', undefined, null, NaN - alt andet er truthy values.

console.log(Boolean(0));
console.log(Boolean('Mads'));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean({}));

let money = 0;

if (money) {
    console.log('Peeeeenge!')
} else {
    console.log('Øv bøv, ingenting..')
}

let height;


if(height) {
    console.log('Højden er defineret!')
} else {
    console.log('Desværre.. ingen højde defineret.')
}

// Equality Operators
const age = '25';

if (age === 25) console.log('Du er nu fyldt 25 år. (strict)')

if (age == 25) console.log('Du er nu fyldt 25 år. (loose/non-strict)')

const favorite = prompt("Hvilke fag kan du bedst lide?")
console.log(favorite);
console.log(typeof favorite);

if (favorite === 'Engelsk') {
    console.log('Bedste fag')
} else if (favorite === 'Dansk') {
    console.log('Det er okay...')
} else if (favorite === 'Matematik') {
    console.log('Argh var...')
} else {
    console.log('Hmm.. man ved aldrig.')
}

if (favorite !== 'Tysk') console.log('Hvorfor ikke tysk? Det er da sjovt...');

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Må gerne køre.')
// } else {
//     console.log('Someone else should drive.. :(')
// }

const isTired = false; // C

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Må gerne køre.')
} else {
    console.log('Someone else should drive.. :(')
}


const country = 'Denmark';
const continent = 'Europe';
let population = 5.5;

const island = false;
let language = 'english';

if (language === 'english' && population < 50 && !island) {
    console.log(`Du skal bo i ${country}`);
} else {
    console.log(`Du skal ikke bo i ${country}`);
}


*/

// Coding Challenge #3

/*
const dolphinsScore = (96 + 108 + 89) / 3; // 97.6 score
const koalasScore = (88 + 91 + 110) / 3; // 96.3 score

console.log(dolphinsScore);
console.log(koalasScore);

if (dolphinsScore > koalasScore) {
    console.log(`Dolphins wins with the average score of ${dolphinsScore}!!`)
} else if (koalasScore > dolphinsScore) {
    console.log(`Koalas wins with the average score of ${koalasScore}!!`)
} else if (dolphinsScore === koalasScore) {
    console.log(`It's a tie!`)
}

const scoreDolphins = (20 + 112 + 101) / 3; // 103.3 avg score
const scoreKoalas = (97 + 95 + 123) / 3; // 109 avg score

console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins has a higher score than 100 and with the average of ${scoreDolphins} and therefore wins!`)
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log(`Koalas has a higher score than 100 and with the average of ${scoreKoalas} and therefore wins!`)
} else if (scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
    console.log(`BOTH TEAM WINS!!!`)
} else {
    console.log(`Nobody won.`)
}


// Switch statement
const day = 'friday';

switch(day) {
    case 'monday':
        console.log('Skal kode');
        break;
    case 'tuesday':
        console.log('Spille fodbold');
        break;
    case 'wednesday':
        console.log('Spille CS');
        break;
    case 'thursday':
        console.log('Være sammen med kæresten');
        break;
    case 'friday':
        console.log('Ud og drikke');
        break;
    case 'saturday':
        console.log('Se vennerne');
        break;
    case 'sunday':
            console.log('Ingenting');
        break;
    default:
        console.log('Ikke en tilgængelig dag... :/')
}

if (day === 'monday') {
    console.log('Skal kode');
} else if (day === 'tuesday') {
    console.log('Skal spille');
} else if 

// The Switch Statement

const language = 'spanish';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
    break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
    break;
    case 'english':
        console.log('3rd place');
    break;
    case 'hindi':
        console.log('No. 4');
    break;
    case 'arabic':
        console.log('5th most spoken language');
    break;
    default:
        console.log('Great language too :)')
}


// Conditional (Ternary) operator 

const age = 16;

age >= 18 ? console.log('Du er gammel nok til at drikke alkohol') : console.log('Hold dig til vand.')

const drink = age >= 18 ? 'Alkohol!' : 'VAND.'
console.log(drink);

let drinkk
if(age >= 18) {
    drinkk = 'ALKOOOOO'
} else {
    drinkk = 'WATER'
}
console.log(drinkk);

console.log(`Jeg kan godt lide at drikke ${age >= 18 ? 'Alkohol' : 'Vand'}`)

const country = 'Denmark';
const population = 45;

population > 33 ? console.log('Danmarks indbyggertal er højere end gennemsnittet.') : console.log('Danmarks indbyggertal er lavere end gennemsnittet.')

console.log(`${country}s indbyggertal er ${population >= 33 ? 'højere' : 'lavere'} end gennemsnittet.`)


// Coding challenge #4

let tip;
let value = 301;

value >= 50 && value <= 300 ? console.log(`The bill was ${value}, the tip was ${value * 0.15}, and the total value is ${value + (value * 0.15)}`) : console.log(`The bill was ${value}, the tip was ${value * 0.2}, and the total value is ${value + (value * 0.2)}`)


const tippp = value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
console.log(`The bill was ${value}, the tip was ${tippp}, and the total value is ${value + tippp}`)

//////////////////////////////////////////////////

-------------- PART 2 JS FUNDAMENTALS --------------

//////////////////////////////////////////////////

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
