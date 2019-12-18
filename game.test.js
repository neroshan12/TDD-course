const Game = require("./game");

test("player 1 has four points", () => {
  let game = new Game();
  expect(game.score()).toBe(4);
});
