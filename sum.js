// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though. If any argument
// is not a number, output an error message. We need at least 2 arguments.

// Extract the command line arguments
// What's the type of our command line args?
const args = process.argv.slice(2);
console.log('args:', args);

// Edge cases: We need at least 2 arguments. => output error message

// Edge cases: We need to check if they are whole numbers
// Edge cases: If any argument is not a number, output an error message.

// iterate through the args
// c-style loop
// for of loop, forEach loop

// for (let i = 0; i < args.length; i++) {

//   console.log("i:", i, "arg:", args[i])

// }
// accumulator
let total = 0;

for (let arg of args) {
  // Add each argument
  total += Number(arg); // typecasting
  console.log('arg:', Number(arg), 'Total:', total);
}

// print out the total
console.log("Total:", total)