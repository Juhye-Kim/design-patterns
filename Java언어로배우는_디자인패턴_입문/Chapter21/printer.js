/**
 * @implements Printable
 */
class Printer {
  /**
   * @param {string} [name]
   */
  constructor(name) {
    /**
     * @type {string}
     * @private
     */
    this._name = name;

    this._heavyJob(`Printer의 인스턴스 (${name})을 생성 중...`);
  }

  /**
   * 프린터 이름 설정
   * @param {string} name
   */
  setPrinterName(name) {
    this._name = name;
  }

  /**
   * @returns {string} name
   */
  get printerName() {
    return this._name;
  }

  /**
   * 이름을 붙여서 표시
   * @param {string} str
   */
  print(str) {
    console.log(`=== ${this._name} ===\n${str}`);
  }

  /**
   * 무거운 일
   * @private
   * @param {string} msg
   */
  async _heavyJob(msg) {
    console.log(msg);

    for (let i = 0; i < 5; i++) {
      await sleep(1000);
      console.log(".");
    }

    console.log("완료!");
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

module.exports = Printer;
