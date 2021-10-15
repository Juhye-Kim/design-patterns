const Border = require("./border");

/**
 * 구체적인 장식
 */
class SideBorder extends Border {
  /**
   * @param {Display} display
   * @param {string} ch
   */
  constructor(display, ch) {
    super(display);

    /**
     * @type {string}
     * @private
     */
    this._borderChar = ch;
  }

  /**
   * @returns {number}
   */
  getColumns() {
    return this.display.getColumns() + 2; // + 양쪽
  }

  /**
   * @returns {number}
   */
  getRows() {
    return this.display.getRows();
  }

  /**
   * @param {number} row
   * @returns {string}
   */
  getRowText(row) {
    return this._borderChar + this.display.getRowText(row) + this._borderChar;
  }
}

module.exports = SideBorder;
