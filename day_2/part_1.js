const fs = require('fs');
const readline = require('readline');

const file = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false
});

let safeLevels = 0;

file.on('line', (line) => {
  let tokens = line.split(' ').map((token) => {return parseInt(token)});
  // Check if they are all increasing
  let increasing = true;
  let decreasing = true;
  for(let i=1; i<tokens.length; i++) {
    if(tokens[i] <= tokens[i-1]) {
      increasing = false;
      break;
    }
  }
  if(increasing) {
    decreasing = false;
  }
  if(!increasing) {
    // Check if they are all decreasing
    for(let i=1; i<tokens.length; i++) {
      if(tokens[i] >= tokens[i-1]) {
        decreasing = false;
        break;
      }
    }
    if(decreasing) {
      increasing = false;
    }
  }
  if(increasing || decreasing) {
    // Check that each number is only 1 - 3 apart from previous
    let valid = true;
    for(let i=1; i<tokens.length; i++) {
      if(Math.abs(tokens[i] - tokens[i-1]) > 3) {
        valid = false;
        break;
      }
    }
    if(valid) {
      safeLevels++;
    }
  }
});

file.on('close', () => {
  console.log(safeLevels);
});