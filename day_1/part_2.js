const fs = require('fs');
const readline = require('readline');

const file = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false
});

let similarity = 0;
let left = [];
let right = [];
let memory = {};

file.on('line', (line) => {
  let tokens = line.split('   ');
  left.push(tokens[0]);
  right.push(tokens[1]);
});

file.on('close', () => {

  for(let i=0; i<left.length; i++) {
    let leftNum = left[i];
    if(memory[leftNum] !== undefined) {
      similarity += memory[leftNum];
    } else {
      let score = 0;
      for(let j=0; j<right.length; j++) {
        let rightNum = right[j];
        if(leftNum === rightNum) {
          score++;
        }
      }
      memory[leftNum] = leftNum * score;
      similarity += leftNum * score;
    }
  }

  console.log(similarity);
});