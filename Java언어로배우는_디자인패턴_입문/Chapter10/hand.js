class Hand {
  /**
   * @param {number} handValue
   */
  constructor(handValue) {
    /**
     * @type {number}
     * @private
     */
    this.handValue = handValue;
  }

  static getHand(handValue) {
    return Hand.hand[handValue];
  }

  /**
   * @param {Hand} h
   * @returns {boolean}
   */
  isStrongerThan(h) {
    return this._fight(h) === 1;
  }

  /**
   * @param {Hand} h
   * @returns {number}
   * @private
   */
  _fight(h) {
    if (this === h) {
      return 0;
    } else if ((this.handValue + 1) % 3 === h.handValue) {
      return 1;
    } else {
      return -1;
    }
  }

  /**
   * @returns {string}
   */
  toString() {
    return Hand.name[this.handValue];
  }
}

/**
 * @type {number}
 * @static
 * @final
 */
Hand.ROCK = 0;
Hand.SCISSORS = 1;
Hand.PAPER = 2;

/**
 * @type {Hand[]}
 * @static
 * @final
 */
Hand.hand = [
  new Hand(Hand.ROCK),
  new Hand(Hand.SCISSORS),
  new Hand(Hand.PAPER),
];

/**
 * @type {string[]}
 * @static
 * @final
 */
Hand.name = ["바위", "가위", "보"];

module.exports = Hand;
