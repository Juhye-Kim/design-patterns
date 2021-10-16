const Item = require("./item");

/**
 * 여러개의 Link, Tray를 모아 합친 것을 표시한 클래스
 * @abstract
 */
class Tray extends Item {
  /**
   * @param {string} caption
   */
  constructor(caption) {
    super(caption);

    /**
     * @type {Item[]}
     * @protected
     */
    this.tray = [];
  }

  /**
   * Link, Tray를 모으는 메서드
   * @param {Item} item
   */
  add(item) {
    this.tray.push(item);
  }
}

module.exports = Tray;
