/**
 * @interface
 */
class Print {
  /**
   * @public
   * @abstract
   */
  printWeak() {}

  /**
   * @public
   * @abstract
   */
  printStrong() {}
}

module.exxports = Print;
