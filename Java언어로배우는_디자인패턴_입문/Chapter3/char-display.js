const AbstractDisplay = require("./abstract-display");

class CharDisplay extends AbstractDisplay {
  constructor(ch) {
    super();

    /**
     * 표시할 문자
     * @type {string}
     * @private
     */
    this._ch = ch;
  }

  /**
   * @override
   */
  open() {
    console.log("<<");
  }

  /**
   * @override
   */
  print() {
    console.log(this._ch);
  }

  /**
   * @override
   */
  close() {
    console.log(">>");
  }
}

module.exports = CharDisplay;
