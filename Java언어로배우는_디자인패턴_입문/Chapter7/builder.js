/**
 * 문서를 만들 메서드들을 선언하는 추상 클래스
 * @abstract
 */
class Builder {
  /**
   * 제목 항목을 문서에 구축
   * @abstract
   * @param {string} title
   */
  makeTitle(title) {}

  /**
   * 문자열 항목을 문서에 구축
   * @abstract
   * @param {string} str
   */
  makeString(str) {}

  /**
   * 개별 아이템 항목을 문서에 구축
   * @abstract
   * @param {stirng[]} items
   */
  makeItems(items) {}

  /**
   * 문서를 완성하는 메서드
   * @abstract
   */
  close() {}
}

module.exports = Builder;
