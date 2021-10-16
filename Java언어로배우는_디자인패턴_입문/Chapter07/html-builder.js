const Builder = require("./builder");

class HTMLBuilder extends Builder {
  constructor() {
    super();

    /**
     * @type {string}
     * @private
     */
    this._filename = "";
  }

  /**
   * @override
   * @param {string} title
   */
  makeTitle(title) {
    this._filename = `${title}.html`;

    console.log(`<html><head><title>${title}</title></head></html><body>`);
    console.log(`<h1>${title}</h1>`);
  }

  /**
   * @override
   * @param {string} str
   */
  makeString(str) {
    console.log(`<p>${str}</p>`);
  }

  /**
   * @override
   * @param {string[]} items
   */
  makeItems(items) {
    let str = "<ul>";
    items.forEach((item) => (str += `<li>${item}</li>`));
    str += "</ul>";

    console.log(str);
  }

  /**
   * @override
   */
  close() {
    console.log("</body></html>");
  }

  get result() {
    return this._filename;
  }
}

module.exports = HTMLBuilder;
