/**
 * @interface
 */
class State {
  /**
   * 시간 설정
   * @abstract
   * @param {Context} context
   * @param {number} hour
   */
  doClock(context, hour) {}

  /**
   * 금고 사용
   * @param {Context} context
   */
  doUse(context) {}

  /**
   * 비상벨
   * @param {Context} context
   */
  doAlarm(context) {}

  /**
   * 일반통화
   * @param {Context} context
   */
  doPhone(context) {}
}
