const Book = require("./book");
const BookShelf = require("./book-shelf");

/**
 * BookShelf 안에 Book을 넣고, 책 이름을 차례로 표시하는 프로그램
 *
 * @Aggregate 집합체를 나타내는 인터페이스
 * @Iterator 하나씩 나열하며 검색을 실행하는 인터페이스
 * @Book 책 클래스
 * @BookShelf 서가 클래스
 * @BookShelfIterator 서가 검색 클래스
 * @Main 동작 테스트용 클래스
 */

const bookShelf = new BookShelf();
bookShelf.appendBook(new Book("데미안"));
bookShelf.appendBook(new Book("니체의 말"));
bookShelf.appendBook(new Book("코스모스"));
bookShelf.appendBook(new Book("창백한 푸른 점"));

const it = bookShelf.iterator();

while (it.hasNext()) {
  const book = it.next();
  console.log(book.name);
}
