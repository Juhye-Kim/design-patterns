/**
 * 중개인에게 상담을 의뢰하는 회원
 * @interface
 */
class Colleague {
  /**
   * 중개인 설정
   * - Mediator를 구현한 클래스가 최초로 호출하는 메서드
   * @abstract
   * @param {Mediator} mediator 상담시 사용되는 인스턴스
   */
  setMediator(mediator) {}

  /**
   * 중개인이 내리는 지시에 따라 자신을 유효/무효 상태로 바꿈
   * @abstract
   * @param {boolean} enabled
   */
  setColleagueEnabled(enabled) {}
}

module.exports = Colleague;
