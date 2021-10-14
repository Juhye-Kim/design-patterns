/**
 * @implements Product
 */
class UnderlinePen {
  constructor(ulchar) {
    /**
     * @type {string}
     * @private
     */
    this._ulchar = ulchar;
  }

  /**
   * @public
   * @param {string} s
   */
  use(s) {
    const length = s.length;

    console.log(`"${s}"`);
    console.log(` ${this._ulchar.repeat(length)} `);
  }

  createClone() {
    return new UnderlinePen(this._ulchar); // clone()
  }
}

module.exports = UnderlinePen;
