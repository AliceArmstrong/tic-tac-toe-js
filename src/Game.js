let playerSymbol = 'O';
let player = '1';
const arrX = [];
const arrO = [];
let winner = false;
const winningCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
[2, 5, 8], [0, 4, 8], [2, 4, 6]];

export const endGame = (array) => {
  if (array === arrX) {
    winner = 2;
  } else {
    winner = 1;
  }
  document.getElementById('header').innerHTML = `Player ${winner} wins`;
};

export const checkWinner = (array) => {
  winningCombo.map(combo => {
    let counter = 0;
    combo.forEach((element) => {
      if (array.includes(element)) {
        counter += 1;
      }
      if (counter === 3) {
        endGame(array);
      }
    });
    return counter;
  });
};

export const pushIndex = (event, array) => {
  const buttons = [...document.getElementsByClassName('button')];
  const activeButton = buttons.indexOf(event.target);
  array.push(activeButton);
};

export const playerHeader = () => {
  document.getElementById('header').innerHTML = `Player ${player}'s turn!`;
};

export const changePlayer = () => {
  if (playerSymbol === 'O') {
    playerSymbol = 'X';
    player = '2';
  } else {
    playerSymbol = 'O';
    player = '1';
  }
};

export const selectSquare = (event) => {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  if (winner === false) {
    if (playerSymbol === 'O') {
      event.target.innerText = 'O';
      pushIndex(event, arrO);
    } else {
      event.target.innerText = 'X';
      pushIndex(event, arrX);
    }
    changePlayer();
  }
  playerHeader();
  event.target.removeEventListener('click', selectSquare);
  checkWinner(arrX);
  checkWinner(arrO);
};

export const reload = () => {
  window.location.reload();
};

export const addEventListener = () => {
  const buttons = [...document.getElementsByClassName('button')];
  buttons.map(button => button.addEventListener('click', selectSquare));
  const reset = document.getElementById('reset');
  reset.addEventListener('click', reload);
};
