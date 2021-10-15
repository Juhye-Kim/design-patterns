/**
 * 무언가를 표시하는 것
 * - 기능 클래스 계층 최상위 클래스
 */
class Display {
  /**
   * 구현(implement)을 나타내는 클래스의 인스턴스
   * @param {DisplayImpl} impl
   */
  constructor(impl) {
    /**
     * 두 클래스의 '다리'역할을 하는 필드
     * @type {DisplayImpl}
     * @private
     */
    this._impl = impl;
  }

  /**
   * 표시의 전처리
   */
  open() {
    this._impl.rawOpen();
  }

  /**
   * 표시 그 자체
   */
  print() {
    this._impl.rawPrint();
  }

  /**
   * 표시의 후처리
   */
  close() {
    this._impl.rawClose();
  }

  /**
   * @final
   */
  display() {
    this.open();
    this.print();
    this.close();
  }
}

module.exports = Display;
