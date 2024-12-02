const fs = require('fs');
const readline = require('readline');

const file = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false
});

let distance = 0;
let left = [];
let right = [];

file.on('line', (line) => {
  let tokens = line.split('   ');
  left.push(tokens[0]);
  right.push(tokens[1]);
});

file.on('close', () => {

  // sort left and right
  left.sort();
  right.sort();

  for(let i=0; i<left.length; i++) {
    distance += Math.abs(left[i] - right[i]);
  }

  console.log(distance);
});