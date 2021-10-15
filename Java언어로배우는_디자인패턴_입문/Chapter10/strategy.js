/**
 * 가위바위보 '전략'을 위한 추상메서드 집합
 * @interface
 */
class Strategy {
  /**
   * 다음에 내는 손 결정
   * @abstract
   * @returns {Hand}
   */
  nextHand() {}

  /**
   * 직전에 낸 손으로 이겼는지, 졌는지 학습
   * - 이후 nextHand의 리턴값을 결정
   * @abstract
   * @param {boolean} win
   */
  study(win) {}
}

module.exports = Strategy;
