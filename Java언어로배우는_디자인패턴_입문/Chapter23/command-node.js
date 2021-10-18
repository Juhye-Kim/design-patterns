const Node = require("./node");
const RepeatCommandNode = require("./repeat-command-node");
const PrimitiveCommandNode = require("./primitive-command-node");

/**
 * Command Node
 * BNF =>  <command> ::= <repeat command> | <primitive command>
 */
class CommandNode extends Node {
  constructor() {
    super();

    /**
     * @type {Node}
     * @private
     */
    this._node = null;
  }

  /**
   * @param {Context} context
   */
  parse(context) {
    if (context.currentToken === "repeat") {
      this._node = new RepeatCommandNode();
      this._node.parse(context);
    } else {
      this._node = new PrimitiveCommandNode();
      this._node.parse(context);
    }
  }

  /**
   * @returns {string}
   */
  toString() {
    return this._node.toString();
  }
}

module.exports = CommandNode;
