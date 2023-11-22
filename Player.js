class Player {
  static get VERSION() {
    return 'All in';
  }

  static betRequest(gameState, bet) {
    bet(10000);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
