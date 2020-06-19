// const sayHello = function() {
//   console.log('Hello');
// }

// sayHello();

// const sayHello = () => {
//   console.log('Hello');
// }

// sayHello();

// Single line doesn't need curly braces
const sayHello = () => console.log('Yes');
sayHello();

// Multiple line return
function sayHelloWorld() {
  return 'Hello World';
}
console.log(sayHelloWorld());

// Single line return
const sayWelcome = () => 'Welcome';
console.log(sayWelcome());

// Return object
function car() {
  return {car1: 'Toyota', car2: 'Benz'}
}
console.log(car());

// Return object  with arrow function
const numbers = () => ({color: 'red', msg: 'Hello'});
console.log(numbers());

// Normal function with Parameter
function name(name) {
  console.log(name)
}
name('Taye');

// Arrow function with Single Parameter
const age = age => console.log(age);
age(27);

// Arrow function with multiple parameters
const fullName = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
fullName('Taye', 'Akinola');

// Looping Array with map
const names = ['Brad', 'Traversy', 'Taye'];
// const nameLengths = names.map(function(name) {
//   return name.length;
// });
// console.log(nameLengths);

// Shorter
// const nameLengths = names.map((name) => {
//   return name.length;
// });
// console.log(nameLengths);

// Shortest
const nameLengths = names.map(name => name.length);
console.log(nameLengths);