/**
 * @abstract
 */
class Factory {
  /**
   * @param {string} classname
   * @returns {Factory}
   */
  static getFactory(classname) {
    const factory = require(`../${classname}/${classname}`);
    return new factory();
  }

  /**
   * @abstract
   * @param {string} caption
   * @param {string} url
   * @returns {Link}
   */
  createLink(caption, url) {}

  /**
   * @abstract
   * @param {string} caption
   * @return {Tray}
   */
  createTray(caption) {}

  /**
   * @abstract
   * @param {string} title
   * @param {string} author
   * @returns {Page}
   */
  createPage(title, author) {}
}

module.exports = Factory;
