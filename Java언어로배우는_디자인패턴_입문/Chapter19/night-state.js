/**
 * 야간 상태
 * @implements State
 */
class NightState {
  /**
   * @returns {State}
   */
  static getInstance() {
    if (NightState._instance) return NightState._instance;
    return (NightState._instance = new NightState());
  }

  /**
   * @param {Context} context
   * @param {number} hour
   */
  doClock(context, hour) {
    const DayState = require("./day-state");

    if (9 <= hour && hour < 17) {
      context.changeState(DayState.getInstance());
    }
  }

  /**
   * @param {Context} context
   */
  doUse(context) {
    context.callSecurityCenter("비상: 야간금고 사용!");
  }

  /**
   * @param {Context} context
   */
  doAlarm(context) {
    context.callSecurityCenter("비상벨(야간)");
  }

  /**
   * @param {Context} context
   */
  doPhone(context) {
    context.recordLog("야간통화 녹음");
  }

  /**
   * @returns {string}
   */
  toString() {
    return "[야간]";
  }
}

NightState._instance = null;

module.exports = NightState;
