const NumberGenerator = require("./number-generator");

/**
 * 난수 생성 클래스
 */
class RandomNumberGenerator extends NumberGenerator {
  constructor() {
    super();

    /**
     * 현재 숫자
     * @type {number}
     * @private
     */
    this._num = 0;
  }

  get num() {
    return this._num;
  }

  execute() {
    for (let i = 0; i < 20; i++) {
      this._num = parseInt(Math.random() * 50);
      this.notifyObservers();
    }
  }
}

module.exports = RandomNumberGenerator;
