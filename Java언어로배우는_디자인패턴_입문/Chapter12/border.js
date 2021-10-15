const Display = require("./display");

/**
 * '장식'을 나타내는 추상 클래스
 * - 내용물과 동일한 메서드를 가짐
 * @abstract
 */
class Border extends Display {
  /**
   * @param {Display} display 이 장식을 둘러싼 내용물
   */
  constructor(display) {
    super();

    /**
     * @type {Display}
     * @protected
     */
    this.display = display;
  }
}

module.exports = Border;
