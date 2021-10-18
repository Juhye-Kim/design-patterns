class Context {
  /**
   * @param {string} text
   */
  constructor(text) {
    /**
     * @type {string[]}
     * @private
     */
    this._tokens = text.split(" ");

    /**
     *
     * @type {number}
     * @private
     */
    this._idx = -1;

    this.nextToken();
  }

  /**
   * @return {string}
   */
  nextToken() {
    if (this._idx < this._tokens.length - 1) {
      this._idx++;
      this._currentToken = this._tokens[this._idx];
    } else {
      this._currentToken = null;
    }

    return this._currentToken;
  }

  /**
   * @returns {string}
   */
  get currentToken() {
    return this._currentToken;
  }

  skipToken(token) {
    if (this.currentToken !== token) {
      console.log(
        new Error(
          `Warning: ${token} is expected, but ${this.currentToken} is found.`
        )
      );
    }
    this.nextToken();
  }

  /**
   * @returns {number}
   */
  get currentNumber() {
    return parseInt(this.currentToken);
  }
}

module.exports = Context;
