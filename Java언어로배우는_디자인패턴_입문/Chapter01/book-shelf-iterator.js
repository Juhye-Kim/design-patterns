const Iterator = require("./iterator");

/**
 * BookShelf 클래스 검색을 실행하는 클래스
 * @public
 * @implements {Iterator}
 */
class BookShelfIterator extends Iterator {
  constructor(bookShelf) {
    super();

    /**
     * 검색 대상 서가
     * @type {BookShelf}
     * @private
     */
    this._bookShelf = bookShelf;

    /**
     * 현재 주목하고 있는 책 index
     * @type {number}
     * @private
     */
    this._index = 0;
  }

  /**
   * 다음 책 존재여부 조사
   * @returns {boolean}
   */
  hasNext() {
    return this._index < this._bookShelf.length;
  }

  /**
   * @public
   * @returns {object}
   */
  next() {
    const book = this._bookShelf.getBookAt(this._index);
    this._index++;
    return book;
  }
}

module.exports = BookShelfIterator;
