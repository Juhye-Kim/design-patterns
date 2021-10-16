const Entry = require("./entry");

/**
 * 파일을 표현하는 클래스
 */
class File extends Entry {
  /**
   * @param {string} name
   * @param {number} size
   */
  constructor(name, size) {
    super();

    /**
     * 파일명
     * @type {string}
     * @private
     */
    this._name = name;

    /**
     * 파일 크기
     * @type {number}
     * @private
     */
    this._size = size;
  }

  getName() {
    return this._name;
  }

  getSize() {
    return this._size;
  }

  /**
   * @param {Visitor} v
   */
  accept(v) {
    v.visit(this);
  }
}

module.exports = File;
