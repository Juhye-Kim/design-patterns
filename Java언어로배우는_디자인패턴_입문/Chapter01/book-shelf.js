const Aggregate = require("./aggregate");
const BookShelfIterator = require("./book-shelf-iterator");

/**
 * 서가 클래스
 * @public
 * @implements {Aggregate}
 */
class BookShelf extends Aggregate {
  constructor(maxsize) {
    super();
    this._books = [];
    this._last = 0;
    this.maxsize = maxsize;
  }

  get length() {
    return this._books.length;
  }

  getBookAt(index) {
    return this._books[index];
  }

  appendBook(book) {
    this._books.push(book);
  }

  iterator() {
    return new BookShelfIterator(this);
  }
}

module.exports = BookShelf;
