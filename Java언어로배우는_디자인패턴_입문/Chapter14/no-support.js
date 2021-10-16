const Support = require("./support");

/**
 * 아무것도 처리하지 않는 클래스
 */
class NoSupport extends Support {
  /**
   * @param {string} name
   */
  constructor(name) {
    super(name);
  }

  /**
   * @param {Trouble} trouble
   * @returns {boolean} 항상 false
   */
  resolve(trouble) {
    return false;
  }
}

module.exports = NoSupport;
