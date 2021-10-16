/**
 * @public
 * @abstract
 */
class AbstractDisplay {
  /**
   * @public
   * @abstract
   */
  open() {}

  /**
   * @public
   * @abstract
   */
  print() {}

  /**
   * @public
   * @abstract
   */
  close() {}

  /**
   * @public
   * @final
   */
  display() {
    this.open();
    for (let i = 0; i < 5; i++) {
      this.print();
    }
    this.close();
  }
}

module.exports = AbstractDisplay;
