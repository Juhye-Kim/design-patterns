const Display = require("./display");

/**
 * Display 클래스에 '기능' 추가
 */
class CountDisplay extends Display {
  /**
   * @param {DisplayImpl} impl
   */
  constructor(impl) {
    super(impl);
  }

  /**
   * 지정한 횟수만큼 반복해서 표시
   * - 추가된 기능
   * @param {number} times 지정한 횟수
   */
  multiDisplay(times) {
    this.open();

    for (let i = 0; i < times; i++) this.print();

    this.close();
  }
}

module.exports = CountDisplay;
