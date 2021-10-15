/**
 * 문자열 표시용 추상 클래스
 * @abstract
 */
class Display {
  /**
   * 가로 문자 수 얻기
   * @abstract
   * @returns {number}
   */
  getColumns() {}

  /**
   * 세로 문자 수 얻기
   * @abstract
   * @returns {number}
   */
  getRows() {}

  /**
   * row번째 문자열 얻기
   * @abstract
   * @param {number} row
   */
  getRowText(row) {}

  /**
   * 전부 표시
   */
  show() {
    for (let i = 0; i < this.getRows(); i++) {
      console.log(this.getRowText(i));
    }
  }
}

module.exports = Display;
