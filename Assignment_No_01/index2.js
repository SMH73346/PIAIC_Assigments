var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // Exercise 2: Personal Message
console.log("Exercise 2: Personal Message");
var fname = 'Eric';
console.log("Hello ".concat(fname, ", would you like to learn some Python today?"));
// Exercise 3: Name Cases
console.log("Exercise 3: Name Cases");
console.log(fname.toLowerCase()); // john doe
console.log(fname.toUpperCase()); // JOHN DOE
//console.log(fname.toTitleCase());   // John Doe
// Note: The `toTitleCase()` method is not available in JavaScript/TypeScript by default. You would need to implement it yourself or use a third-party library.
// Exercise 4: Famous Quote
console.log("Exercise 4: Famous Quote");
console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."');
// Exercise 5: Famous Quote 2
console.log("Exercise 5: Famous Quote 2");
var famousperson = 'Albert Einstein';
var mymessage = "".concat(famousperson, " once said, \"A person who never made a mistake never tried anything new.\"");
console.log(mymessage);
// Exercise 6: Stripping fnames
console.log("Exercise 6: Stripping fnames");
var name2 = '\t   John Doe \n';
console.log(name2); // Prints the fname with whitespace
console.log(name2.trim()); // Prints the fname after stripping whitespace
// Exercise 7: Number Eight
console.log("Exercise 7: Number Eight");
console.log(5 + 3); // Addition
console.log(11 - 3); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division
// Exercise 9: Favorite Number
console.log("Exercise 9: Favorite Number");
var favoriteNumber = 42;
console.log("My favorite number is ".concat(favoriteNumber, "."));
// Exercise 10: Adding Comments
console.log("Exercise 10: Adding Comments");
// Add comments to your programs to describe what they do. 
// Exercise 11: fnames
console.log("Exercise 11: fnames");
var fnames = ['John', 'Jane', 'Alice'];
for (var _i = 0, fnames_1 = fnames; _i < fnames_1.length; _i++) {
    var fname_1 = fnames_1[_i];
    console.log(fname_1);
}
// Exercise 12: Greetings
console.log("Exercise 12: Greetings");
for (var _a = 0, fnames_2 = fnames; _a < fnames_2.length; _a++) {
    var fname_2 = fnames_2[_a];
    console.log("Hello ".concat(fname_2, ", how are you?"));
}
// Exercise 13: Your Own Array
console.log("Exercise 13: Your Own Array");
var transportation = ['car', 'motorcycle', 'bicycle'];
for (var _b = 0, transportation_1 = transportation; _b < transportation_1.length; _b++) {
    var vehicle = transportation_1[_b];
    console.log("I would like to own a ".concat(vehicle, "."));
}
// Exercise 14: Guest List
console.log("Exercise 14: Guest List");
var guests = ['Albert Einstein', 'Marie Curie', 'Isaac Newton'];
for (var _c = 0, guests_1 = guests; _c < guests_1.length; _c++) {
    var guest = guests_1[_c];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
// Exercise 15: Changing Guest List
console.log("Exercise 15: Changing Guest List");
// const guests = ['Albert Einstein', 'Marie Curie', 'Isaac Newton']; //Already been declared
var cannotAttend = guests.pop();
console.log("".concat(cannotAttend, " can't make it to dinner."));
guests.push('Nikola Tesla');
for (var _d = 0, guests_2 = guests; _d < guests_2.length; _d++) {
    var guest = guests_2[_d];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
// Exercise 16: More Guests
console.log("Exercise 16: More Guests");
// const guests = ['Albert Einstein', 'Marie Curie', 'Isaac Newton'];  //Already been declared
console.log('Found a bigger dinner table!');
guests.unshift('Nikola Tesla');
guests.splice(2, 0, 'Galileo Galilei');
guests.push('Leonardo da Vinci');
for (var _e = 0, guests_3 = guests; _e < guests_3.length; _e++) {
    var guest = guests_3[_e];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
// Exercise 17: Shrinking Guest List
console.log("Exercise 17: Shrinking Guest List");
// const guests = ['Albert Einstein', 'Marie Curie', 'Isaac Newton'];  //Already been declared
console.log('New dinner table won\'t arrive in time. Can invite only 2 people.');
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner."));
}
for (var _f = 0, guests_4 = guests; _f < guests_4.length; _f++) {
    var guest = guests_4[_f];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
guests.length = 0;
console.log(guests); // Empty list
// Exercise 18: Seeing the World
console.log("Exercise 18: Seeing the World");
var placesToVisit = ['Paris', 'Tokyo', 'Cairo', 'New York', 'Rome'];
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
console.log("Exercise 19: Dinner Guests");
// const guests = ['Albert Einstein', 'Marie Curie', 'Isaac Newton']; //Already been declared
console.log("Number of people invited to dinner: ".concat(guests.length));
// Exercise 20: Array of Items
console.log("Exercise 20: Array of Items");
var mountains = ['Everest', 'Kilimanjaro', 'Matterhorn'];
var rivers = ['Nile', 'Amazon', 'Yangtze'];
var countries = ['USA', 'China', 'Brazil'];
var cities = ['New York', 'Tokyo', 'London'];
console.log(mountains);
console.log(rivers);
console.log(countries);
console.log(cities);
// Exercise 21: TypeScript Objects
console.log("Exercise 21: TypeScript Objects");
var mountain = { fname: 'Everest', height: 8848 };
var river = { fname: 'Nile', length: 6650 };
var country = { fname: 'USA', population: 331000000 };
var city = { fname: 'New York', population: 8623000 };
console.log(mountain);
console.log(river);
console.log(country);
console.log(city);
// Exercise 22: Intentional Error
console.log("Exercise 22: Intentional Error");
var array = [1, 2, 3, 4];
console.log(array[10]); // Index error
// Exercise 23: Conditional Tests
console.log("Exercise 23: Conditional Tests");
var car = 'subaru';
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
console.log("Exercise 24: More Conditional Tests");
// Tests for equality and inequality with strings
var str1 = "Hello";
var str2 = "World";
if (str1 === str2) {
    console.log("Strings are equal");
}
else if (str1 !== str2) {
    console.log("Strings are not equal");
}
// Tests using the lower case function
console.log("Apple".toLowerCase() == "apple"); // True
console.log("Apple".toLowerCase() != "apple"); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 == 5); // True
// console.log(4 !== 32);  // True
console.log(7 > 3); // True
console.log(2 < 5); // True
console.log(4 >= 4); // True
console.log(3 <= 3); // True
// Tests using "and" and "or" operators
console.log((3 > 1) && (2 < 4)); // True
console.log((3 > 1) || (2 > 4)); // True
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log('apple' in fruits); // True
console.log('grape' in fruits); // False
// Test whether an item is not in an array
var Numbers = [1, 2, 3, 4, 5];
var itemToCheck = 6;
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
console.log("Exercise 25: Alien Colors #1");
var aliencolor = 'green';
if (aliencolor === 'green') {
    console.log('You earned 5 points!');
}
// Exercise 26: Alien Colors #2
console.log("Exercise 26: Alien Colors #2");
// const aliencolor = 'green'; //Already been declared
if (aliencolor === 'green') {
    console.log('You earned 5 points for shooting the alien!');
}
else {
    console.log('You earned 10 points!');
}
// Exercise 27: Alien Colors #3
console.log("Exercise 27: Alien Colors #3");
// const aliencolor = 'yellow';  //Already been declared
if (aliencolor === 'green') {
    console.log('You earned 5 points!');
}
else if (aliencolor === 'yellow') {
    console.log('You earned 10 points!');
}
else if (aliencolor === 'red') {
    console.log('You earned 15 points!');
}
// Exercise 28: Stages of Life
console.log("Exercise 28: Stages of Life");
var age = 25;
if (age < 2) {
    console.log('You are a baby.');
}
else if (age >= 2 && age < 4) {
    console.log('You are a toddler.');
}
else if (age >= 4 && age < 13) {
    console.log('You are a kid.');
}
else if (age >= 13 && age < 20) {
    console.log('You are a teenager.');
}
else if (age >= 20 && age < 65) {
    console.log('You are an adult.');
}
else {
    console.log('You are an elder.');
}
// Exercise 29: Favorite Fruit
console.log("Exercise 29: Favorite Fruit");
var favoritefruits = ['banana', 'apple', 'orange'];
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
console.log("Exercise 30: Hello Admin");
var userfnames = ['admin', 'john', 'alice', 'bob'];
for (var _g = 0, userfnames_1 = userfnames; _g < userfnames_1.length; _g++) {
    var userfname = userfnames_1[_g];
    if (userfname === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(userfname, ", thank you for logging in again."));
    }
}
// Exercise 31: No Users
console.log("Exercise 31: No Users");
// const userfnames = [];  //Already been declared
if (userfnames.length === 0) {
    console.log('We need to find some users!');
}
else {
    for (var _h = 0, userfnames_2 = userfnames; _h < userfnames_2.length; _h++) {
        var userfname = userfnames_2[_h];
        console.log("Hello ".concat(userfname, ", thank you for logging in again."));
    }
}
// Exercise 32: Checking Userfnames
console.log("Exercise 32: Checking Userfnames");
var currentusers = ['john', 'alice', 'bob', 'admin', 'mary'];
var newusers = ['john', 'alice', 'peter', 'emma', 'bob'];
for (var _j = 0, newusers_1 = newusers; _j < newusers_1.length; _j++) {
    var newuser = newusers_1[_j];
    if (currentusers.includes(newuser.toLowerCase())) {
        console.log("Userfname '".concat(newuser, "' is already taken. Please enter a new userfname."));
    }
    else {
        console.log("Userfname '".concat(newuser, "' is available."));
    }
}
// Exercise 33: Ordinal Numbers
console.log("Exercise 33: Ordinal Numbers");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _k = 0, numbers_1 = numbers; _k < numbers_1.length; _k++) {
    var number = numbers_1[_k];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log("".concat(number).concat(ordinal));
}
// Exercise 34: Pizzas
console.log("Exercise 34: Pizzas");
var favoritepizzas = ['pepperoni', 'margherita', 'vegetarian'];
for (var _l = 0, favoritepizzas_1 = favoritepizzas; _l < favoritepizzas_1.length; _l++) {
    var pizza = favoritepizzas_1[_l];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log('I really love pizza!');
// Exercise 35: Animals
console.log("Exercise 35: Animals");
var animals = ['dog', 'cat', 'elephant'];
for (var _m = 0, animals_1 = animals; _m < animals_1.length; _m++) {
    var animal = animals_1[_m];
    console.log("".concat(animal, " would make a great pet."));
}
console.log('Any of these animals would make a great pet!');
// Exercise 36: T-Shirt
console.log("Exercise 36: T-Shirt");
function makeshirt(size, message) {
    console.log("You have ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
makeshirt('medium', 'I love TypeScript');
// Exercise 37: Large Shirts
console.log("Exercise 37: Large Shirts");
function makeshirts(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("You have ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
makeshirts(); // Large shirt with default message
makeshirts('medium'); // Medium shirt with default message
makeshirts('small', 'Hello'); // Small shirt with custom message
// Exercise 38: Cities
console.log("Exercise 38: Cities");
function describecity(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describecity('Karachi');
describecity('Lahore');
describecity('London', 'UK');
// Exercise 39: City fnames
console.log("Exercise 39: City fnames");
function citycountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(citycountry('Lahore', 'Pakistan'));
console.log(citycountry('Paris', 'France'));
console.log(citycountry('Tokyo', 'Japan'));
// Exercise 40: Album
console.log("Exercise 40: Album");
function makeAlbum(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(makeAlbum('Artist 1', 'Album 1'));
console.log(makeAlbum('Artist 2', 'Album 2', 10));
console.log(makeAlbum('Artist 3', 'Album 3', 15));
// Exercise 41: Magicians
console.log("Exercise 41: Magicians");
function showmagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var Magicians = ['David Copperfield', 'Harry Houdini', 'Penn and Teller'];
showmagicians(Magicians);
// Exercise 42: Great Magicians
console.log("Exercise 42: Great Magicians");
function makegreat(magicians) {
    var greatmagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatmagicians.push("the Great ".concat(magician));
    }
    return greatmagicians;
}
// const Magicians = ['David Copperfield', 'Harry Houdini', 'Penn and Teller'];     //Already been  decalered
var greatmagicians = makegreat(Magicians);
showmagicians(greatmagicians);
// Exercise 43: Unchanged Magicians
console.log("Exercise 43: Unchanged Magicians");
// function makegreat(magicians: string[]): string[] {               //Already been  decalered
//   const greatmagicians = [];
//   for (const magician of magicians) {
//     greatmagicians.push(`the Great ${magician}`);
//   }
//   return greatmagicians;
// }
// const magicians = ['David Copperfield', 'Harry Houdini', 'Penn and Teller'];    //Already been  decalered
var GreatMagicians = makegreat(__spreadArray([], Magicians, true));
showmagicians(Magicians);
showmagicians(GreatMagicians);
// Exercise 44: Sandwiches
console.log("Exercise 44: Sandwiches");
function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
}
makesandwich('bread', 'cheese', 'lettuce', 'tomato');
makesandwich('bread', 'ham', 'cheese');
makesandwich('bread', 'peanut butter', 'jelly');
// Exercise 45: Cars
console.log("Exercise 45: Cars");
function carinfo(manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, features_1 = features; _a < features_1.length; _a++) {
        var feature = features_1[_a];
        var _b = feature.split('='), key = _b[0], value = _b[1];
        car[key] = value;
    }
    console.log(car);
}
carinfo('Toyota', 'Camry', 'color=red', 'year=2022');
carinfo('Honda', 'Civic', 'color=blue', 'year=2021', 'sunroof=true');
