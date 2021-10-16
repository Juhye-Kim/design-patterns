/**
 * 발생한 트러블을 표현하는 클래스
 */
class Trouble {
  /**
   * @param {number} id 트러블 번호
   */
  constructor(id) {
    /**
     * @type {number}
     * @private
     */
    this._id = id;
  }

  /**
   * @return {number}
   */
  get id() {
    return this._id;
  }

  /**
   * @return {string}
   */
  toString() {
    return `Trouble #${this._id}`;
  }
}

module.exports = Trouble;
