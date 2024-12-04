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
      if(board[i][j] === 'X') {
        // Check all 8 directions
        if(i-1 >= 0 && j-1 >= 0 && board[i-1][j-1] === 'M' &&
            i-2 >= 0 && j-2 >= 0 && board[i-2][j-2] === 'A' &&
            i-3 >= 0 && j-3 >= 0 && board[i-3][j-3] === 'S') {
          total++;
        }
        if(i-1 >= 0 && board[i-1][j] === 'M' &&
            i-2 >= 0 && board[i-2][j] === 'A' &&
            i-3 >= 0 && board[i-3][j] === 'S') {
          total++;
        }
        if(i-1 >= 0 && j+1 < board[i].length && board[i-1][j+1] === 'M' &&
            i-2 >= 0 && j+2 < board[i].length && board[i-2][j+2] === 'A' &&
            i-3 >= 0 && j+3 < board[i].length && board[i-3][j+3] === 'S') {
          total++;
        }
        if(j-1 >= 0 && board[i][j-1] === 'M' &&
            j-2 >= 0 && board[i][j-2] === 'A' &&
            j-3 >= 0 && board[i][j-3] === 'S') {
          total++;
        }
        if(j+1 < board[i].length && board[i][j+1] === 'M' &&
            j+2 < board[i].length && board[i][j+2] === 'A' &&
            j+3 < board[i].length && board[i][j+3] === 'S') {
          total++;
        }
        if(i+1 < board.length && j-1 >= 0 && board[i+1][j-1] === 'M' &&
            i+2 < board.length && j-2 >= 0 && board[i+2][j-2] === 'A' &&
            i+3 < board.length && j-3 >= 0 && board[i+3][j-3] === 'S') {
          total++;
        }
        if(i+1 < board.length && board[i+1][j] === 'M' &&
            i+2 < board.length && board[i+2][j] === 'A' &&
            i+3 < board.length && board[i+3][j] === 'S') {
          total++;
        }
        if(i+1 < board.length && j+1 < board[i].length && board[i+1][j+1] === 'M' &&
            i+2 < board.length && j+2 < board[i].length && board[i+2][j+2] === 'A' &&
            i+3 < board.length && j+3 < board[i].length && board[i+3][j+3] === 'S') {
          total++;
        }
      }
    }
  }
  console.log(total);
});