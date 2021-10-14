const Link = require("../factory/link");

class TableLink extends Link {
  /**
   * @param {string} caption
   * @param {string} url
   */
  constructor(caption, url) {
    super(caption, url);
  }

  /**
   * @override
   * @returns html
   */
  makeHTML() {
    return `<td><a href="${this.url}">${this.caption}</a></td>\n`;
  }
}

module.exports = TableLink;
