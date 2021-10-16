/**
 * 방문자를 받아들이는 인터페이스
 * @interface
 */
class Element {
  /**
   * @abstract
   * @param {Visitor} v
   */
  accept(v) {}
}

module.exports = Element;
