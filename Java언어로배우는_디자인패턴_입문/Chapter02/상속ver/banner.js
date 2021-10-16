class Banner {
  constructor(str) {
    /**
     * @type {string}
     * @private
     */
    this._str = str;
  }

  /**
   * 문자열을 괄호로 묶어서 표시
   * @public
   */
  showWithParen() {
    console.log(`(${this._str})`);
  }

  /**
   * 문자열 전후에 * 기호를 붙여서 표시
   * @public
   */
  showWithAster() {
    console.log(`*${this._str}*`);
  }
}

module.exports = Banner;
