/**
 * 구문 트리의 '노드'
 * @abstract
 */
class Node {
  /**
   * @param {Context} context
   * @abstract
   */
  parse(context) {
    console.log(new Error("Error: parse exception"));
  }
}

module.exports = Node;
