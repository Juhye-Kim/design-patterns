/**
 * 한 개의 문서를 만드는 클래스
 * - Builder를 사용
 */
class Director {
  constructor(builder) {
    /**
     * @type {Builder}
     * @private
     */
    this._builder = builder;
  }

  construct() {
    this._builder.makeTitle("인사");
    this._builder.makeString("아침과 낮에");
    this._builder.makeItems(["좋은 아침!", "안녕하세요!"]);
    this._builder.makeString("밤에");
    this._builder.makeItems(["안녕하세요", "잘자요", "안녕히 계세요"]);
    this._builder.close();
  }
}

module.exports = Director;
