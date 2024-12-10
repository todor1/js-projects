// var name = "Todor";
// var age = 25;
// var hasHobbies = true;

// let name = "Todor";
// let age = 25;
// let hasHobbies = true;

// const name = "Todor";
// let age = 25;
// const hasHobbies = true;

// age = 30;
// name = "Tod"; // Error

// function summarizeUser(userName, userAge, userHasHobbies) {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHasHobbies
//   );
// }

// const summarizeUser = function (userName, userAge, userHasHobbies) {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHasHobbies
//   );
// };

// const summarizeUser = (userName, userAge, userHasHobbies) => {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHasHobbies
//   );
// };

// console.log(summarizeUser(name, age, hasHobbies));

// const add = (a, b) => {
//   return a + b;
// };
// // const add = (a, b) => a + b;
// console.log(add(1, 2));

// const addOne = (a) => a + 1;
// console.log(addOne(1));

// const addRandom = () => 1 + 10;
// console.log(addRandom());

// // Objects
// const person = {
//   name: "Todor",
//   age: 25,
//   // greet: () => {
//   //   console.log("Hi, I am " + this.name); // undefined after transpiling
//   // },
//   // greet: function () {
//   //   console.log("Hi, I am " + this.name);
//   // },
//   greet() {
//     console.log("Hi, I am " + this.name);
//   },
// };

// console.log(person);
// person.greet();

// // Arrays

// const hobbies = ["Sports", "Cooking", 1, true, {}];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map((hobby) => "Hobby: " + hobby));

// console.log(
//   hobbies.map((hobby) => {
//     return "Hobby: " + hobby;
//   })
// );
// console.log(hobbies);

// // primitives & reference types
// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Programming");
// console.log(hobbies);

// const hobbies = ["Sports", "Cooking"];
// const copiedArray = hobbies.slice();

//// Spread operator
// const copiedArray = [hobbies]; -> [[ 'Sports', 'Cooking' ]], nested array as a first element of the array
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const person = {
//   name: "Todor",
//   age: 25,
//   greet() {
//     console.log("Hi, I am " + this.name);
//   },
// };

// const copiedPerson = { ...person };
// console.log(copiedPerson);

//// Rest operator

// const toArray = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3];
// };

// const toArray = (...args) => {
//   return args;
// };
// console.log(toArray(1, 2, 3, 4));

//// Destructuring
const person = {
  name: "Todor",
  age: 25,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

// const printName = (personObj) => {
//   console.log(personObj.name);
// };
// const printName = ({ name }) => {
//   console.log(name);
// };

// const printName = ({ name, age }) => {
//   console.log(name, age);
// };

// printName(person);

// pulled out by name from the object
const { name, age } = person;
console.log(name, age);

// pulled out by position/index from the array
const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
