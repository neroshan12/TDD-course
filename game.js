class Game {
  constructor(score) {
    this.score = score
  }

  totalScore() {
    return 0;
  }

  scoringRules() {
    return this.score === 0 ? "Love all" : null
  }
}

module.exports = Game;
