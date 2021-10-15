const Hand = require("./hand");

/**
 * 다음 손은 난수로 결정, 과거 승패 이력을 사용해 각각의 손을 낼 확률을 바꿈
 * @implements Strategy
 */
class ProbStrategy {
  constructor() {
    /**
     * @type {number}
     * @private
     */
    this._prevHandValue = 0;

    /**
     * @type {number}
     * @private
     */
    this._currentHandValue = 0;

    /**
     * 과거 승패를 반영한 확률계산을 위한 표
     * - history[이전에 낸 손][이번에 낼 손]
     * @type {array[]}
     * @private
     */
    this._history = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
  }

  nextHand() {
    const bet = Math.random() * this._getSum(this._currentHandValue);

    let handValue = 0;

    if (bet < this._history[this._currentHandValue][0]) {
      handValue = 0;
    } else if (
      bet <
      this._history[this._currentHandValue][0] +
        this._history[this._currentHandValue][1]
    ) {
      handValue = 1;
    } else {
      handValue = 2;
    }

    this._prevHandValue = this._currentHandValue;
    this._currentHandValue = handValue;

    return Hand.getHand(parseInt(handValue));
  }

  /**
   * @private
   * @param {number} hv
   * @returns {number}
   */
  _getSum(hv) {
    return this._history[hv].reduce((acc, count) => (acc += count), 0);
  }

  /**
   * @param {boolean} win
   */
  study(win) {
    if (win) {
      this._history[this._prevHandValue][this._currentHandValue]++;
    } else {
      this._history[this._prevHandValue][(this._currentHandValue + 1) % 3]++;
      this._history[this._prevHandValue][(this._currentHandValue + 2) % 3]++;
    }
  }
}

module.exports = ProbStrategy;
