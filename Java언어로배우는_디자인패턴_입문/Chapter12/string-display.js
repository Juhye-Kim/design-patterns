const Display = require("./display");

/**
 * 1행으로 구성된 문자열 표시용 클래스
 */
class StringDisplay extends Display {
  /**
   * @param {string} str
   */
  constructor(str) {
    super();

    /**
     * @type {string}
     * @private
     */
    this._str = str;
  }

  /**
   * @returns {number} 문자 수
   */
  getColumns() {
    return this._str.length;
  }

  /**
   * @returns {number} 행 수
   */
  getRows() {
    return 1;
  }

  /**
   * @param {number} row
   * @returns {string|null} row가 0일 때만 반환
   */
  getRowText(row) {
    return row === 0 ? this._str : null;
  }
}

module.exports = StringDisplay;
