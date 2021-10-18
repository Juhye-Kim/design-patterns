const Node = require("./node");
const CommandListNode = require("./command-list-node");

/**
 * 프로그램
 * BNF => <program> ::= program <command list>
 */

class ProgramNode extends Node {
  constructor() {
    super();

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
    context.skipToken("program"); // program 토큰 건너뛰기

    this._commandListNode = new CommandListNode();
    this._commandListNode.parse(context);
  }

  /**
   * @returns {string}
   */
  toString() {
    return `[program ${this._commandListNode}]`;
  }
}

module.exports = ProgramNode;
