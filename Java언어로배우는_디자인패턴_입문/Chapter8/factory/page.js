/**
 * HTML 페이지 전체를 추상적으로 표현한 클래스
 * @abstract
 */
class Page {
  /**
   * @param {string} title
   * @param {string} author
   */
  constructor(title, author) {
    /**
     * 페이지 제목
     * @type {string}
     * @protected
     */
    this.title = title;

    /**
     * 페이지 저자
     * @type {string}
     * @protected
     */
    this.author = author;

    /**
     * 페이지 내용
     * @type {Item[]}
     * @protected
     */
    this.content = [];
  }

  /**
   * @param {Item} item
   */
  add(item) {
    this.content.push(item);
  }

  output() {
    const filename = `${this.title}.html`;
    const html = this.makeHTML();

    console.log(filename);
    console.log(html);
  }

  /**
   * @abstract
   * @returns {string}
   */
  makeHTML() {}
}

module.exports = Page;
