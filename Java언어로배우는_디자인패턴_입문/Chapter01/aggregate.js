/**
 * Aggregate 인터페이스
 * @public
 * @interface
 */
class Aggregate {
  /**
   * Iterator 인터페이스를 구현한 클래스 인스턴스를 생성
   * @public
   * @abstract
   * @returns {Iterator}
   */
  iterator() {}
}

module.exports = Aggregate;
