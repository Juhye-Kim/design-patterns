/**
 * 방문자
 * - 방문할 곳의 데이터구조에 의존
 * @abstract
 */
class Visitor {
  /**
   * @abstract
   * @param {Entry} entry file or directory
   */
  visit(entry) {}
}

module.exports = Visitor;
