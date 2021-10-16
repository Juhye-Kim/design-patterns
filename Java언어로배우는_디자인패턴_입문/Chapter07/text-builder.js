const Builder = require("./builder");

class TextBuilder extends Builder {
  constructor() {
    super();

    this._buffer = "";
  }

  /**
   * @override
   * @param {string} title
   */
  makeTitle(title) {
    this._buffer += `===================\n<${title}>\n`;
  }

  /**
   * @override
   * @param {string} str
   */
  makeString(str) {
    this._buffer += `- ${str}\n`;
  }

  /**
   * @override
   * @param {string[]} items
   */
  makeItems(items) {
    items.forEach((item) => {
      this._buffer += ` * ${item}\n`;
    });
  }

  /**
   * @override
   */
  close() {
    this._buffer += "===================\n";
  }

  get result() {
    return this._buffer;
  }
}

module.exports = TextBuilder;
