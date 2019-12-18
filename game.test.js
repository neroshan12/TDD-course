const Game = require("./game");

test("When the game starts both players have 0 points", () => {
  let game = new Game(0);
  expect(game.totalScore()).toBe(0);
});

test("Test that 0 point is love", () => {
  let game = new Game(0);
  expect(game.scoringRules()).toBe('Love all')


})
