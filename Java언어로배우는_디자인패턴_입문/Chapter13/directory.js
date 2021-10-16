const Entry = require("./entry");

/**
 * 디렉터리를 표현하는 클래스
 */
class Directory extends Entry {
  /**
   * @param {string} name
   */
  constructor(name) {
    super();

    /**
     * 디렉터리명
     * @type {string}
     * @private
     */
    this._name = name;

    /**
     * 디렉터리 엔트리 집합
     * @type {Entry[]}
     * @private
     */
    this.dir = [];
  }

  getName() {
    return this._name;
  }

  getSize() {
    return this.dir.reduce((prev, cur) => prev + cur.getSize(), 0);
  }

  /**
   * 엔트리 추가
   * @param {Entry} entry
   * @returns {Directory}
   */
  add(entry) {
    this.dir.push(entry);
    return this;
  }

  /**
   * @param {Visitor} v
   */
  accept(v) {
    v.visit(this);
  }
}

module.exports = Directory;
