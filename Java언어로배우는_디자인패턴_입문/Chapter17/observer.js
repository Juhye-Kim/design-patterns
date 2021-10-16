/**
 * 관찰자 클래스
 * @interface
 */
class Observer {
  /**
   * 수를 생성하는 메서드
   * @param {NumberGenerator} generator
   * @abstract
   */
  update(generator) {}
}

module.exports = Observer;
