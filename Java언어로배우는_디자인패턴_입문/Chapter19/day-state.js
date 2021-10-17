/**
 * 주간 상태
 * @implements State
 */
class DayState {
  /**
   * @returns {State}
   */
  static getInstance() {
    if (DayState._instance) return DayState._instance;
    return (DayState._instance = new DayState());
  }

  /**
   * @param {Context} context
   * @param {number} hour
   */
  doClock(context, hour) {
    const NightState = require("./night-state");

    if (hour < 9 || 17 <= hour) {
      context.changeState(NightState.getInstance());
    }
  }

  /**
   * @param {Context} context
   */
  doUse(context) {
    context.recordLog("금고사용(주간)");
  }

  /**
   * @param {Context} context
   */
  doAlarm(context) {
    context.callSecurityCenter("비상벨(주간)");
  }

  /**
   * @param {Context} context
   */
  doPhone(context) {
    context.callSecurityCenter("일반통화(주간)");
  }

  /**
   * @returns {string}
   */
  toString() {
    return "[주간]";
  }
}

DayState._instance = null;

module.exports = DayState;
