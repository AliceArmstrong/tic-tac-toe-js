// export const board = []; // get board square by id

let playerSymbol = 'O';
let player = '2';
let arrX = [];
let arrO = [];

export const changePlayer = () => {
  /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
  if (playerSymbol === 'O') {
    playerSymbol = 'X';
    player = '1';
  } else {
    playerSymbol = 'O';
    player = '2';
  }
};

export const selectSquare = (event) => {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  if (playerSymbol === 'O') {
    event.target.innerText = 'O';
    arrO.push(event.target.id);
  } else { event.target.innerText = 'X';
  arrX.push(event.target.id);
}
  event.target.removeEventListener('click', selectSquare);
  playerHeader();
  checkWinner();
};

export const addEventListener = () => {
  const buttons = [...document.getElementsByClassName('button')];
  buttons.map(button => button.addEventListener('click', selectSquare));
};

export const playerHeader = () => {
  document.getElementById('header').innerHTML = `Player ${player}'s turn!`;
};

export const checkWinner = () => {
  if (document.getElementById('1').innerText === document.getElementById('2').innerText && document.getElementById('1').innerText === document.getElementById('3').innerHTML) {
    document.getElementById('header').innerHTML = `Player ${player} wins`;
  } else {
    changePlayer();
  }
};
