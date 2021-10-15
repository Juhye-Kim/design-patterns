/**
 * 가위바위보하는 사람을 표현한 클래스
 */
class Player {
  /**
   * @param {string} name
   * @param {Strategy} strategy
   */
  constructor(name, strategy) {
    /**
     * 이름
     * @type {string}
     * @private
     */
    this._name = name;

    /**
     * 전략
     * @type {Strategy}
     * @private
     */
    this._strategy = strategy;

    /**
     * @type {number}
     * @private
     */
    this._winCount = 0;

    /**
     * @type {number}
     * @private
     */
    this._loseCount = 0;

    /**
     * @type {number}
     * @private
     */
    this._gameCount = 0;
  }

  /**
   * 역할을 strategy에게 위임
   * @returns {Hand}
   */
  nextHand() {
    return this._strategy.nextHand();
  }

  win() {
    this._strategy.study(true);
    this._winCount++;
    this._gameCount++;
  }

  lose() {
    this._strategy.study(false);
    this._loseCount++;
    this._gameCount++;
  }

  even() {
    this._gameCount++;
  }

  /**
   * 승부 결과를 문자열로 반환
   * @returns {string}
   */
  toString() {
    return `[${this._name}: ${this._gameCount} games, ${this._winCount} win, ${this._loseCount} lose]`;
  }
}

module.exports = Player;
