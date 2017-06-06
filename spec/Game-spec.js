import * as Game from '../src/Game';

describe("game", function() {

  // beforeEach(function() {
  //   changePlayer = new ChangePlayer();
  // });

  it("board should exist", function() {
    console.log("---GAMEBOARD---", Game, Game.board);
    expect(Game.board).toBeDefined();
  });

  it("can change player turn", function() {
    expect(Game.playerTurn).toEqual("O");
    (Game.selectSquare());
    expect(Game.playerTurn).toEqual("X");
  });

});

// describe('getDivAttribute', function() {
//     var d = document.querySelector('.box');
//     it('Should be bar', function() {
//         expect(d.getAttribute('foo')).toBe('bar');
//     });
// });
//
// describe('Calculator', function() {
//
// 	it('should add numbers');
//
// });
