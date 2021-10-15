/**
 * 디렉터리 엔트리
 * @abstract
 */
class Entry {
  /**
   * 이름을 얻기 위한 메서드
   * @abstract
   * @returns {string}
   */
  getName() {}

  /**
   * 크기를 얻기 위한 메서드
   * @abstract
   * @returns {number}
   */
  getSize() {}

  /**
   * 디렉터리 안에 파일, 디렉터리를 넣는 메서드
   * @param {Entry} entry
   * @returns {Entry}
   */
  add(entry) {
    throw new Error("Error: File Treatement Exception");
  }

  /**
   * 종류를 표시하는 메서드
   * @param {string} prefix
   * @abstract
   */
  printList(prefix) {}

  /**
   * 인스턴스의 표준적인 문자열 표현 정의 (파일명, 크기 나열)
   * - Template Method 패턴
   * @returns {string}
   */
  toString() {
    return `${this.getName()} (${this.getSize()})`;
  }
}

module.exports = Entry;
