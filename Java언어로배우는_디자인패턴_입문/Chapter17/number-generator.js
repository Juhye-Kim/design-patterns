/**
 * 수를 생성하는 추상 클래스
 * @abstract
 */
class NumberGenerator {
  constructor() {
    /**
     * NumberGenerator를 관찰하는 Observer들
     * @type {Observer[]}
     * @private
     */
    this._observers = [];
  }

  /**
   * Observer 추가
   * @param {Observer} observer
   */
  addObserver(observer) {
    this._observers.push(observer);
  }

  /**
   * Observer 삭제
   * @param {Observer} observer
   */
  deleteObserver(observer) {
    const idx = this._observers.findIndex((o) => o === observer);
    this._observers.splice(idx, 1);
  }

  /**
   * Observer들에게 내용 갱신을 알림
   */
  notifyObservers() {
    this._observers.forEach((o) => o.update(this));
  }

  /**
   * @returns {number}
   * @abstract
   */
  getNumber() {}

  /**
   * @abstract
   */
  execute() {}
}

module.exports = NumberGenerator;
