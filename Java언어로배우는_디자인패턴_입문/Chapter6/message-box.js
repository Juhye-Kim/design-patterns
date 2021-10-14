/**
 * @implements Product
 */
class MessageBox {
  constructor(decochar) {
    /**
     * @type {string}
     * @private
     */
    this._decochar = decochar;
  }

  /**
   * @public
   * @param {string} s
   */
  use(s) {
    const length = s.length;

    console.log(this._decochar.repeat(length + 4));
    console.log(`${this._decochar} ${s} ${this._decochar}`);
    console.log(this._decochar.repeat(length + 4));
  }

  createClone() {
    return new MessageBox(this._decochar); // clone()
  }
}

module.exports = MessageBox;
