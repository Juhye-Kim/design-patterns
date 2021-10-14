const Factory = require("../factory/factory");
const TableLink = require("./table-link");
const TableTray = require("./table-tray");
const TablePage = require("./table-page");

class TableFactory extends Factory {
  /**
   * @param {string} caption
   * @param {string} url
   * @returns {TableLink}
   */
  createLink(caption, url) {
    return new TableLink(caption, url);
  }

  /**
   * @param {string} caption
   * @returns {TableTray}
   */
  createTray(caption) {
    return new TableTray(caption);
  }

  /**
   * @param {string} title
   * @param {string} author
   * @returns {TablePage}
   */
  createPage(title, author) {
    return new TablePage(title, author);
  }
}

module.exports = TableFactory;
