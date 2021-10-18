/**
 * 여러 명령들을 모은 명령
 * @implements Command
 */
class MacroCommand {
  constructor() {
    /**
     * 명령 집합
     * @type {Command[]}
     * @private
     */
    this._commands = [];
  }

  /**
   * 명령 차례로 실행
   */
  execute() {
    this._commands.forEach((c) => c.execute());
  }

  /**
   * 명령 추가
   * @param {Command} cmd
   */
  append(cmd) {
    if (cmd !== this) this._commands.push(cmd);
  }

  /**
   * 마지막 명령 삭제
   */
  undo() {
    this._commands.length && this._commands.pop();
  }

  /**
   * 명령 기록 전부 삭제
   */
  clear() {
    this._commands = [];
  }
}

module.exports = MacroCommand;
