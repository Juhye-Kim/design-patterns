const Node = require("./node");

/**
 * Repeat Command Node
 * BNF =>  <repeat command> ::= repeat <number> <command list>
 */
class RepeatCommandNode extends Node {
  constructor() {
    super();

    /**
     * @type {number}
     * @private
     */
    this._number = 0;

    /**
     * @type {Node}
     * @private
     */
    this._commandListNode = null;
  }

  /**
   * @param {Context} context
   */
  parse(context) {
    const CommandListNode = require("./command-list-node");

    context.skipToken("repeat");

    this._number = context.currentNumber;
    context.nextToken();

    this._commandListNode = new CommandListNode();
    this._commandListNode.parse(context);
  }

  /**
   * @returns {string}
   */
  toString() {
    return `[repeat ${this._number} ${this._commandListNode}]`;
  }
}

module.exports = RepeatCommandNode;
