const Support = require("./support");

/**
 * limit에서 지정한 번호 미만의 트러블만 해결하는 클래스
 */
class LimitSupport extends Support {
  /**
   * @param {string} name
   * @param {number} limit
   */
  constructor(name, limit) {
    super(name);

    /**
     * @type {number}
     * @private
     */
    this._limit = limit;
  }

  /**
   * @param {Trouble} trouble
   * @returns {boolean}
   */
  resolve(trouble) {
    return trouble.id < this._limit;
  }
}

module.exports = LimitSupport;
