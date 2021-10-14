const Item = require("./item");

/**
 * HTML 하이퍼링크를 추상적으로 표현한 클래스
 * @abstract
 */
class Link extends Item {
  /**
   * @param {string} caption
   * @param {string} url
   */
  constructor(caption, url) {
    super(caption);

    /**
     * @type {string}
     * @protected
     */
    this.url = url;
  }
}

module.exports = Link;
