const Visitor = require("./visitor");
const Directory = require("./directory");

/**
 * 데이터 구조를 돌아다니며 종류를 표시하기 위한 클래스
 */
class ListVisitor extends Visitor {
  constructor() {
    super();

    /**
     * 현재 주목하는 디렉터리
     * @type {string}
     * @private
     */
    this._currentdir = "";
  }

  /**
   * 방문한 클래스의 accept 메서드에서 호출됨
   * @param {Entry} entry
   */
  visit(entry) {
    if (entry instanceof File) {
      console.log(`${this._currentdir}/${entry}`);
    } else if (entry instanceof Directory) {
      console.log(`${this._currentdir}/${entry}`);

      const saveDir = this._currentdir;
      this._currentdir = `${this._currentdir}/${entry.getName()}`;
      entry.dir.forEach((e) => e.accept(this));
      this._currentdir = saveDir;
    }
  }
}

module.exports = ListVisitor;
