/**
 * @implements Drawable
 */
class DrawCanvas {
  /**
   * @param {number} width
   * @param {number} height
   * @param {MacroCommand} history
   */
  constructor(width, height, history) {
    /**
     * 그림그리는 색
     * @type {string}
     * @private
     */
    this._color = "red";

    /**
     * @type {string}
     * @private
     */
    this._background = "white";

    /**
     * 그림 그리는 점의 반경
     * @type {number}
     * @private
     */
    this._radius = 6;

    this._history = history;
  }

  paint() {
    history.execute();
  }

  draw(x, y) {
    console.log(
      `${x - this._radius}부터 ${y - this._radius}까지 그림을 그립니다.`
    );
  }
}

module.exports = DrawCanvas;
