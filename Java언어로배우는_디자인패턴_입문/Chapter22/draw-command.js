/**
 * 점 그리기 명령
 * @implements Command
 */
class DrawCommand {
  /**
   * @param {Drawable} drawable
   * @param {Point} position
   */
  constructor(drawable, position) {
    /**
     * 그림 그리는 대상
     * @type {Drawable}
     * @protected
     */
    this.drawable = drawable;

    /**
     * 그림 그리는 위치
     * @type {Point}
     * @private
     */
    this._position = position;
  }

  execute() {
    this.drawable.draw(this._position.x, this._position.y);
  }
}

module.exports = DrawCommand;
