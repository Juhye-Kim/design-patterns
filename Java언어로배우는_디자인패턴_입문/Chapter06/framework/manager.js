/**
 * Product 인터페이스를 이용해, 인스턴스 복제를 실행하는 클래스
 */
class Manager {
  constructor() {
    /**
     * @type {Map}
     * @private
     */
    this._showcase = new Map();
  }

  /**
   * @public
   * @param {string} name
   * @param {Product} proto
   */
  register(name, proto) {
    this._showcase.set(name, proto);
  }

  /**
   * @public
   * @param {string} protoname
   */
  create(protoname) {
    const p = this._showcase.get(protoname);
    return p.createClone();
  }
}

module.exports = Manager;
