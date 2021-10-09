/**
 * 책 클래스
 * @public
 */
class Book {
  constructor(name) {
    /**
     * @type {string}
     * @private
     */
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

module.exports = Book;
