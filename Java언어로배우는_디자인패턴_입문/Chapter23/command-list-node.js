const Node = require("./node");
const CommandNode = require("./command-node");

/**
 * Command List
 * BNF => <command list> ::= <command>* end
 */
class CommandListNode extends Node {
  constructor() {
    super();

    /**
     * @type {Node[]}
     * @private
     */
    this._list = [];
  }

  /**
   * @param {Context} context
   */
  parse(context) {
    while (true) {
      if (context.currentToken === null) {
        console.log(new Error("Missing 'end'"));
      } else if (context.currentToken === "end") {
        context.skipToken("end");
        break;
      } else {
        const commandNode = new CommandNode();
        commandNode.parse(context);

        this._list.push(commandNode);
      }
    }
  }

  /**
   * @returns {string}
   */
  toString() {
    return `[${this._list.toString()}]`;
  }
}

module.exports = CommandListNode;
