/**
 * @interface
 */
class Context {
  /**
   * 시간 설정
   * @abstract
   * @param {number} hour
   */
  setClock(hour) {}

  /**
   * 상태 전환
   * @abstract
   * @param {State} state
   */
  changeState(state) {}

  /**
   * 경비센터 호출
   * @abstract
   * @param {string} msg
   */
  callSecurity(msg) {}

  /**
   * 경비센터 기록
   * @abstract
   * @param {string} msg
   */
  recordLog(msg) {}
}

module.exports = Context;
