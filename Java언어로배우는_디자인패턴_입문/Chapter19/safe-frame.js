const NightState = require("./night-state");

/**
 * @implements Context
 */
class SafeFrame {
  /**
   * @param {string} title
   */
  constructor(title) {
    this._state = NightState.getInstance();
  }

  actionPerformed(action) {
    if (action === "buttonUse") {
      this._state.doUse(this);
    } else if (action === "buttonAlarm") {
      this._state.doAlarm(this);
    } else if (action === "buttonPhone") {
      this._state.doPhone(this);
    } else {
      console.log("?");
    }
  }

  /**
   * 시간 설정
   * @param {number} hour
   */
  setClock(hour) {
    let clockstr = "현재 시간 ";
    if (hour < 10) {
      clockstr += `0${hour}:00`;
    } else {
      clockstr += `${hour}:00`;
    }
    console.log(clockstr);
    this._state.doClock(this, hour);
  }

  /**
   * 상태 전환
   * @param {State} state
   */
  changeState(state) {
    console.log(`${this._state}에서 ${state}로 상태가 변화했습니다.`);

    this._state = state;
  }

  /**
   * 경비센터 호출
   * @param {string} msg
   */
  callSecurityCenter(msg) {
    console.log(`call!! ${msg}`);
  }

  /**
   * 경비센터 기록
   * @param {string} msg
   */
  recordLog(msg) {
    console.log(`record... ${msg}`);
  }
}

module.exports = SafeFrame;
