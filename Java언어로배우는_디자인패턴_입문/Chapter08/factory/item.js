/**
 * @abstract
 */
class Item {
  /**
   * @param {string} caption
   */
  constructor(caption) {
    /**
     * 목차
     * @type {string}
     * @protected
     */
    this.caption = caption;
  }

  /**
   * @abstract
   * @returns {string} HTML문자열
   */
  makeHTML() {}
}

module.exports = Item;
