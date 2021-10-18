const Node = require("./node");

/**
 * Primitive Command Node
 * <primitive command> ::= go | right | left
 */
class PrimitiveCommandNode extends Node {
  constructor() {
    super();

    /**
     * @type {string}
     * @private
     */
    this._name = "";
  }

  /**
   * @param {Context} context
   */
  parse(context) {
    this._name = context.currentToken;

    context.skipToken(this._name);

    if (!["go", "right", "left"].includes(this._name)) {
      console.log(new Error(`${this._name} is undefined`));
    }
  }

  toString() {
    return this._name;
  }
}

module.exports = PrimitiveCommandNode;
