/**
 * 트러블을 해결할 사슬을 만드는 클래스
 * @abstract
 */
class Support {
  /**
   * @param {string} name
   */
  constructor(name) {
    /**
     * @type {string}
     * @private
     */
    this._name = name;

    /**
     * 떠넘기는 곳
     * @type {Support}
     * @private
     */
    this._next = null;
  }

  /**
   * 떠넘기는 곳 설정
   * @param {Support} next
   * @return {Support} next
   */
  setNext(next) {
    this._next = next;
    return next;
  }

  /**
   * 떠넘길 수 있는지 판단
   * @final
   * @param {Trouble} trouble 트러블 해결 수순
   */
  support(trouble) {
    if (this.resolve(trouble)) {
      this.done(trouble); // 해결
    } else if (this._next !== null) {
      this._next.support(trouble); // 떠넘기기
    } else {
      this.fail(trouble); // 미해결
    }
  }

  /**
   * @return {string}
   */
  toString() {
    return `[${this._name}]`;
  }

  /**
   * @abstract
   * @protected
   * @param {Trouble} trouble
   * @returns {boolean} true면 처리 완료, false면 아직 처리 X
   */
  resolve(trouble) {}

  /**
   * 해결 완료
   * @protected
   * @param {Trouble} trouble
   */
  done(trouble) {
    console.log(`${trouble} is resolved by ${this}!`);
  }

  /**
   * 해결 실패
   * @protected
   * @param {Trouble} trouble
   */
  fail(trouble) {
    console.log(`${trouble} cannot be resolved.`);
  }
}

module.exports = Support;
