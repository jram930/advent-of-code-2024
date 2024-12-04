const fs = require('fs');
const readline = require('readline');

const file = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false
});

let board = [];
let total = 0;

file.on('line', (line) => {
  // Push each character into the board
  board.push(line.split(''));
});

file.on('close', () => {
  for(let i=0; i<board.length; i++) {
    for(let j=0; j < board[i].length; j++) {
      let count = 0;
      if(board[i][j] === 'A') {
        if(i-1 >= 0 && j-1 >= 0 && board[i-1][j-1] === 'M' &&
          i+1 < board.length && j+1 < board[i].length && board[i+1][j+1] === 'S'
        ) {
          count++;
        }
        if(i-1 >= 0 && j-1 >= 0 && board[i-1][j-1] === 'S' &&
          i+1 < board.length && j+1 < board[i].length && board[i+1][j+1] === 'M'
        ) {
          count++;
        }
        if(i-1 >= 0 && j+1 < board[i].length && board[i-1][j+1] === 'M' &&
          i+1 < board.length && j-1 >= 0 && board[i+1][j-1] === 'S'
        ) {
          count++;
        }
        if(i-1 >= 0 && j+1 < board[i].length && board[i-1][j+1] === 'S' &&
          i+1 < board.length && j-1 >= 0 && board[i+1][j-1] === 'M'
        ) {
          count++;
        }
        if(count === 2) {
          total++;
        }
      }
    }
  }
  console.log(total);
});