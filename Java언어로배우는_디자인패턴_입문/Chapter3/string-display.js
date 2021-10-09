const AbstractDisplay = require("./abstract-display");

class StringDisplay extends AbstractDisplay {
  constructor(str) {
    super(str);

    /**
     * @type {string}
     * @private
     */
    this._str = str;

    /**
     * 문자열의 byte 수
     * @type {number}
     * @private
     */
    this._width = str.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length;
  }

  /**
   * @override
   */
  open() {
    this._printLine();
  }

  /**
   * @override
   */
  print() {
    console.log(`|${this._str}|`);
  }

  /**
   * @override
   */
  close() {
    this._printLine();
  }

  /**
   * @private
   */
  _printLine() {
    let result = "+";

    for (let i = 0; i < this._width; i++) {
      result += "-";
    }
    result += "+";

    console.log(result);
  }
}

module.exports = StringDisplay;
