const Border = require("./border");

class FullBorder extends Border {
  /**
   * @param {Display} display
   */
  constructor(display) {
    super(display);
  }

  /**
   * @returns {number}
   */
  getColumns() {
    return this.display.getColumns() + 2; // + 좌우
  }

  /**
   * @returns {number}
   */
  getRows() {
    return this.display.getRows() + 2; // + 상하
  }

  /**
   * @param {number} row
   * @returns {string}
   */
  getRowText(row) {
    if (row === 0) {
      // 장식 상단
      return `+${this._makeLine("-", this.display.getColumns())}+`;
    } else if (row === this.display.getRows() + 1) {
      // 장식 하단
      return `+${this._makeLine("-", this.display.getColumns())}+`;
    } else {
      // 그 외
      return `|${this.display.getRowText(row - 1)}|`;
    }
  }

  /**
   * 문자 ch를 count개 연속시킨 문자열 생성
   * @param {string} ch
   * @param {number} count
   * @private
   */
  _makeLine(ch, count) {
    return ch.repeat(count);
  }
}

module.exports = FullBorder;
