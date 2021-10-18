const Printer = require("./printer");

/**
 * 대리인(proxy)
 * @implements Printable
 */
class PrinterProxy {
  /**
   * @param {string} name
   */
  constructor(name) {
    /**
     * 이름
     * @type {string}
     * @private
     */
    this._name = name;

    /**
     * 본인
     * @type {Printer}
     * @private
     */
    this._real = null;
  }

  /**
   * @param {string} name
   */
  setPrinterName(name) {
    if (this._real !== null) this._real.setPrinterName(name); // 본인 존재시, 본인 이름도 함께 설정
    this._name = name;
  }

  /**
   * @returns {string} name
   */
  get printerName() {
    return this._name;
  }

  /**
   * 대리인 범위를 넘어서기 때문에, 본인에게 넘김
   * @param {string} str
   */
  print(str) {
    this._realize(); // 본인 생성
    this._real.print(str); // 본인에게 '위임'
  }

  /**
   * 본인 생성
   * @private
   */
  _realize() {
    if (this._real === null) this._real = new Printer(this._name);
  }
}

module.exports = PrinterProxy;
