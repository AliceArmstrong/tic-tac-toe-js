export let board = []; // get board square by id

export let playerTurn = "O";

export const changePlayer = (function() {
  playerTurn === "O" ? playerTurn = "X" : playerTurn === "O";
});

export const selectSquare = (function() {
  playerTurn === "O" ? this.value = "O" : this.value = "X";
  changePlayer();
});
