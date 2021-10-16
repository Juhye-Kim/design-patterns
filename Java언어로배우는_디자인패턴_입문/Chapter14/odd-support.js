const Support = require("./support");

/**
 * 홀수 번호의 트러블만 처리하는 클래스
 */
class OddSupport extends Support {
  /**
   * @param {string} name
   */
  constructor(name) {
    super(name);
  }

  /**
   * @param {Trouble} trouble
   * @returns {boolean} 홀수여부
   */
  resolve(trouble) {
    return trouble.id % 2 === 1;
  }
}

module.exports = OddSupport;
