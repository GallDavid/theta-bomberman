const arrays = require('./arrays.js');
const print = (printable) => {
  // print an array as string, per line
  // used everywhere
  console.clear();
  for (let i = 0; i < printable.length; i++) {
    console.log(printable[i].join('').toString());
  }
};

let smallMap = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 'X', 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 0, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2],
  [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 0, 3, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2],
  [2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 0, 3, 0, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 'Y', 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
let explodeRange = 1;
// This function is for the bomb explosion. If there is a destructible object next to a bomb, then it will be vanish.
const explode1 = () => {
  for (let i = 0; i < smallMap.length; i++) {
    for (let j = 0; j < smallMap[i].length; j++) {
      if (smallMap[i][j] === 9 && (smallMap[i + 1][j] === 1 || smallMap[i + 1][j] === 0 || smallMap[i + 1][j] === 'X' || smallMap[i + 1][j] === 'Y')) {
        smallMap[i + explodeRange][j] = '*';
      }
      if (smallMap[i][j] === 9 && (smallMap[i - 1][j] === 1 || smallMap[i - 1][j] === 0 || smallMap[i - 1][j] === 'X' || smallMap[i - 1][j] === 'Y')) {
        smallMap[i - explodeRange][j] = '*';
      }
      if (smallMap[i][j] === 9 && (smallMap[i][j + 1] === 1 || smallMap[i][j + 1] === 0 || smallMap[i][j + 1] === 'X' || smallMap[i][j + 1] === 'Y')) {
        smallMap[i][j + explodeRange] = '*';
      }
      if (smallMap[i][j] === 9 && (smallMap[i][j - 1] === 1 || smallMap[i][j - 1] === 0 || smallMap[i][j - 1] === 'X' || smallMap[i][j - 1] === 'Y')) {
        smallMap[i][j - explodeRange] = '*';
      }
      if (smallMap[i][j] === 9) {
        smallMap[i][j] = '*';
      }
    }
  }
};

const explode2 = () => {
  for (let i = 0; i < smallMap.length; i++) {
    for (let j = 0; j < smallMap[i].length; j++) {
      if (smallMap[i][j] === 8 && (smallMap[i + 1][j] === 1 || smallMap[i + 1][j] === 0 || smallMap[i + 1][j] === 'X' || smallMap[i + 1][j] === 'Y')) {
        smallMap[i + explodeRange][j] = '#';
      }
      if (smallMap[i][j] === 8 && (smallMap[i - 1][j] === 1 || smallMap[i - 1][j] === 0 || smallMap[i - 1][j] === 'X' || smallMap[i - 1][j] === 'Y')) {
        smallMap[i - explodeRange][j] = '#';
      }
      if (smallMap[i][j] === 8 && (smallMap[i][j + 1] === 1 || smallMap[i][j + 1] === 0 || smallMap[i][j + 1] === 'X' || smallMap[i][j + 1] === 'Y')) {
        smallMap[i][j + explodeRange] = '#';
      }
      if (smallMap[i][j] === 8 && (smallMap[i][j - 1] === 1 || smallMap[i][j - 1] === 0 || smallMap[i][j + 1] === 'X' || smallMap[i][j - 1] === 'Y')) {
        smallMap[i][j - explodeRange] = '#';
      }
      if (smallMap[i][j] === 8) {
        smallMap[i][j] = '#';
      }
    }
  }
};

const largeMapGen = (smallMap) => {
  // make a 200x52 array, will be spliced to 176x44
  let board = new Array(52);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(200);
  }

  // elements
  const freeSpace = ['░'];
  const softWall = ['█'];
  const fixWall = ['▓'];
  const border = ['▚'];

  // convert smallMap indexes into 8x4 array
  let position1 = 0;
  let position2 = 0;
  for (let i = 0, a = position1; i < smallMap.length; i++ , a += 4) {
    for (let j = 0, b = position2; j < smallMap[i].length; j++ , b += 8) {
      if (smallMap[i][j] === 0) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = freeSpace[0];
          }
        }
      }
      if (smallMap[i][j] === 1) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = softWall[0];
          }
        }
      }
      if (smallMap[i][j] === 2) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = border[0];
          }
        }
      }
      if (smallMap[i][j] === 3) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = fixWall[0];
          }
        }
      }
      if (smallMap[i][j] === 5) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = 5;
          }
        }
      }
      if (smallMap[i][j] === 'X') {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = 'X';
          }
        }
      }
      if (smallMap[i][j] === 'Y') {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = 'Y';
          }
        }
      }
      if (smallMap[i][j] === '*') {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = '*';
          }
        }
      }
      if (smallMap[i][j] === 9) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = 9;
          }
        }
      }
      if (smallMap[i][j] === '#') {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = '#';
          }
        }
      }
      if (smallMap[i][j] === 8) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 8; j++) {
            board[a + i][b + j] = 8;
          }
        }
      }
    }
  }

  // splice as promised
  board.splice(0, 3);
  board.splice(-4, 3);
  for (let i = 0; i < 6; i++) {
    for (let i = 0, j = 0; i < board.length; i++ , j++) {
      board[i].pop();
      board[j].shift();
    }
  }
  return board;
};

const generatedMap = (sourceMap) => {
  // randomize empty spaces
  // used in game before generating large map
  for (let i = 0; i < sourceMap.length; i++) {
    for (let j = 0; j < sourceMap[i].length; j++) {
      if (sourceMap[i][j] === 1) {
        sourceMap[1 + Math.round(Math.random() * 10)][5] = Math.round(Math.random());
        // sourceMap[1 + Math.round(Math.random() * 10)][9] = Math.round(Math.random());
        sourceMap[1 + Math.round(Math.random() * 10)][13] = Math.round(Math.random());
        // sourceMap[1 + Math.round(Math.random() * 10)][17] = Math.round(Math.random());
        sourceMap[5][Math.round(Math.random() * 21) + 1] = Math.round(Math.random());
        sourceMap[9][Math.round(Math.random() * 21) + 1] = Math.round(Math.random());
      }
    }
  }
  return sourceMap;
};

const menuArrGen = () => {
  // generates the empty menu array
  // used in menu
  let menuArr = new Array(44);
  for (let i = 0; i < menuArr.length; i++) {
    menuArr[i] = new Array(176);
  }
  return menuArr;
}
let menuArr = menuArrGen();
const menuSelectionMove = () => { // leftArrow, rightArrow
  // moves the selections arrays
  // used in menu after menuSelectionDel
  for (let i = position1, k = 0; k < arrays.arrowLeft.length; i++ , k++) {
    for (let j = position2, m = 0; m < arrays.arrowLeft[k].length; j++ , m++) {
      menuArr[i][j] = arrays.arrowLeft[k][m];
    }
  }
  for (let i = position1, k = 0; k < arrays.arrowRight.length; i++ , k++) {
    for (let j = position2 + 62, m = 0; m < arrays.arrowRight[k].length; j++ , m++) {
      menuArr[i][j] = arrays.arrowRight[k][m];
    }
  }
};
let position1 = 13;
let position2 = 60;
const menuSelectionDel = () => {
  // clears the selection arrows
  // used in menu after moving selection
  for (let i = position1, k = 0; k < arrays.arrowLeft.length; i++ , k++) {
    for (let j = position2, m = 0; m < arrays.arrowLeft[k].length; j++ , m++) {
      menuArr[i][j] = ' ';
    }
  }
  for (let i = position1, k = 0; k < arrays.arrowRight.length; i++ , k++) {
    for (let j = position2 + 62, m = 0; m < arrays.arrowRight[k].length; j++ , m++) {
      menuArr[i][j] = ' ';
    }
  }
};

const clearArr = (arr) => {
  // overwire an array with space
  // used in menu after option choose
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = ' ';
    }
  }
};

module.exports = {
  print,
  largeMapGen,
  generatedMap,
  menuArrGen,
  menuSelectionMove,
  menuSelectionDel,
  clearArr,
  explode1,
  explode2,
  smallMap
};
