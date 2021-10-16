/**
 * @interface
 */
class Iterator {
  /**
   * 다음에 next()를 호출해도 괜찮은지 조사
   * @public
   * @abstract
   * @returns {boolean} 다음요소 존재여부
   */
  hasNext() {}

  /**
   * @public
   * @abstract
   * @returns {object} 현재 요소를 반환하면서, 다음 위치로 진행
   */
  next() {}
}

module.exports = Iterator;
