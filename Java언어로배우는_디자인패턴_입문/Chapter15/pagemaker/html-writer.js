/**
 * 간단한 웹페이지를 작성하는 클래스
 * - 제약: 이 클래스는 title 메서드를 제일 처음 호출해야함
 */
class HtmlWriter {
  constructor() {
    /**
     * @type {string}
     * @private
     */
    this._writer = "";
  }

  /**
   * 제목 출력
   * @param {string} title
   */
  title(title) {
    this._writer += `<html><head><title>${title}</title></head><body>\n<h1>${title}</h1>\n`;
  }

  /**
   * 단락 출력
   * @param {string} msg
   */
  paragraph(msg) {
    this._writer += `<p>${msg}</p>\n`;
  }

  /**
   * 링크 출력
   * @param {string} href
   * @param {string} caption
   */
  link(href, caption) {
    this.paragraph(`<a href="${href}">${caption}</a>`);
  }

  /**
   * 메일주소 링크 출력
   * @param {string} mailAddr
   * @param {string} userName
   */
  mailto(mailAddr, userName) {
    this.link(`mailto:${mailAddr}`, userName);
  }

  /**
   * HTML 출력을 끝냄
   */
  close() {
    this._writer += "</body></html>\n";

    console.log(this._writer);
  }
}

module.exports = HtmlWriter;
