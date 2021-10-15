const Hand = require("./hand");

/**
 * 직전에 이겼으면 다음에도 같은 손을 내고, 졌다면 난수를 이용해 결정
 * @implements Strategy
 */
class WinningStrategy {
  constructor() {
    /**
     * 이전 승부 결과
     * @type {boolean}
     * @private
     */
    this._won = false;

    /**
     * 이전 승부에서 내밀었던 손
     * @type {Hand}
     * @private
     */
    this._prevHand = null;
  }

  /**
   * @override
   */
  nextHand() {
    if (!this._won) {
      this._prevHand = Hand.getHand(parseInt(Math.random() * 3));
    }
    return this._prevHand;
  }

  /**
   * @override
   */
  study(win) {
    this._won = win;
  }
}

module.exports = WinningStrategy;
