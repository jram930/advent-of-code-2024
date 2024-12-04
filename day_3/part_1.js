const fs = require('fs');
const readline = require('readline');

const file = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false
});

let total = 0;

file.on('line', (line) => {
  // Use a regular expression to check for all instances of mul(number,number) in the string
  let matches = line.match(/mul\((\d+),(\d+)\)/g);
  if(matches) {
    // Get the two numbers from each match
    let numbers = matches.map((match) => {
      return match.match(/mul\((\d+),(\d+)\)/).slice(1).map((num) => {return parseInt(num)});
    });

    // Multiply the two numbers and add to total
    numbers.forEach((nums) => {
      total += nums[0] * nums[1];
    });
  }
});

file.on('close', () => {
  console.log(total);
});