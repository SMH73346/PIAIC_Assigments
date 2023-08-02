// // Exercise 2: Personal Message
console.log(`Exercise 2: Personal Message`);
const fname = 'Eric';
console.log(`Hello ${fname}, would you like to learn some Python today?`);


// Exercise 3: Name Cases
console.log(`Exercise 3: Name Cases`);
console.log(fname.toLowerCase());   // eric
console.log(fname.toUpperCase());   // ERIC
//console.log(fname.toTitleCase());   // Eric
// Note: The `toTitleCase()` method is not available in JavaScript/TypeScript by default. You would need to implement it yourself or use a third-party library.


// Exercise 4: Famous Quote
console.log(`Exercise 4: Famous Quote`);
console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."');


// Exercise 5: Famous Quote 2
console.log(`Exercise 5: Famous Quote 2`);
const famousperson = 'Albert Einstein';
const mymessage = `${famousperson} once said, "A person who never made a mistake never tried anything new."`;
console.log(mymessage);


// Exercise 6: Stripping fnames
console.log(`Exercise 6: Stripping fnames`);
const name2 = '\t   John Doe \n';
console.log(name2);                          // Prints the fname with whitespace
console.log(name2.trim());                    // Prints the fname after stripping whitespace


// Exercise 7: Number Eight
console.log(`Exercise 7: Number Eight`);
console.log(5 + 3);   // Addition
console.log(11 - 3);  // Subtraction
console.log(4 * 2);   // Multiplication
console.log(16 / 2);  // Division


// Exercise 9: Favorite Number
console.log(`Exercise 9: Favorite Number`);

const favoriteNumber = 42;
console.log(`My favorite number is ${favoriteNumber}.`);

// Exercise 10: Adding Comments
console.log(`Exercise 10: Adding Comments`);
// Add comments to your programs to describe what they do. 


// Exercise 11: fnames
console.log(`Exercise 11: fnames`);
const fnames = ['John', 'Jane', 'Alice'];
for (const fname of fnames) {
  console.log(fname);
}


// Exercise 12: Greetings
console.log(`Exercise 12: Greetings`);
for (const fname of fnames) {
  console.log(`Hello ${fname}, how are you?`);
}


// Exercise 13: Your Own Array
console.log(`Exercise 13: Your Own Array`);
const transportation = ['car', 'motorcycle', 'bicycle'];
for (const vehicle of transportation) {
  console.log(`I would like to own a ${vehicle}.`);
}


// Exercise 14: Guest List
console.log(`Exercise 14: Guest List`);
const guests = ['Albert Einstein', 'Marie Curie', 'Isaac Newton'];
for (const guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}


// Exercise 15: Changing Guest List
console.log(`Exercise 15: Changing Guest List`);
// const guests = ['Albert Einstein', 'Marie Curie', 'Isaac Newton']; //Already been declared
const cannotAttend = guests.pop();
console.log(`${cannotAttend} can't make it to dinner.`);

guests.push('Nikola Tesla');

for (const guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}


// Exercise 16: More Guests
console.log(`Exercise 16: More Guests`);
// const guests = ['Albert Einstein', 'Marie Curie', 'Isaac Newton'];  //Already been declared
console.log('Found a bigger dinner table!');

guests.unshift('Nikola Tesla');
guests.splice(2, 0, 'Galileo Galilei');
guests.push('Leonardo da Vinci');

for (const guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}


// Exercise 17: Shrinking Guest List
console.log(`Exercise 17: Shrinking Guest List`);
// const guests = ['Albert Einstein', 'Marie Curie', 'Isaac Newton'];  //Already been declared
console.log('New dinner table won\'t arrive in time. Can invite only 2 people.');

while (guests.length > 2) {
  const removedGuest = guests.pop();
  console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

for (const guest of guests) {
  console.log(`Dear ${guest}, you are still invited to dinner.`);
}

guests.length = 0;
console.log(guests); // Empty list


// Exercise 18: Seeing the World
console.log(`Exercise 18: Seeing the World`);

const placesToVisit = ['Paris', 'Tokyo', 'Cairo', 'New York', 'Rome'];

console.log('Original order:');
console.log(placesToVisit);

console.log('Alphabetical order:');
console.log(placesToVisit.sort());

console.log('Original order:');
console.log(placesToVisit);

console.log('Reverse alphabetical order:');
console.log(placesToVisit.reverse());

console.log('Original order:');
console.log(placesToVisit);

console.log('Reverse the list:');
console.log(placesToVisit.reverse());

console.log('Original order:');
console.log(placesToVisit);

console.log('Sort in alphabetical order:');
console.log(placesToVisit.sort());

console.log('Sort in reverse alphabetical order:');
console.log(placesToVisit.sort().reverse());


// Exercise 19: Dinner Guests
console.log(`Exercise 19: Dinner Guests`);

// const guests = ['Albert Einstein', 'Marie Curie', 'Isaac Newton']; //Already been declared
console.log(`Number of people invited to dinner: ${guests.length}`);


// Exercise 20: Array of Items
console.log(`Exercise 20: Array of Items`);

const mountains = ['Everest', 'Kilimanjaro', 'Matterhorn'];
const rivers = ['Nile', 'Amazon', 'Yangtze'];
const countries = ['USA', 'China', 'Brazil'];
const cities = ['New York', 'Tokyo', 'London'];

console.log(mountains);
console.log(rivers);
console.log(countries);
console.log(cities);


// Exercise 21: TypeScript Objects
console.log(`Exercise 21: TypeScript Objects`);

const mountain = { fname: 'Everest', height: 8848 };
const river = { fname: 'Nile', length: 6650 };
const country = { fname: 'USA', population: 331000000 };
const city = { fname: 'New York', population: 8623000 };

console.log(mountain);
console.log(river);
console.log(country);
console.log(city);


// Exercise 22: Intentional Error
console.log(`Exercise 22: Intentional Error`);

const array = [1, 2, 3, 4];
console.log(array[10]); // Index error


// Exercise 23: Conditional Tests
console.log(`Exercise 23: Conditional Tests`);

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'audi'? I predict False.");
console.log(car == 'audi');

console.log("Is car != 'bmw'? I predict True.");
console.log(car != 'bmw');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'audi'? I predict False.");
console.log(car === 'audi');

console.log("Is car !== 'bmw'? I predict True.");
console.log(car !== 'bmw');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is 5 > 3? I predict True.");
console.log(5 > 3);

console.log("Is 2 < 1? I predict False.");
console.log(2 < 1);

console.log("Is 10 >= 5? I predict True.");
console.log(10 >= 5);

console.log("Is 3 <= 3? I predict True.");
console.log(3 <= 3);

console.log("Is 4 >= 6? I predict False.");
console.log(4 >= 6);

console.log("Is (5 > 3) && (2 < 1)? I predict False.");
console.log((5 > 3) && (2 < 1));

console.log("Is (5 > 3) || (2 < 1)? I predict True.");
console.log((5 > 3) || (2 < 1));

console.log("Is 'subaru' in ['subaru', 'audi', 'bmw']? I predict True.");
console.log('subaru' in ['subaru', 'audi', 'bmw']);

console.log("Is 'mercedes' in ['subaru', 'audi', 'bmw']? I predict False.");
console.log('mercedes' in ['subaru', 'audi', 'bmw']);


// Exercise 24: More Conditional Tests
console.log(`Exercise 24: More Conditional Tests`);

// Tests for equality and inequality with strings
const str1: string = "Hello";
const str2: string = "World";

if (str1 === str2) {
  
console.log("Strings are equal");   
}
else if (str1!== str2) {
console.log("Strings are not equal");    
    }

// Tests using the lower case function
console.log("Apple".toLowerCase() == "apple");   // True
console.log("Apple".toLowerCase() != "apple");   // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 == 5);     // True
// console.log(4 !== 32);  // True
console.log(7 > 3);      // True
console.log(2 < 5);      // True
console.log(4 >= 4);     // True
console.log(3 <= 3);     // True

// Tests using "and" and "or" operators
console.log((3 > 1) && (2 < 4));   // True
console.log((3 > 1) || (2 > 4));   // True

// Test whether an item is in an array
const fruits = ['apple', 'banana', 'orange'];
console.log('apple' in fruits);    // True
console.log('grape' in fruits);    // False

// Test whether an item is not in an array
const Numbers: number[] = [1, 2, 3, 4, 5];
const itemToCheck: number = 6;

if (!array.includes(itemToCheck)) {
  // Item is not in the array
  console.log("Item is not present in the array");
}

// Alternatively, you can use indexOf() method:
if (array.indexOf(itemToCheck) === -1) {
  // Item is not in the array
  console.log("Item is not present in the array");
}


// Exercise 25: Alien Colors #1
console.log(`Exercise 25: Alien Colors #1`);

const aliencolor = 'green';

if (aliencolor === 'green') {
  console.log('You earned 5 points!');
}


// Exercise 26: Alien Colors #2
console.log(`Exercise 26: Alien Colors #2`);

// const aliencolor = 'green'; //Already been declared

if (aliencolor === 'green') {
  console.log('You earned 5 points for shooting the alien!');
} else {
  console.log('You earned 10 points!');
}


// Exercise 27: Alien Colors #3
console.log(`Exercise 27: Alien Colors #3`);

// const aliencolor = 'yellow';  //Already been declared

if (aliencolor === 'green') {
  console.log('You earned 5 points!');
} else if (aliencolor === 'yellow') {
  console.log('You earned 10 points!');
} else if (aliencolor === 'red') {
  console.log('You earned 15 points!');
}


// Exercise 28: Stages of Life
console.log(`Exercise 28: Stages of Life`);

const age = 25;

if (age < 2) {
  console.log('You are a baby.');
} else if (age >= 2 && age < 4) {
  console.log('You are a toddler.');
} else if (age >= 4 && age < 13) {
  console.log('You are a kid.');
} else if (age >= 13 && age < 20) {
  console.log('You are a teenager.');
} else if (age >= 20 && age < 65) {
  console.log('You are an adult.');
} else {
  console.log('You are an elder.');
}


// Exercise 29: Favorite Fruit
console.log(`Exercise 29: Favorite Fruit`);

const favoritefruits = ['banana', 'apple', 'orange'];

if (favoritefruits.includes('banana')) {
  console.log('You really like bananas!');
}

if (favoritefruits.includes('mango')) {
  console.log('You really like mangoes!');
}

if (favoritefruits.includes('kiwi')) {
  console.log('You really like kiwis!');
}

if (favoritefruits.includes('apple')) {
  console.log('You really like apples!');
}

if (favoritefruits.includes('grape')) {
  console.log('You really like grapes!');
}


// Exercise 30: Hello Admin
console.log(`Exercise 30: Hello Admin`);

const userfnames = ['admin', 'john', 'alice', 'bob'];

for (const userfname of userfnames) {
  if (userfname === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${userfname}, thank you for logging in again.`);
  }
}


// Exercise 31: No Users
console.log(`Exercise 31: No Users`);

// const userfnames = [];  //Already been declared

if (userfnames.length === 0) {
  console.log('We need to find some users!');
} else {
  for (const userfname of userfnames) {
    console.log(`Hello ${userfname}, thank you for logging in again.`);
  }
}


// Exercise 32: Checking Userfnames
console.log(`Exercise 32: Checking Userfnames`);

const currentusers = ['john', 'alice', 'bob', 'admin', 'mary'];
const newusers = ['john', 'alice', 'peter', 'emma', 'bob'];

for (const newuser of newusers) {
  if (currentusers.includes(newuser.toLowerCase())) {
    console.log(`Userfname '${newuser}' is already taken. Please enter a new userfname.`);
  } else {
    console.log(`Userfname '${newuser}' is available.`);
  }
}


// Exercise 33: Ordinal Numbers
console.log(`Exercise 33: Ordinal Numbers`);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  let ordinal;

  if (number === 1) {
    ordinal = 'st';
  } else if (number === 2) {
    ordinal = 'nd';
  } else if (number === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }

  console.log(`${number}${ordinal}`);
}


// Exercise 34: Pizzas
console.log(`Exercise 34: Pizzas`);

const favoritepizzas = ['pepperoni', 'margherita', 'vegetarian'];

for (const pizza of favoritepizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log('I really love pizza!');


// Exercise 35: Animals
console.log(`Exercise 35: Animals`);

const animals = ['dog', 'cat', 'elephant'];

for (const animal of animals) {
  console.log(`${animal} would make a great pet.`);
}

console.log('Any of these animals would make a great pet!');


// Exercise 36: T-Shirt
console.log(`Exercise 36: T-Shirt`);

function makeshirt(size: string, message: string) {
  console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}

makeshirt('medium', 'I love TypeScript');


// Exercise 37: Large Shirts
console.log(`Exercise 37: Large Shirts`);

function makeshirts(size: string = 'large', message: string = 'I love TypeScript') {
  console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}

makeshirts();               // Large shirt with default message
makeshirts('medium');       // Medium shirt with default message
makeshirts('small', 'Hello'); // Small shirt with custom message


// Exercise 38: Cities
console.log(`Exercise 38: Cities`);

function describecity(city: string, country: string = 'Pakistan') {
  console.log(`${city} is in ${country}.`);
}

describecity('Karachi');
describecity('Lahore');
describecity('London', 'UK');


// Exercise 39: City fnames
console.log(`Exercise 39: City fnames`);

function citycountry(city

: string, country: string): string {
  return `${city}, ${country}`;
}

console.log(citycountry('Lahore', 'Pakistan'));
console.log(citycountry('Paris', 'France'));
console.log(citycountry('Tokyo', 'Japan'));


// Exercise 40: Album
console.log(`Exercise 40: Album`);

function makeAlbum(artist: string, title: string, tracks?: number): object {
    const album: { artist: string; title: string; tracks?: number } = { artist, title };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  console.log(makeAlbum('Artist 1', 'Album 1'));
  console.log(makeAlbum('Artist 2', 'Album 2', 10));
  console.log(makeAlbum('Artist 3', 'Album 3', 15));
  


// Exercise 41: Magicians
console.log(`Exercise 41: Magicians`);

function showmagicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

const Magicians = ['David Copperfield', 'Harry Houdini', 'Penn and Teller'];
showmagicians(Magicians);


// Exercise 42: Great Magicians
console.log(`Exercise 42: Great Magicians`);

function makegreat(magicians: string[]): string[] {
  const greatmagicians = [];
  for (const magician of magicians) {
    greatmagicians.push(`the Great ${magician}`);
  }
  return greatmagicians;
}

// const Magicians = ['David Copperfield', 'Harry Houdini', 'Penn and Teller'];     //Already been  decalered
const greatmagicians = makegreat(Magicians);
showmagicians(greatmagicians);


// Exercise 43: Unchanged Magicians
console.log(`Exercise 43: Unchanged Magicians`);

// function makegreat(magicians: string[]): string[] {               //Already been  decalered
//   const greatmagicians = [];
//   for (const magician of magicians) {
//     greatmagicians.push(`the Great ${magician}`);
//   }
//   return greatmagicians;
// }

// const magicians = ['David Copperfield', 'Harry Houdini', 'Penn and Teller'];    //Already been  decalered
const GreatMagicians = makegreat([...Magicians]);
showmagicians(Magicians);
showmagicians(GreatMagicians);


// Exercise 44: Sandwiches
console.log(`Exercise 44: Sandwiches`);

function makesandwich(...items: string[]) {
  console.log("Making a sandwich with the following items:");
  for (const item of items) {
    console.log(item);
  }
}

makesandwich('bread', 'cheese', 'lettuce', 'tomato');
makesandwich('bread', 'ham', 'cheese');
makesandwich('bread', 'peanut butter', 'jelly');


// Exercise 45: Cars
console.log(`Exercise 45: Cars`);

function carinfo(manufacturer: string, model: string, ...features: string[]) {
    const car: { manufacturer: string; model: string; [key: string]: string } = { manufacturer, model };
    for (const feature of features) {
      const [key, value] = feature.split('=');
      car[key] = value;
    }
    console.log(car);
  }
  
  carinfo('Toyota', 'Camry', 'color=red', 'year=2022');
  carinfo('Honda', 'Civic', 'color=blue', 'year=2021', 'sunroof=true');
