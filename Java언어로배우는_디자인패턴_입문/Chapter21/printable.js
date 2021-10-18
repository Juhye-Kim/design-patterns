/**
 * @interface
 * - Printer, Printerproxy를 동일시하기 위한 클래스
 */
class Printable {
  /**
   * 프린터 이름 설정
   * @abstract
   * @param {string} name
   */
  setPrinterName(name) {}

  /**
   * 프린터 이름 취득
   * @abstract
   * @returns {string}
   */
  get printerName() {}

  /**
   * 문자열 표시
   * - Print 본인만 실행 가능
   * @abstract
   * @param {string} string
   */
  print(string) {}
}
