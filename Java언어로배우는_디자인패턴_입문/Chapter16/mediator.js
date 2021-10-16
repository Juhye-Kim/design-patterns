/**
 * 중개인 역할을 하는 클래스
 * @interface
 */
class Mediator {
  /**
   * Mediator가 관리하는 회원을 생성
   * @abstract
   */
  createColleagues() {}

  /**
   * 각 회원(Colleague)에서 호출되는 메서드 (= 상담)
   * @abstract
   */
  colleagueChanged() {}
}
