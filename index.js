"use strict";
// Exercise 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?
const userName = "Harry";
console.log("Hello", userName, "Would you like to learn some python today?");
// Exercise 3
// *Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
const personName = "Saman";
// name in lower case
console.log("person's name in lowercase :", personName.toLowerCase());
// name in upercase
console.log("person's name in upercase :", personName.toUpperCase());
//  name in title case
function toTitleCase(name) {
    return name.toLowerCase().replace(/(?:^|\s)w/g, (match) => match.toUpperCase());
}
;
const titleCaseName = toTitleCase(personName);
console.log("person's name in titlecase :", titleCaseName);
//Exercise 4
//     Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Imam Ali once said, "When you succeed be Humble."
const qoutes = '"When you succeed be Humble."';
console.log("Imam Ali once said,", qoutes);
//Exercise 5
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Imam Ali once said, "When you succeed be Humble."
const famousPerson = '"Imam Ali"';
const qoute = '"When you succeed be Humble"';
console.log(famousPerson, "once said, ", qoute);
//Exercise 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
const personsName = "\t  Saman  \n";
console.log("Name with whitespace:", personsName);
const result = personsName.trim();
console.log("Name wihout whitespace:", result);
//Exercise 7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.*/
console.log("Addition:", 6 + 2);
console.log("Sustraction:", 10 - 2);
console.log("Multiplication:", 4 * 2);
console.log("Divison:", 16 / 2);
//Exercise  8
//*You should create four lines that look like this:
//console.log(5+3) */;
console.log('--------------------------------------------------\n ');
console.log('console.log(5 + 3)\n');
console.log('--------------------------------------------------\n ');
//Exercise  9
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.*/
const favNumber = 786; //in this vaiable we store favorite num
const messages = 'My favourite nunmber is ${favNumber} .'; //in this variable we define variable that store favourite number
console.log(messages);
//Exercise  10
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.*/
let friendsName = ["ayesha", "samra", "rimsha", "konain"];
for (let index = 0; index < friendsName.length; index++) {
    console.log(friendsName[index]);
}
//Exercise  11
//Greetings: Start with the array you used in Exercise --10, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/
let friendsName1 = ["ayesha", "samra", "rimsha", "konain"];
for (let index = 0; index < friendsName1.length; index++) {
    console.log("Hello, " + friendsName1[index] + "! Ihope you are having a fantastic day.");
}
//Exercise  12
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
let ownArray = ["motorcycle", "car", "bicycle", "heavy bike", "bus", "train"];
let properties = ["is old but mazadar.", "is gift from relatives.", "is four seater.", "is to much expensive.", "is use for public transport."];
for (let index = 0; index < ownArray.length; index++) {
    console.log('i would like to own a ${ownArray[index]} because it${properties[index]}');
}
//Exercise  13
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
let guest = ["fatima", "ayesha", "samra", "meharmah"];
console.log(guest);
guest.splice(3, 1, "fiza");
for (let i = 0; i < guest.length; i++) {
    // console.log(Names{i},  "Good Evening" );
    if (guest[i] == "fatima") {
        console.log(guest[i], " I hope you are fine, i am very excited to invite you in my home for dinner");
    }
    else if (guest[i] == "ayesha") {
        console.log(guest[i], "  I hope you are fine, i am very excited to invite you in my home for dinner");
    }
    else if (guest[i] == "samra") {
        console.log(guest[i], " I hope you are fine, i am very excited to invite you in my home for dinner");
    }
    else if (guest[i] == "fiza") {
        console.log(guest[i], " I hope you are fine, i am very excited to invite you in my home for dinner");
    }
}
console.log("meharmah cannot join us in the dinner");
//Exercise  18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Show that your array is still in its original order by printing it.
// • 
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var places = ["Makkah", "Madinah", "Iraq,karbla", "Dubai", "Italy"];
console.log(places);
// Print your array in alphabetical order without modifying the actual list.
var alphabetical_order = [...places].sort();
console.log("alphabetical_order", alphabetical_order);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
var reverseOrder = [...places].reverse();
console.log("reverseOrder", reverseOrder);
//Show that your array is still in its original order by printing it.
console.log("orignal array", places);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var reverseOrder = [...places].reverse();
console.log("reverseOrder", reverseOrder);
//Exercise  19
