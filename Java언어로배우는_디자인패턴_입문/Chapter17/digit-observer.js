/**
 * 관찰한 수를 '숫자'로 표시하는 클래스
 * @implements Observer
 */
class DigitObserver {
  /**
   * @param {NumberGenerator} generator
   */
  update(generator) {
    console.log(`Digit Observer: ${generator.num}`);
  }
}

module.exports = DigitObserver;
