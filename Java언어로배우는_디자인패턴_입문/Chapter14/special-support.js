const Support = require("./support");

/**
 * 지정 번호의 트러블만 처리하는 클래스
 */
class SpecialSupport extends Support {
  /**
   * @param {string} name
   * @param {number} num
   */
  constructor(name, num) {
    super(name);

    /**
     * @type {number}
     * @private
     */
    this._num = num;
  }

  /**
   * @param {Trouble} trouble
   * @returns {boolean}
   */
  resolve(trouble) {
    return trouble.id === this._num;
  }
}

module.exports = SpecialSupport;
