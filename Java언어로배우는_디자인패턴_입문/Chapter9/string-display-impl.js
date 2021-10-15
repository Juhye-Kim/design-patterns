const DisplayImpl = require("./display-impl");

/**
 * 문자열을 표시하는 클래스
 * - DisplayImpl(추상클래스)를 구현한 클래스
 */
class StringDisplayImpl extends DisplayImpl {
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

    /**
     * @type {number}
     * @private
     */
    this._width = str.length;
  }

  rawOpen() {
    this._printLine();
  }

  /**
   * 앞뒤에 | 기호를 붙여 표시
   */
  rawPrint() {
    console.log(`|${this._str}|`);
  }

  rawClose() {
    this._printLine();
  }

  /**
   * 테두리선을 추가해 표시
   * @private
   */
  _printLine() {
    let output = "+";

    for (let i = 0; i < this._width; i++) output += "-";

    output += "+";

    console.log(output);
  }
}

module.exports = StringDisplayImpl;
